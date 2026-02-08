import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Icon } from "@iconify/react"

import { cn } from "@/lib/utils"
import { arrowRightBroken } from "@/lib/solar-icons"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-['Poppins'] font-medium text-base md:text-lg tracking-[-0.02em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-[#EA3D6A] text-[#474044] hover:bg-[#d73760] active:bg-[#c52f56] rounded-[45px] border-[1.5px] border-transparent",
        primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-active rounded-[45px] border-[1.5px] border-transparent",
        secondary: "bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active rounded-[45px] border-[1.5px] border-transparent",
        outline: "bg-transparent text-[#474044] border-[1.5px] border-[#474044] hover:bg-[#EA3D6A]/10 rounded-[45px]",
        ghost: "bg-transparent text-primary hover:bg-primary-light rounded-[45px]",
        accent: "bg-[#EA3D6A] text-[#474044] hover:bg-[#d73760] active:bg-[#c52f56] rounded-[45px] border-[1.5px] border-transparent",
      },
      size: {
        default: "h-11 md:h-12 px-4 md:px-5",
        sm: "h-9 px-3.5 text-sm md:text-base",
        lg: "h-12 md:h-14 px-5 md:px-6 text-lg md:text-xl",
        icon: "h-11 w-11 md:h-12 md:w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: string // Iconify icon name (e.g., "solar:arrow-right-broken")
  iconPosition?: "left" | "right"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconPosition = "right", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Bundle Solar's arrow-right-broken locally (no runtime icon fetch).
    const resolvedIcon = icon === "solar:arrow-right-broken" ? arrowRightBroken : icon
    
    const content = (
      <>
        {resolvedIcon && iconPosition === "left" && (
          <Icon icon={resolvedIcon} width={18} height={18} className="shrink-0" />
        )}
        {children}
        {resolvedIcon && iconPosition === "right" && (
          <Icon icon={resolvedIcon} width={18} height={18} className="shrink-0" />
        )}
      </>
    )
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
