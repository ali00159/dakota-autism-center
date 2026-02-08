"use client"

import * as React from "react"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ServiceItem {
  id: string
  title: string
  description: string
  bullets: string[]
  icon: string
  accentHex: string
  lightBg: string
  textColor: string
  iconColor: string
  bulletBg: string
}

const services: ServiceItem[] = [
  {
    id: "center-based",
    title: "Center-Based ABA Therapy",
    description:
      "Our center provides a school-like environment where children build skills through structured routines, peer interaction, and group activities.",
    bullets: [
      "School-like environment",
      "Peer interaction & group skills",
      "Structured routines",
    ],
    icon: "solar:buildings-bold-duotone",
    accentHex: "#115C47", // Emerald Depths
    lightBg: "#E8F4F0",
    textColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    bulletBg: "rgba(0, 0, 0, 0.15)",
  },
  {
    id: "in-home",
    title: "In-Home ABA Therapy",
    description:
      "Therapy takes place in the comfort of your home, focusing on real-world skill building with flexible scheduling for busy families.",
    bullets: [
      "Natural environment learning",
      "Flexible scheduling",
      "Real-world skill building",
    ],
    icon: "solar:home-smile-bold-duotone",
    accentHex: "#E0F2FE", // Pale Sky (Light Blue)
    lightBg: "#E5F4FC",
    textColor: "#1F2937", // Dark Text
    iconColor: "#0284C7", // Darker Blue for Icon
    bulletBg: "rgba(255, 255, 255, 0.6)",
  },
  {
    id: "family-training",
    title: "Family Training & Support",
    description:
      "We coach you with strategies you can use every day — because lasting progress happens when the whole family is part of the journey.",
    bullets: [
      "Coaching for lasting success",
      "Everyday strategies",
      "Partnership approach",
    ],
    icon: "solar:users-group-rounded-bold-duotone",
    accentHex: "#FB9A31", // Carrot Oranges
    lightBg: "#FEF3E8",
    textColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    bulletBg: "rgba(0, 0, 0, 0.1)",
  },
  {
    id: "eidbi",
    title: "EIDBI — Early Intervention",
    description:
      "Comprehensive early intervention for children ages 0–6, covered by Medical Assistance. Intensive support during critical years.",
    bullets: [
      "Comprehensive intervention",
      "Medical Assistance coverage",
      "Support for ages 0–6",
    ],
    icon: "solar:heart-pulse-bold-duotone",
    accentHex: "#EA3D6A", // Salmon
    lightBg: "#FDE8EE",
    textColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    bulletBg: "rgba(0, 0, 0, 0.1)",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const

export default function ServicesOverview() {
  return (
    <section
      className="section relative w-full overflow-hidden rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[160px] md:rounded-br-[160px] bg-bg-services"
      aria-labelledby="services-heading"
    >
      {/* Header */}
      <div className="container-max section-header relative z-10">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight mb-4 text-dark"
        >
          <span className="text-tertiary">Flexible ABA Therapy</span>{" "}
          That Fits Your Family
        </h2>
        <p
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          We offer a range of evidence-based programs designed to meet your
          child where they are — at home, at our center, at school, or
          through family coaching.
        </p>
      </div>

      {/* Card Grid */}
      <motion.div
        className="container-max grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(71, 64, 68, 0.16)" }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="group relative rounded-2xl overflow-hidden shadow-md flex flex-col h-full will-change-transform"
            style={{ backgroundColor: service.accentHex }}
          >
            <div className="p-6 lg:p-8 flex flex-col h-full items-center text-center">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                style={{ 
                  backgroundColor: service.textColor === "#FFFFFF" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.8)",
                  color: service.iconColor
                }}
              >
                <Icon
                  icon={service.icon}
                  width={24}
                  height={24}
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl lg:text-2xl font-bold mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-primary)", color: service.textColor }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="text-[15px] leading-relaxed mb-6 font-medium"
                style={{ color: service.textColor, opacity: 0.9 }}
              >
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul 
                className="space-y-3 mt-auto w-full text-left"
              >
                {service.bullets.map((bullet, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-3 px-4 py-3 rounded-full"
                    style={{ 
                      backgroundColor: service.textColor === "#FFFFFF" ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    <Icon 
                      icon="solar:check-circle-bold" 
                      className="w-6 h-6 shrink-0"
                      style={{ color: service.textColor }}
                    />
                    <span 
                      className="text-base lg:text-lg leading-snug font-medium"
                      style={{ color: service.textColor }}
                    >
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="container-max text-center mt-10 lg:mt-14 relative z-10">
        <Button
          variant="primary"
          size="lg"
          icon="solar:arrow-right-broken"
          className="shadow-lg hover:shadow-xl bg-[#474044]! text-white! hover:bg-[#2d292b]! hover:-translate-y-1 transition-all duration-300"
        >
          Learn About All Our Services
        </Button>
      </div>
    </section>
  )
}
