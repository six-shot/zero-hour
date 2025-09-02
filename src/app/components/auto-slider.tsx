"use client";
import React, { forwardRef } from "react";
import FeatureCard from "./FeatureCard";
import FlexibleAutoScroll, {
  FlexibleAutoScrollRef,
} from "./FlexibleAutoScroll";

interface Card {
  title: string;
  description: string;
  image: string;
}

interface AutoScrollProps {
  cards: Card[];
  onNavigationChange?: (canGoPrevious: boolean, canGoNext: boolean) => void;
}

const AutoScroll = forwardRef<FlexibleAutoScrollRef, AutoScrollProps>(
  ({ cards, onNavigationChange }, ref) => {
    return (
      <FlexibleAutoScroll 
        ref={ref} 
        className=" relative z-[100] "
        onNavigationChange={onNavigationChange}
      >
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            index={index}
          />
        ))}
      </FlexibleAutoScroll>
    );
  }
);

AutoScroll.displayName = "AutoScroll";

export default AutoScroll;
