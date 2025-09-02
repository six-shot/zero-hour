import React from "react";
import Image from "next/image";
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
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onClick();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      disabled={disabled}
      className={cn(
        "cursor-pointer transition-all duration-150 active:scale-95 select-none",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:opacity-80",
        className
      )}
      type="button"
      style={{ touchAction: "manipulation" }}
    >
      <PrevButton />
    </button>
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
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onClick();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      disabled={disabled}
      className={cn(
        "cursor-pointer transition-all duration-150 active:scale-95 select-none",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "hover:opacity-80",
        className
      )}
      type="button"
      style={{ touchAction: "manipulation" }}
    >
      <NextButton />
    </button>
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
    <div className={cn("flex gap-[42px] z-50", className)}>
      <LeftArrow onClick={onPrevious} disabled={!canGoPrevious} />
      <RightArrow onClick={onNext} disabled={!canGoNext} />
    </div>
  );
}
