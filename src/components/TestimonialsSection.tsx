"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.",
      author: "Maja & Ariel",
      role: "Parent of Emily"
    },
    {
      quote: "The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.",
      author: "Emily R.",
      role: "Parent of Emily"
    },
    {
      quote: "The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.",
      author: "Maja & Ariel",
      role: "Parent of Emily"
    },
    {
      quote: "The calm, thoughtful rhythm of the day makes such a difference. My daughter comes home smiling — and so do we.",
      author: "Emily R.",
      role: "Parent of Emily"
    }
  ]

  // Duplicate testimonials for seamless looping
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="relative w-full overflow-hidden bg-[#FB9A31] pt-4 pb-12 lg:pt-6 lg:pb-16">
      <div className="container-max relative z-10 px-4 md:px-8">
        
        {/* 1. Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 lg:mb-10 gap-4 lg:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-primary !text-white leading-tight max-w-xl">
            See what everyday <br className="hidden lg:block" />
            <span className="text-white">joy looks like</span>
          </h2>
          <p className="text-white/90 text-lg leading-snug font-secondary max-w-lg mb-1">
            Step inside a day at Dakota Autism Center – where calm curiosity meets spontaneous joy. Watch how our teachers guide, listen, and laugh alongside the little ones, creating an environment where every child feels understood, supported, and free to grow at their own pace.
          </p>
        </div>

        {/* 2. Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full aspect-21/9 rounded-3xl overflow-hidden shadow-xl mb-10 bg-white/20 group"
        >
          <Image
            src="/placeholder.svg"
            alt="Day at Dakota Autism Center Video"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
          
          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex items-center gap-3 bg-[#474044]/90 hover:bg-[#115C47] text-white px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl">
              <div className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
                <Icon icon="solar:play-bold" className="w-4 h-4 text-[#FB9A31]" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-semibold tracking-wide">Watch the full video</span>
                <span className="block text-xs opacity-80">2m 32s</span>
              </div>
            </button>
          </div>
        </motion.div>

        {/* 3. Testimonials Marquee */}
        <div className="relative w-full overflow-hidden -mx-4 md:-mx-8 px-4 md:px-8">
          {/* Alpha Mask for Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-linear-to-r from-[#FB9A31] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-linear-to-l from-[#FB9A31] to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 lg:gap-8 w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              duration: 15, 
              ease: "linear", 
              repeat: Infinity 
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] bg-white p-6 rounded-2xl shadow-sm border border-[#EBEBEB] flex flex-col h-full hover:shadow-md transition-shadow duration-300 shrink-0"
              >
                <div className="flex justify-between items-start mb-4">
                  {/* Logo Mark */}
                  <div className="relative w-8 h-8 opacity-80">
                    <Image 
                      src="/logo-mark.svg" 
                      alt="Dakota Autism Center Logo Mark" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} icon="solar:star-bold" className="w-4 h-4 text-[#FB9A31]" />
                    ))}
                  </div>
                </div>

                <p className="text-[#6B6569] text-lg leading-snug mb-6 font-secondary grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#E8F4F0] flex items-center justify-center overflow-hidden">
                     <Icon icon="solar:user-circle-bold" className="w-full h-full text-[#B2D8CA]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#474044] font-primary text-base leading-none mb-1">{testimonial.author}</p>
                    <p className="text-sm text-[#8F8B8E] font-secondary leading-none">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
