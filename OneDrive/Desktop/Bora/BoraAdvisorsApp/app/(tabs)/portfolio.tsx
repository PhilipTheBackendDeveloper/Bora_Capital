"use client"

import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const mockHoldings = [
  { id: 1, name: "Growth Fund A", units: 120, value: 25000, allocation: 35, performance: "+12.5%" },
  { id: 2, name: "Balanced Fund B", units: 85, value: 18500, allocation: 26, performance: "+8.2%" },
  { id: 3, name: "Income Fund C", units: 200, value: 15000, allocation: 21, performance: "+5.1%" },
  { id: 4, name: "Tech Fund D", units: 50, value: 12800, allocation: 18, performance: "+15.8%" },
]

const timeFilters = ["1M", "6M", "1Y", "All"]

export default function PortfolioScreen() {
  const [selectedFilter, setSelectedFilter] = useState("1Y")

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Portfolio</Text>

      {/* Holdings Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Holdings</Text>
        {mockHoldings.map((holding) => (
          <TouchableOpacity key={holding.id} style={styles.holdingRow}>
            <View style={styles.holdingInfo}>
              <Text style={styles.holdingName}>{holding.name}</Text>
              <Text style={styles.holdingDetails}>
                {holding.units} units • {holding.allocation}% allocation
              </Text>
            </View>
            <View style={styles.holdingValue}>
              <Text style={styles.holdingAmount}>${holding.value.toLocaleString()}</Text>
              <Text style={styles.holdingPerformance}>{holding.performance}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Performance Dashboard */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Performance</Text>

        {/* Filter Buttons */}
        <View style={styles.filterContainer}>
          {timeFilters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[styles.filterButton, selectedFilter === filter && styles.filterButtonActive]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text style={[styles.filterText, selectedFilter === filter && styles.filterTextActive]}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart Placeholder */}
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>📊 Performance Chart</Text>
          <Text style={styles.chartSubtext}>Portfolio performance for {selectedFilter}</Text>
        </View>
      </View>

      {/* Fund Details Navigation */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Fund Details</Text>
        <TouchableOpacity style={styles.detailRow}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailTitle}>View Fund Fact Sheets</Text>
            <Text style={styles.detailSubtitle}>Detailed information about each fund</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailRow}>
          <View style={styles.detailInfo}>
            <Text style={styles.detailTitle}>Performance History</Text>
            <Text style={styles.detailSubtitle}>Historical performance data</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
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
  holdingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  holdingInfo: {
    flex: 1,
  },
  holdingName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },
  holdingDetails: {
    fontSize: 14,
    color: "#6B7280",
  },
  holdingValue: {
    alignItems: "flex-end",
  },
  holdingAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 2,
  },
  holdingPerformance: {
    fontSize: 14,
    color: "#10B981",
    fontWeight: "500",
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: "#2A9DF4",
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#6B7280",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  chartText: {
    fontSize: 24,
    marginBottom: 4,
  },
  chartSubtext: {
    fontSize: 14,
    color: "#6B7280",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  detailInfo: {
    flex: 1,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },
  detailSubtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
})
