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
          "relative m-[5px] pl-[45px] pr-[44px] h-[50px] bg-white/20 text-[18px] text-white font-[family-name:var(--font-vt323)] capitalize flex items-center hover:bg-white/30 transition-colors",
        primary:
          "pr text-white bg-primary hover:bg-primary/90 relative overflow-hidden before:content-[''] before:absolute before:inset-y-0 before:left-[-60%] before:w-[60%] before:bg-gradient-to-r  before:from-white/40 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 hover:before:left-[110%]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "out text-[#0E121B] tracking-[-0.084px] hover:bg-[#F5F6FA]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:bg-secondary/90",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
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
      <div className="relative">
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {props.children}
          <div className="bg-[#EAEAEA] absolute top-0 left-0"></div>
        </Comp>
        {/* Border elements */}
        <div className="absolute top-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
        <div className="absolute bottom-0 left-[25px] right-[25px] h-[3px] bg-white/20"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[3px] h-[25%] bg-white/20"></div>
        {/* Corner accents */}
        {/* Top-left corner */}
        <div className="absolute top-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
        <div className="absolute top-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
        {/* Top-right corner */}
        <div className="absolute top-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
        <div className="absolute top-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
        {/* Bottom-left corner */}
        <div className="absolute bottom-0 left-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
        <div className="absolute bottom-0 left-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
        {/* Bottom-right corner */}
        <div className="absolute bottom-0 right-0 w-[3px] h-[15px] bg-[#EAEAEA]"></div>
        <div className="absolute bottom-0 right-0 w-[15px] h-[3px] bg-[#EAEAEA]"></div>
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
