import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dakota Autism Center - Evidence-Based Care",
  description:
    "Personalized autism services designed for clarity and growth. We foster safe, trusting environments where your child can navigate the world with confidence.",
};

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${workSans.variable} antialiased flex flex-col min-h-screen`}
        style={{
          fontFamily: "var(--font-work-sans), var(--font-secondary)",
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
