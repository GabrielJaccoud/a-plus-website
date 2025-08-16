import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Import Space Grotesk
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-grotesk" }); // Add weights if needed

// Define color palette globally (based on logo colors)
const colors = {
  backgroundDark: "#101C2C", // Dark Navy Blue
  textLight: "#F7F7F7",       // Off-white
};

export const metadata: Metadata = {
  title: "A+ Group - Inovação para um mundo melhor",
  description: "Ecossistema de inovação em construção civil, arquitetura, engenharia, investimentos e impacto social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Apply font variables and global background/text colors */}
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter bg-[${colors.backgroundDark}] text-[${colors.textLight}]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
