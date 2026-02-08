"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Define the content structure
interface TabContent {
  id: string
  label: string
  eyebrow: string
  headline: string
  body: string
  primaryBtn: string
  secondaryBtn: string
}

const tabs: TabContent[] = [
  {
    id: "new-families",
    label: "New Families",
    eyebrow: "Compassionate Care",
    headline: "Your Partner in Autism Therapy",
    body: "We guide families through every step of the journey—from diagnosis and insurance verification to personalized ABA therapy plans designed for your child's unique needs.",
    primaryBtn: "Start Enrollment",
    secondaryBtn: "Our Services"
  },
  {
    id: "insurance",
    label: "Insurance Info",
    eyebrow: "Financial Support",
    headline: "Making Care Accessible",
    body: "We accept most major insurance plans and handle the authorization process for you, ensuring your child gets the care they need without the stress.",
    primaryBtn: "Check Coverage",
    secondaryBtn: "View Providers"
  },
  {
    id: "programs",
    label: "Our Programs",
    eyebrow: "Evidence-Based Therapy",
    headline: "Personalized Growth Plans",
    body: "From early intervention to social skills groups, our ABA programs are tailored to help your child build confidence, independence, and meaningful connections.",
    primaryBtn: "Explore Programs",
    secondaryBtn: "Meet the Team"
  }
]

export default function ContentNavigation() {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].id)

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0]

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">
      {/* Navigation Bar - Simple & Clean */}
      <div className="flex justify-center mb-12 lg:mb-20 relative z-10">
        <div className="relative inline-flex items-center p-2 bg-white rounded-full border-2 border-[#474044]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 z-10",
                activeTab === tab.id ? "text-white" : "text-[#474044] hover:text-[#2E9DD6]"
              )}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-[#2E9DD6] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max flex flex-col items-center text-center relative z-10 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-[800px] mx-auto flex flex-col items-center"
          >
            {/* Eyebrow */}
            <span className="badge badge-primary mb-6 px-4 py-1.5 text-xs tracking-wider uppercase font-semibold">
              {activeContent.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-[1.15] tracking-tight">
              {activeContent.headline}
            </h2>

            {/* Body Copy */}
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-light">
              {activeContent.body}
            </p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-primary">
                {activeContent.primaryBtn}
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {activeContent.secondaryBtn}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Decorative Background Elements (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-secondary/3 rounded-full blur-3xl opacity-60" />
      </div>
    </section>
  )
}
