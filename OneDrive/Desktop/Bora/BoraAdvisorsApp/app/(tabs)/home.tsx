import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const mockTransactions = [
  { id: 1, type: "Deposit", amount: 2500, date: "2024-01-15", positive: true },
  { id: 2, type: "Withdrawal", amount: -800, date: "2024-01-12", positive: false },
  { id: 3, type: "Transfer", amount: 1200, date: "2024-01-10", positive: true },
]

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Portfolio Balance Card */}
      <LinearGradient
        colors={["#0F1B34", "#2A9DF4"]}
        style={styles.balanceCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.balanceLabel}>Portfolio Balance</Text>
        <Text style={styles.balanceAmount}>$124,580.00</Text>
        <View style={styles.growthContainer}>
          <Ionicons name="trending-up" size={16} color="#10B981" />
          <Text style={styles.growthText}>+2.4% this month</Text>
        </View>
      </LinearGradient>

      {/* Mini Chart Placeholder */}
      <View style={styles.chartCard}>
        <Text style={styles.sectionTitle}>Performance</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartText}>📈 Chart Placeholder</Text>
          <Text style={styles.chartSubtext}>Portfolio performance over time</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsCard}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="add-circle" size={24} color="#2A9DF4" />
            <Text style={styles.actionText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="card" size={24} color="#2A9DF4" />
            <Text style={styles.actionText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="swap-horizontal" size={24} color="#2A9DF4" />
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Latest Transactions */}
      <View style={styles.transactionsCard}>
        <Text style={styles.sectionTitle}>Latest Transactions</Text>
        {mockTransactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionRow}>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionType}>{transaction.type}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: transaction.positive ? "#10B981" : "#EF4444" }]}>
              {transaction.positive ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
            </Text>
          </View>
        ))}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all transactions</Text>
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
  balanceCard: {
    margin: 20,
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  balanceLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 8,
  },
  balanceAmount: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  growthContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  growthText: {
    color: "#10B981",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  chartCard: {
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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 120,
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
  actionsCard: {
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
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    alignItems: "center",
    padding: 16,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    color: "#111827",
    fontWeight: "500",
  },
  transactionsCard: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    marginTop: 0,
    marginBottom: 40,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  transactionDate: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  viewAllButton: {
    marginTop: 16,
    alignItems: "center",
  },
  viewAllText: {
    color: "#2A9DF4",
    fontSize: 16,
    fontWeight: "500",
  },
})
