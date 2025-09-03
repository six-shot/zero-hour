import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ArrowRight, NextButton, PrevButton } from "./ui/icons";

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  className?: string;
}

export function LeftArrow({
  onClick,
  disabled,
  className,
}: {
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "cursor-pointer select-none",
        disabled && "cursor-not-allowed",
        !disabled && "hover:opacity-80",
        className
      )}
      type="button"
      style={{ touchAction: "manipulation" }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.1 }}
    >
      <PrevButton color={disabled ? "#635E67" : "white"} />
    </motion.button>
  );
}

export function RightArrow({
  onClick,
  disabled,
  className,
}: {
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "cursor-pointer select-none",
        disabled && "cursor-not-allowed",
        !disabled && "hover:opacity-80",
        className
      )}
      type="button"
      style={{ touchAction: "manipulation" }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ duration: 0.1 }}
    >
      <NextButton color={disabled ? "#635E67" : "white"} />
    </motion.button>
  );
}

export function NavigationArrows({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  className,
}: NavigationArrowsProps) {
  return (
    <div className={cn("flex gap-6 md:gap-[42px] z-50", className)}>
      <LeftArrow onClick={onPrevious} disabled={!canGoPrevious} />
      <RightArrow onClick={onNext} disabled={!canGoNext} />
    </div>
  );
}
