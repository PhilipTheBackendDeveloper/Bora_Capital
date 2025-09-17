import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const { width, height } = Dimensions.get("window")

export default function DocumentViewScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Document Viewer</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share" size={24} color="#2A9DF4" />
        </TouchableOpacity>
      </View>

      {/* PDF Viewer Placeholder */}
      <View style={styles.pdfContainer}>
        <View style={styles.pdfPlaceholder}>
          <Ionicons name="document-text" size={64} color="#2A9DF4" />
          <Text style={styles.pdfTitle}>PDF Document</Text>
          <Text style={styles.pdfSubtitle}>Monthly Statement - December 2023</Text>
          <Text style={styles.pdfDescription}>
            This is a placeholder for the PDF viewer. In a real app, you would integrate a PDF viewing library like
            react-native-pdf.
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download" size={20} color="#FFFFFF" />
          <Text style={styles.downloadButtonText}>Download</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.printButton}>
          <Ionicons name="print" size={20} color="#2A9DF4" />
          <Text style={styles.printButtonText}>Print</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  shareButton: {
    padding: 4,
  },
  pdfContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  pdfPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  pdfTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 20,
    marginBottom: 8,
  },
  pdfSubtitle: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 20,
  },
  pdfDescription: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
  },
  actionContainer: {
    flexDirection: "row",
    padding: 20,
    gap: 12,
  },
  downloadButton: {
    flex: 1,
    backgroundColor: "#2A9DF4",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  downloadButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  printButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2A9DF4",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  printButtonText: {
    color: "#2A9DF4",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
})
