import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { cn } from "../../lib/utils";

export interface ScrollContainerRef {
  scrollToItem: (index: number) => void;
  scrollToPrevious: () => void;
  scrollToNext: () => void;
  getCurrentIndex: () => number;
  getTotalItems: () => number;
}

interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  currentIndex?: number;
  onIndexChange?: (index: number) => number;
  autoScroll?: boolean;
}

const ScrollContainer = forwardRef<ScrollContainerRef, ScrollContainerProps>(
  (
    {
      children,
      className = "",
      containerClassName = "",
      currentIndex = 0,
      onIndexChange,
      autoScroll = false,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [internalIndex, setInternalIndex] = React.useState(currentIndex);

    const childrenArray = React.Children.toArray(children);
    const totalItems = childrenArray.length;

    const scrollToItem = (index: number) => {
      const newIndex = Math.max(0, Math.min(index, totalItems - 1));

      if (onIndexChange) {
        const result = onIndexChange(newIndex);
        if (result !== undefined) {
          setInternalIndex(result);
        } else {
          setInternalIndex(newIndex);
        }
      } else {
        setInternalIndex(newIndex);
      }

      const container = containerRef.current;
      if (!container) return;

      const itemElement = container.children[0].children[
        newIndex
      ] as HTMLElement;
      if (!itemElement) return;

      const containerWidth = container.offsetWidth;
      const itemWidth = itemElement.offsetWidth;

      // Calculate the scroll position to center the item
      const scrollLeft =
        itemElement.offsetLeft - (containerWidth - itemWidth) / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    };

    const scrollToPrevious = () => {
      scrollToItem(internalIndex - 1);
    };

    const scrollToNext = () => {
      scrollToItem(internalIndex + 1);
    };

    const getCurrentIndex = () => internalIndex;
    const getTotalItems = () => totalItems;

    useImperativeHandle(ref, () => ({
      scrollToItem,
      scrollToPrevious,
      scrollToNext,
      getCurrentIndex,
      getTotalItems,
    }));

    // Auto-scroll effect
    React.useEffect(() => {
      if (autoScroll && totalItems > 1) {
        const interval = setInterval(() => {
          const nextIndex = (internalIndex + 1) % totalItems;
          scrollToItem(nextIndex);
        }, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(interval);
      }
    }, [internalIndex, totalItems, autoScroll]);

    return (
      <div className={cn("flex flex-col gap-4 relative", className)}>
        <div
          className={cn(
            "w-full overflow-x-auto scrollbar-hide",
            containerClassName
          )}
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
      </div>
    );
  }
);

ScrollContainer.displayName = "ScrollContainer";

export default ScrollContainer;

