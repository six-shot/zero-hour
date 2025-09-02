"use client";
import React, { useRef } from "react";
import ScrollContainer, { ScrollContainerRef } from "./ScrollContainer";
import { LeftArrow, RightArrow, NavigationArrows } from "./NavigationArrows";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";

interface ComponentBasedSliderProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    pattern?: React.ReactNode;
  }>;
  className?: string;
  showNavigation?: boolean;
  navigationPosition?:
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "center";
}

export default function ComponentBasedSlider({
  items,
  className = "",
  showNavigation = true,
  navigationPosition = "bottom-right",
}: ComponentBasedSliderProps) {
  const scrollContainerRef = useRef<ScrollContainerRef>(null);

  const handlePrevious = () => {
    scrollContainerRef.current?.scrollToPrevious();
  };

  const handleNext = () => {
    scrollContainerRef.current?.scrollToNext();
  };

  const getCurrentIndex = () => {
    return scrollContainerRef.current?.getCurrentIndex() || 0;
  };

  const getTotalItems = () => {
    return scrollContainerRef.current?.getTotalItems() || 0;
  };

  const getNavigationPositionClass = () => {
    switch (navigationPosition) {
      case "bottom-left":
        return "absolute bottom-0 left-0";
      case "top-right":
        return "absolute top-0 right-0";
      case "top-left":
        return "absolute top-0 left-0";
      case "center":
        return "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
      default:
        return "absolute bottom-0 right-0 md:mx-[calc(50%-380px)]";
    }
  };

  return (
    <div className={`relative ${className}`}>
      <ScrollContainer
        ref={scrollContainerRef}
        className="pt-[388px] relative z-[100] h-[45rem] -mt-[27rem] bg-blur"
      >
        {items.map((item, index) => (
          <Card key={item.id} index={index} backgroundPattern={item.pattern}>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </ScrollContainer>

      {showNavigation && items.length > 1 && (
        <div className={getNavigationPositionClass()}>
          <NavigationArrows
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={getCurrentIndex() > 0}
            canGoNext={getCurrentIndex() < getTotalItems() - 1}
          />
        </div>
      )}
    </div>
  );
}

