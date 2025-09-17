"use client"

import { useRouter } from "expo-router"
import { useEffect } from "react"
import { Image, StyleSheet, View } from "react-native"

export default function Index() {
  const router = useRouter()

  useEffect(() => {
    const navigateToOnboarding = async () => {
      try {
        // Wait 2 seconds for splash effect
        await new Promise((resolve) => setTimeout(resolve, 2000))
        router.replace("/onboarding")
      } catch (error) {
        console.error("Navigation error:", error)
        router.replace("/onboarding")
      }
    }

    navigateToOnboarding()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/icon.png")} style={styles.logo} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  logo: {
    width: 280,
    height: 125,
    marginBottom: 20,
  },
})
