"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, GitCompareArrows, CalendarCheck } from "lucide-react"

// Define the content structure
interface TabContent {
  id: string
  label: string
  icon: React.ElementType
  headline: string
  body: string
  primaryBtn: string
  primaryHref: string
  secondaryBtn: string
  secondaryHref: string
  /** Nav pill background */
  accent: string
  /** Hex value for inline styles */
  accentHex: string
  /** Primary button classes */
  btnClass: string
  /** Outline button classes */
  outlineClass: string
}

const tabs: TabContent[] = [
  {
    id: "new-to-autism",
    label: "New to Autism?",
    icon: Compass,
    headline: "Understanding Your Child's Diagnosis",
    body: "Just received a diagnosis or concerned about your child? You're not alone. We'll help you understand what autism means, how ABA therapy works, and what the next steps look like for your family.",
    primaryBtn: "Learn About Autism & ABA",
    primaryHref: "/resources",
    secondaryBtn: "What to Expect",
    secondaryHref: "/about",
    accent: "bg-[#115C47]",
    accentHex: "#115C47",
    btnClass: "bg-[#115C47] hover:bg-[#0E4A38] active:bg-[#0A3829] text-white",
    outlineClass: "border-[#115C47] text-[#115C47] hover:bg-[#E8F4F0]",
  },
  {
    id: "exploring-aba",
    label: "Exploring Programs?",
    icon: GitCompareArrows,
    headline: "Find the Right Therapy for Your Family",
    body: "Researching the best therapy options for your family? Explore our range of evidence-based ABA programs — from early intervention to social skills groups — and discover which approach fits your child's unique needs.",
    primaryBtn: "Compare Our Services",
    primaryHref: "/services",
    secondaryBtn: "Insurance & Funding",
    secondaryHref: "/insurance",
    accent: "bg-[#42AEEB]",
    accentHex: "#42AEEB",
    btnClass: "bg-[#42AEEB] hover:bg-[#2B9ADB] active:bg-[#1F8BCC] text-white",
    outlineClass: "border-[#42AEEB] text-[#42AEEB] hover:bg-[#EAF6FD]",
  },
  {
    id: "ready-to-start",
    label: "Ready to Start?",
    icon: CalendarCheck,
    headline: "Let's Begin Your Child's Journey",
    body: "Know what you need and ready to move forward? Schedule a free consultation with our team. We'll walk you through enrollment, insurance verification, and create a personalized plan for your child.",
    primaryBtn: "Schedule Consultation",
    primaryHref: "/contact",
    secondaryBtn: "Call Us Now",
    secondaryHref: "/contact",
    accent: "bg-[#FB9A31]",
    accentHex: "#FB9A31",
    btnClass: "bg-[#FB9A31] hover:bg-[#E8882B] active:bg-[#D47725] text-white",
    outlineClass: "border-[#FB9A31] text-[#FB9A31] hover:bg-[#FEF3E8]",
  },
]

export default function PathNavigation() {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].id)

  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section className="section relative w-full bg-white overflow-hidden">
      {/* Section Label */}
      <div className="container-max section-header relative z-10">
        <span className="badge badge-primary mb-4 inline-block px-4 py-1.5 text-xs tracking-wider uppercase font-semibold">
          Path Navigation
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-[1.15] tracking-tight">
          Where Would You Like to Start?
        </h2>
      </div>

      {/* Navigation Bar - Stacked on mobile, pill tabs on md+ */}
      <div className="flex justify-center mb-8 md:mb-12 lg:mb-16 relative z-10">
        <div
          className={cn(
            "relative flex flex-col w-full max-w-sm gap-2 p-2 bg-white rounded-2xl border-2 border-[#474044]/15 shadow-sm",
            "md:inline-flex md:flex-row md:flex-wrap md:justify-center md:items-center md:w-auto md:max-w-none md:gap-1 md:rounded-full"
          )}
        >
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative flex items-center gap-2.5 px-4 py-3 md:px-6 md:py-3.5 lg:px-8 lg:py-4 rounded-xl md:rounded-full text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 z-10 w-full md:w-auto justify-start md:justify-center",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-[#474044] hover:text-[#115C47]"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-pill"
                    className={cn(
                      "absolute inset-0 rounded-xl md:rounded-full -z-10 shadow-md",
                      tab.accent
                    )}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <TabIcon className="w-5 h-5 shrink-0" strokeWidth={1.75} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max flex flex-col items-center text-center relative z-10 min-h-0 md:min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-[800px] mx-auto flex flex-col items-center"
          >
            {/* Headline */}
            <h3
              className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 leading-[1.15] tracking-tight"
              style={{ color: activeContent.accentHex }}
            >
              {activeContent.headline}
            </h3>

            {/* Body Copy */}
            <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-6 md:mb-10 max-w-2xl leading-relaxed font-light">
              {activeContent.body}
            </p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto mt-1 md:mt-2">
              <Button
                size="lg"
                className={cn("w-full sm:w-auto", activeContent.btnClass)}
                icon="solar:arrow-right-broken"
              >
                {activeContent.primaryBtn}
              </Button>
              <Button
                size="lg"
                className={cn(
                  "w-full sm:w-auto bg-transparent border-[1.5px] rounded-[45px]",
                  activeContent.outlineClass
                )}
              >
                {activeContent.secondaryBtn}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Background Elements (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary/3 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] right-[20%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-secondary/3 rounded-full blur-3xl opacity-60" />
      </div>
    </section>
  )
}
