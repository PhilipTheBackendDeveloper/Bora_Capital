"use client"

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, StatusBar } from "react-native"
import { Link, router } from "expo-router"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import * as LocalAuthentication from "expo-local-authentication"

export default function Signup() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [countryCode, setCountryCode] = useState("+233")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const getPasswordStrength = (password: string) => {
    if (password.length < 6) return { strength: "Weak", color: "#EF4444" }
    if (password.length < 8) return { strength: "Fair", color: "#F59E0B" }
    if (password.length >= 8 && /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return { strength: "Strong", color: "#10B981" }
    }
    return { strength: "Good", color: "#3B82F6" }
  }

  const handleBiometricLogin = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      if (!compatible) {
        Alert.alert("Error", "Your device does not support biometrics.")
        return
      }

      const enrolled = await LocalAuthentication.isEnrolledAsync()
      if (!enrolled) {
        Alert.alert("Error", "No Face ID / Fingerprint enrolled.")
        return
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Face ID / Touch ID",
        fallbackLabel: "Enter Password",
      })

      if (result.success) {
        router.push("/(tabs)/home")
      } else {
        Alert.alert("Error", "Authentication failed. Try again.")
      }
    } catch (error) {
      Alert.alert("Error", "Authentication failed. Try again.")
    }
  }

  const handleSignup = () => {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address")
      return
    }

    if (phoneNumber.length !== 10) {
      Alert.alert("Error", "Phone number must be 10 digits")
      return
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match")
      return
    }

    if (!agreeToTerms) {
      Alert.alert("Error", "Please agree to the Terms of Service and Privacy Policy")
      return
    }

    router.push("/otp")
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoLeft} />
            <View style={styles.logoRight} />
          </View>
          <Text style={styles.brandName}>Bora</Text>
          <Text style={styles.brandSubtitle}>CAPITAL ADVISORS</Text>
          <Text style={styles.tagline}>Premium Investment Solutions</Text>
        </View>

        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>Join thousands of investors building wealth</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
              <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <View style={styles.phoneContainer}>
              <View style={styles.countryCodeContainer}>
                <Text style={styles.countryCode}>{countryCode}</Text>
              </View>
              <View style={styles.phoneInputWrapper}>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChangeText={(text) => {
                    if (text.length <= 10) setPhoneNumber(text)
                  }}
                  keyboardType="phone-pad"
                />
                <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              </View>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Create a strong password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <View style={styles.passwordIcons}>
                <View style={[styles.strengthIndicator, { backgroundColor: getPasswordStrength(password).color }]} />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
            {password.length > 0 && (
              <Text style={[styles.strengthText, { color: getPasswordStrength(password).color }]}>
                {getPasswordStrength(password).strength}
              </Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <View style={styles.passwordIcons}>
                <View
                  style={[
                    styles.strengthIndicator,
                    {
                      backgroundColor:
                        password === confirmPassword && confirmPassword.length > 0 ? "#10B981" : "#E5E7EB",
                    },
                  ]}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Ionicons name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreeToTerms(!agreeToTerms)}>
            <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}>
              {agreeToTerms && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxText}>
              I agree to the <Text style={styles.linkText}>Terms of Service</Text> and{" "}
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <Link href="/login" style={styles.loginLink}>
            <Text style={styles.loginLinkText}>
              Already have an account? <Text style={styles.linkText}>Log in</Text>
            </Text>
          </Link>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.biometricContainer}>
            <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricLogin}>
              <Ionicons name="finger-print" size={24} color="#0A1F44" />
              <Text style={styles.biometricText}>Touch ID</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.biometricButton} onPress={handleBiometricLogin}>
              <Ionicons name="scan" size={24} color="#0A1F44" />
              <Text style={styles.biometricText}>Face ID</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.securityNote}>
            <Ionicons name="shield-checkmark" size={16} color="#10B981" />
            <Text style={styles.securityText}>Your data is protected with bank-level security</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  logoLeft: {
    width: 20,
    height: 30,
    backgroundColor: "#0A1F44",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: 2,
  },
  logoRight: {
    width: 20,
    height: 30,
    backgroundColor: "#CBA052",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  brandName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A1F44",
    marginBottom: 2,
  },
  brandSubtitle: {
    fontSize: 12,
    color: "#0A1F44",
    letterSpacing: 1,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: "#6B7280",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0A1F44",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 32,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0A1F44",
    marginBottom: 8,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    paddingRight: 50,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#0A1F44",
  },
  inputIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  phoneContainer: {
    flexDirection: "row",
    gap: 12,
  },
  countryCodeContainer: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    minWidth: 80,
  },
  countryCode: {
    fontSize: 16,
    color: "#0A1F44",
    textAlign: "center",
  },
  phoneInputWrapper: {
    flex: 1,
    position: "relative",
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    paddingRight: 50,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
    color: "#0A1F44",
  },
  passwordIcons: {
    position: "absolute",
    right: 16,
    top: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  strengthIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  strengthText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 24,
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: "#CBA052",
    borderColor: "#CBA052",
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#CBA052",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  loginLink: {
    alignSelf: "center",
    marginBottom: 32,
  },
  loginLinkText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
  linkText: {
    color: "#CBA052",
    fontWeight: "500",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontSize: 14,
    color: "#6B7280",
  },
  biometricContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 32,
  },
  biometricButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    gap: 8,
  },
  biometricText: {
    fontSize: 14,
    color: "#0A1F44",
    fontWeight: "500",
  },
  securityNote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  securityText: {
    fontSize: 12,
    color: "#6B7280",
  },
})
