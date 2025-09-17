import { Ionicons } from "@expo/vector-icons"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const mockDocuments = [
  { id: 1, name: "Monthly Statement - December 2023", type: "Statement", date: "2024-01-05" },
  { id: 2, name: "Tax Form 1099 - 2023", type: "Tax Form", date: "2024-01-15" },
  { id: 3, name: "Investment Agreement", type: "Agreement", date: "2023-12-01" },
  { id: 4, name: "Fund Prospectus - Growth Fund A", type: "Prospectus", date: "2023-11-20" },
  { id: 5, name: "KYC Documentation", type: "KYC", date: "2023-10-15" },
]

export default function DocumentsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Documents</Text>

      {/* Upload Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Upload Documents</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Ionicons name="cloud-upload" size={24} color="#2A9DF4" />
          <Text style={styles.uploadText}>Upload KYC Documents</Text>
          <Text style={styles.uploadSubtext}>PDF, JPG, PNG up to 10MB</Text>
        </TouchableOpacity>
      </View>

      {/* Documents List */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Documents</Text>
        {mockDocuments.map((document) => (
          <TouchableOpacity key={document.id} style={styles.documentRow}>
            <View style={styles.documentIcon}>
              <Ionicons name={getDocumentIcon(document.type)} size={24} color="#2A9DF4" />
            </View>
            <View style={styles.documentInfo}>
              <Text style={styles.documentName}>{document.name}</Text>
              <Text style={styles.documentDetails}>
                {document.type} • {document.date}
              </Text>
            </View>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {/* Document Categories */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Document Categories</Text>

        <TouchableOpacity style={styles.categoryRow}>
          <View style={styles.categoryIcon}>
            <Ionicons name="document-text" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryTitle}>Statements</Text>
            <Text style={styles.categoryCount}>3 documents</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryRow}>
          <View style={styles.categoryIcon}>
            <Ionicons name="calculator" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryTitle}>Tax Forms</Text>
            <Text style={styles.categoryCount}>2 documents</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryRow}>
          <View style={styles.categoryIcon}>
            <Ionicons name="contract" size={20} color="#2A9DF4" />
          </View>
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryTitle}>Agreements</Text>
            <Text style={styles.categoryCount}>1 document</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

function getDocumentIcon(type: string) {
  switch (type) {
    case "Statement":
      return "document-text"
    case "Tax Form":
      return "calculator"
    case "Agreement":
      return "contract"
    case "Prospectus":
      return "library"
    case "KYC":
      return "person"
    default:
      return "document"
  }
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
  uploadButton: {
    borderWidth: 2,
    borderColor: "#2A9DF4",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  uploadText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2A9DF4",
    marginTop: 8,
  },
  uploadSubtext: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  documentRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  documentInfo: {
    flex: 1,
  },
  documentName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 4,
  },
  documentDetails: {
    fontSize: 14,
    color: "#6B7280",
  },
  viewButton: {
    backgroundColor: "#2A9DF4",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  viewButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  categoryIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
    marginBottom: 2,
  },
  categoryCount: {
    fontSize: 14,
    color: "#6B7280",
  },
})
