"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap  text-sm  font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-[family-name:var(--font-fig-tree)]",
  {
    variants: {
      variant: {
        default:
          "relative m-[5px] md:pl-[45px] pl-[20px] md:pr-[44px] pr-[20px] md:h-[50px] h-[40px] bg-white/20 text-[18px] text-white font-[family-name:var(--font-vt323)] capitalize flex items-center hover:bg-white/30 transition-all duration-300  hover:shadow-[0_0_20px_rgba(244,82,1,0.4)]",
        primary:
          "pr text-white bg-primary hover:bg-primary/90 relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-[-60%] before:w-[60%] before:bg-gradient-to-r  before:from-white/40 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 hover:before:left-[110%]  hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "out text-[#0E121B] tracking-[-0.084px] hover:bg-[#F5F6FA]  hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-300",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:bg-secondary/90  hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all duration-300",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline5 transition-all duration-300",
      },
      size: {
        default: "has-[>svg]:px-3",
        sm: "h-10 rounded-[10px] gap-1.5 px-[14px] has-[>svg]:px-2.5 tracking-[-0.084px]",
        lg: "h-10 w-[145px] rounded-[10px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  // For default variant, wrap with decorative elements
  if (variant === "default" || variant === undefined) {
    return (
      <div className="relative group">
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {props.children}
          <div className="bg-[#EAEAEA] absolute top-0 left-0"></div>
        </Comp>
        {/* Border elements with spaceship glow */}
        <div className="absolute top-0 left-[25px] right-[25px] h-[3px] bg-white/20 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#F45201] group-hover:to-transparent group-hover:shadow-[0_0_10px_#F45201] transition-all duration-300 pointer-events-none"></div>
        <div className="absolute bottom-0 left-[25px] right-[25px] h-[3px] bg-white/20 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#F45201] group-hover:to-transparent group-hover:shadow-[0_0_10px_#F45201] transition-all duration-300 pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-[#F45201] group-hover:to-transparent group-hover:shadow-[0_0_10px_#F45201] transition-all duration-300 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-[#F45201] group-hover:to-transparent group-hover:shadow-[0_0_10px_#F45201] transition-all duration-300 pointer-events-none"></div>
        {/* Corner accents with spaceship energy */}
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA] group-hover:bg-[#F45201] group-hover:shadow-[0_0_8px_#F45201] group-hover:animate-pulse transition-all duration-300 pointer-events-none"></div>

        {/* Spaceship energy core effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F45201]/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 pointer-events-none"></div>
      </div>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
