import type React from "react"
import type { Metadata } from "next"
import { Ubuntu } from "next/font/google" // Import Ubuntu font
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configure the Ubuntu font
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Specify desired weights
  variable: "--font-sans", // Link to the --font-sans CSS variable
})

export const metadata: Metadata = {
  title: "Prashant Mishra", // Updated title for clarity
  description: "Dynamic HR Portfolio showcasing Prashant Mishra's skills and projects.", // Updated description
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={ubuntu.variable}>
      {" "}
      {/* Apply the font variable class */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
