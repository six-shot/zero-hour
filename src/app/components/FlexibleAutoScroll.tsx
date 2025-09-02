"use client";
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import Image from "next/image";

interface FlexibleAutoScrollProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  onNavigationChange?: (canGoPrevious: boolean, canGoNext: boolean) => void;
}

export interface FlexibleAutoScrollRef {
  scrollToItem: (index: number) => void;
  scrollToPrevious: () => void;
  scrollToNext: () => void;
  currentIndex: number;
  totalItems: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const FlexibleAutoScroll = forwardRef<
  FlexibleAutoScrollRef,
  FlexibleAutoScrollProps
>(
  (
    { children, className = "", containerClassName = "", onNavigationChange },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToItem = (index: number, updateState: boolean = true) => {
      if (isScrolling) return; // Prevent multiple scroll operations

      const newIndex = Math.min(Math.max(0, index), totalItems - 1);
      if (updateState) {
        setCurrentIndex(newIndex);
      }
      const container = containerRef.current;
      if (!container) return;

      const itemElement = container.children[0].children[
        newIndex
      ] as HTMLElement;
      if (!itemElement) return;

      setIsScrolling(true);
      const containerWidth = container.offsetWidth;
      const itemWidth = itemElement.offsetWidth;

      // Calculate the scroll position to center the item
      const scrollLeft =
        itemElement.offsetLeft - (containerWidth - itemWidth) / 2;
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });

      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    // Count the number of children
    const childrenArray = React.Children.toArray(children);
    const totalItems = childrenArray.length;

    // Navigation helper functions
    const scrollToPrevious = () => {
      if (currentIndex > 0 && !isScrolling) {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex); // Update state immediately
        scrollToItem(newIndex);
      }
    };

    const scrollToNext = () => {
      if (currentIndex < totalItems - 1 && !isScrolling) {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex); // Update state immediately
        scrollToItem(newIndex);
      }
    };

    // Notify parent of navigation state changes
    useEffect(() => {
      const canGoPrevious = currentIndex > 0;
      const canGoNext = currentIndex < totalItems - 1;
      onNavigationChange?.(canGoPrevious, canGoNext);
    }, [currentIndex, totalItems, onNavigationChange]);

    // Expose scroll controls to parent component
    useImperativeHandle(
      ref,
      () => ({
        scrollToItem,
        scrollToPrevious,
        scrollToNext,
        currentIndex,
        totalItems,
        canGoPrevious: currentIndex > 0 && !isScrolling,
        canGoNext: currentIndex < totalItems - 1 && !isScrolling,
      }),
      [currentIndex, totalItems, isScrolling]
    );

    // Update current index based on scroll position
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const firstChild = container.children[0]?.children[0] as HTMLElement;
        const itemWidth = firstChild?.offsetWidth || 0;

        if (itemWidth > 0) {
          const newIndex = Math.round(scrollLeft / (itemWidth + 24)); // 24px is the gap
          setCurrentIndex(Math.min(Math.max(0, newIndex), totalItems - 1));
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }, [totalItems]);

    return (
      <div className={`flex flex-col gap-4 relative ${className}`}>
        <div
          className={`w-full overflow-x-auto scrollbar-hide ${containerClassName}`}
          ref={containerRef}
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          <div className="flex gap-6 min-w-max md:ml-[calc((100vw-1440px)/2)] overflow-hidden">
            {children}
          </div>
        </div>

        {/* {showNavigation && totalItems > 1 && (
        <div className="absolute bottom-0 right-0 flex gap-3 z-50 md:mx-[calc(50%-380px)]">
          <button
            onClick={() => scrollToItem(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`
              w-[32px] h-[32px] flex items-center justify-center bg-[#E2E2E2] hover:bg-[black]/30 cursor-pointer
              transition-colors rounded-full
              ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            <Image src="/left.svg" alt="left" width={24} height={24} />
          </button>
          <button
            onClick={() =>
              scrollToItem(Math.min(totalItems - 1, currentIndex + 1))
            }
            disabled={currentIndex === totalItems - 1}
            className={`
              w-[32px] h-[32px] flex items-center justify-center bg-[#E2E2E2]
              transition-colors rounded-full
              ${
                currentIndex === totalItems - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            `}
          >
            <Image
              src="/left.svg"
              alt="right"
              width={24}
              height={24}
              className="rotate-180"
            />
          </button>
        </div>
      )} */}
      </div>
    );
  }
);

FlexibleAutoScroll.displayName = "FlexibleAutoScroll";

export default FlexibleAutoScroll;
