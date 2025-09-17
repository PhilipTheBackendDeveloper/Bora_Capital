"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    // Redirect to the Expo app entry point
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#FFFFFF",
        color: "#0F1B34",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/BoraAdvisorsApp/assets/images/icon.png"
          alt="Bora Advisors"
          style={{ width: "120px", height: "120px" }}
        />
      </div>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Bora Advisors</h1>
      <p style={{ fontSize: "16px", color: "#6B7280", textAlign: "center", maxWidth: "400px" }}>
        This is a React Native Expo app. Please use the Expo Go app or build for mobile to experience the full
        functionality.
      </p>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            border: "2px solid #2A9DF4",
            borderTop: "2px solid transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
