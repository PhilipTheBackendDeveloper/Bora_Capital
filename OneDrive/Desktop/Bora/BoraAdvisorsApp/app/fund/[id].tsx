import { Ionicons } from "@expo/vector-icons"
import { router, useLocalSearchParams } from "expo-router"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const mockFundData = {
  "1": {
    name: "Growth Fund A",
    description:
      "A diversified growth fund focused on long-term capital appreciation through investments in high-quality growth companies.",
    performance: {
      "1M": "+2.1%",
      "6M": "+8.5%",
      "1Y": "+12.5%",
      "3Y": "+35.2%",
    },
    holdings: 120,
    value: 25000,
    allocation: 35,
    riskLevel: "Moderate-High",
    minInvestment: "$1,000",
    managementFee: "0.75%",
  },
  // Add more fund data as needed
}

export default function FundDetailScreen() {
  const { id } = useLocalSearchParams()
  const fund = mockFundData[id as keyof typeof mockFundData]

  if (!fund) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Fund not found</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fund Details</Text>
      </View>

      {/* Fund Info Card */}
      <View style={styles.card}>
        <Text style={styles.fundName}>{fund.name}</Text>
        <Text style={styles.fundDescription}>{fund.description}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Your Holdings</Text>
            <Text style={styles.statValue}>{fund.holdings} units</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Current Value</Text>
            <Text style={styles.statValue}>${fund.value.toLocaleString()}</Text>
          </View>
        </View>
      </View>

      {/* Performance Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Performance</Text>
        <View style={styles.performanceGrid}>
          {Object.entries(fund.performance).map(([period, value]) => (
            <View key={period} style={styles.performanceItem}>
              <Text style={styles.performancePeriod}>{period}</Text>
              <Text style={styles.performanceValue}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Fund Details Card */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Fund Information</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Risk Level</Text>
          <Text style={styles.detailValue}>{fund.riskLevel}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Minimum Investment</Text>
          <Text style={styles.detailValue}>{fund.minInvestment}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Management Fee</Text>
          <Text style={styles.detailValue}>{fund.managementFee}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Portfolio Allocation</Text>
          <Text style={styles.detailValue}>{fund.allocation}%</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Invest More</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Download Fact Sheet</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
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
  fundName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  fundDescription: {
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 24,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  performanceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  performanceItem: {
    width: "48%",
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  performancePeriod: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  performanceValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#10B981",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  detailLabel: {
    fontSize: 16,
    color: "#6B7280",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  actionContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  primaryButton: {
    backgroundColor: "#2A9DF4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2A9DF4",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#2A9DF4",
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    fontSize: 18,
    color: "#EF4444",
    textAlign: "center",
    marginTop: 100,
  },
})
