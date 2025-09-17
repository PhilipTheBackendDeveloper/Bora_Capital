"use client"

import { useState, useRef } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from "react-native"
import { useRouter } from "expo-router"
import LottieView from "lottie-react-native"

const { width, height } = Dimensions.get("window")

const onboardingData = [
  {
    id: "1",
    title: "Secure & Simple",
    subtitle: "Access your account safely with password, OTP, or fingerprint.",
    animation: require("../assets/images/lottie_animations/Password Authentication.json"),
  },
  {
    id: "2",
    title: "Track Your Investments",
    subtitle: "See your portfolio balance, growth charts, and performance in real time.",
    animation: require("../assets/images/lottie_animations/Growth.json"),
  },
  {
    id: "3",
    title: "Stay Organized",
    subtitle: "Access your statements, tax forms, and agreements securely from anywhere.",
    animation: require("../assets/images/lottie_animations/upload files loader.json"),
  },
]

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const router = useRouter()

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true })
    }
  }

  const handleSkip = () => {
    router.replace("/login")
  }

  const handleGetStarted = () => {
    router.replace("/login")
  }

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={styles.slide}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/icon.png")} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Lottie Animation */}
      <View style={styles.animationContainer}>
        <LottieView source={item.animation} autoPlay loop style={{ width: 220, height: 220 }} />
      </View>

      {/* Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  )

  const renderPagination = () => (
    <View style={styles.pagination}>
      {onboardingData.map((_, index) => (
        <View key={index} style={[styles.dot, index === currentIndex ? styles.activeDot : styles.inactiveDot]} />
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Onboarding Slides */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width)
          setCurrentIndex(index)
        }}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Buttons + Pagination */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={currentIndex === onboardingData.length - 1 ? handleGetStarted : handleNext}
        >
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
        {renderPagination()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", width, height },
  skipButton: { position: "absolute", top: 60, right: 32, zIndex: 10 },
  skipText: { fontSize: 16, fontWeight: "400", color: "#6B7280" },
  slide: { width, flex: 1, alignItems: "center", paddingHorizontal: 32 },
  logoContainer: { width: 180, height: 70, marginTop: 56, alignItems: "center", justifyContent: "center" },
  logo: { width: "100%", height: "100%" },
  animationContainer: { width: 220, height: 220, marginTop: 60, alignItems: "center", justifyContent: "center" },
  textContainer: { width: 320, alignItems: "center", marginTop: 70 },
  title: { fontWeight: "700", fontSize: 34, textAlign: "center", color: "#0F1B34", marginBottom: 12 },
  subtitle: { fontWeight: "400", fontSize: 18, textAlign: "center", color: "#6B7280", width: 260 },
  bottomContainer: { width, paddingHorizontal: 32, paddingBottom: 40 },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#2A9DF4",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: { fontWeight: "600", fontSize: 18, color: "#FFFFFF" },
  pagination: { flexDirection: "row", justifyContent: "center", alignItems: "center", height: 12 },
  dot: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 6 },
  activeDot: { backgroundColor: "#2A9DF4" },
  inactiveDot: { backgroundColor: "#D1D5DB" },
})
