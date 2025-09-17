"use client"

import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"

export default function ProfileScreen() {
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const handleLogout = () => {
    // Navigate back to login screen
    router.replace("/login")
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Profile</Text>

      {/* User Info Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>User Information</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <Ionicons name="person" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Full Name</Text>
            <Text style={styles.infoValue}>John Doe</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <Ionicons name="mail" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>john.doe@example.com</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <Ionicons name="call" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
          </View>
        </View>
      </View>

      {/* Security Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Security</Text>

        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="lock-closed" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Change Password</Text>
            <Text style={styles.settingSubtitle}>Update your account password</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <View style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="finger-print" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Biometric Authentication</Text>
            <Text style={styles.settingSubtitle}>Use fingerprint or face ID</Text>
          </View>
          <Switch
            value={biometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{ false: "#E5E7EB", true: "#2A9DF4" }}
            thumbColor={biometricEnabled ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="notifications" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Push Notifications</Text>
            <Text style={styles.settingSubtitle}>Receive account updates</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#E5E7EB", true: "#2A9DF4" }}
            thumbColor={notificationsEnabled ? "#FFFFFF" : "#FFFFFF"}
          />
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Settings</Text>

        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="settings" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Preferences</Text>
            <Text style={styles.settingSubtitle}>App settings and preferences</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="help-circle" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Help & Support</Text>
            <Text style={styles.settingSubtitle}>Get help and contact support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="information-circle" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>About</Text>
            <Text style={styles.settingSubtitle}>App version and information</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingRow, styles.logoutRow]} onPress={handleLogout}>
          <View style={[styles.settingIcon, styles.logoutIcon]}>
            <Ionicons name="log-out" size={20} color="#EF4444" />
          </View>
          <View style={styles.settingContent}>
            <Text style={[styles.settingTitle, styles.logoutText]}>Logout</Text>
            <Text style={styles.settingSubtitle}>Sign out of your account</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 50,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  logoutRow: {
    borderBottomWidth: 0,
  },
  logoutIcon: {
    backgroundColor: "#FEF2F2",
  },
  logoutText: {
    color: "#EF4444",
  },
})
