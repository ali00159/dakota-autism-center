"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="section py-20 md:py-32 lg:py-40 relative w-full overflow-hidden bg-white rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[160px] md:rounded-br-[160px]">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-full"
          >
            <div className="relative rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] overflow-hidden shadow-xl aspect-[4/5] w-full h-full min-h-[500px]">
              <Image
                src="/homepage-about-us-image.jpeg"
                alt="Childhood moments at Dakota Autism Center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start py-8 lg:py-12"
          >
            <span className="badge badge-primary mb-8 shadow-sm">
              Our Philosophy
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary text-[#474044] leading-[1.1] mb-8 tracking-tight">
              Childhood deserves presence — <span className="text-[#115C47]">not performance</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg text-[#6B6569] leading-relaxed font-secondary">
                At Dakota Autism Center, we believe that early years aren't about milestones — 
                they're about moments. We slow down the pace of the city to create 
                space for curiosity, kindness, and calm discovery.
              </p>
              
              <p className="text-lg text-[#6B6569] leading-relaxed font-secondary">
                We understand that every child's journey is unique. By blending clinical expertise 
                with a warm, nurturing atmosphere, we help children build confidence and essential 
                skills at their own rhythm, ensuring they feel safe, seen, and supported every step of the way.
              </p>
            </div>

            {/* Core Principles List */}
            <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full">
              {[
                { text: "Natural Growth", color: "#115C47" },
                { text: "Family Partnership", color: "#FB9A31" },
                { text: "Calm Discovery", color: "#42AEEB" },
                { text: "Kindness First", color: "#EA3D6A" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-lg text-[#474044]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="btn-contact group">
                Read Our Story
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 ml-2">
                  <Icon icon="solar:arrow-right-broken" className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
