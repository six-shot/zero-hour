import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  index: number;
  backgroundPattern?: React.ReactNode;
  width?: string;
  height?: string;
}

function Card({
  children,
  index,
  className,
  backgroundPattern,
  width = "w-[384px]",
  height = "h-[538px]",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        `${width} ${height}  transition-all duration-300 relative`,
        className
      )}
      {...props}
    >
      {/* SVG Background */}
      <svg
        width="384"
        height="538"
        viewBox="0 0 384 538"
        fill="none"
        className="absolute inset-0"
      >
        <mask id={`path-1-inside-1_34_19267_${index}`} fill="white">
          <path d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z" />
        </mask>
        <path
          d="M384 481.013C384 483.493 383.225 485.911 381.785 487.93L349.608 533.01C347.373 536.141 343.764 538 339.917 538H11.907C5.33094 538 0 532.669 0 526.093V11.907C0 5.33093 5.33094 0 11.907 0H372.093C378.669 0 384 5.33094 384 11.907V481.013Z"
          fill="#0B0211"
          fillOpacity="0.64"
        />
        <path
          d="M349.608 533.01L350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276L381.785 487.93ZM381.785 487.93L381.3 487.584L349.124 532.665L349.608 533.01L350.093 533.356L382.269 488.276L381.785 487.93ZM339.917 538V537.405H11.907V538V538.595H339.917V538ZM0 526.093H0.595349V11.907H0H-0.595349V526.093H0ZM11.907 0V0.595349H372.093V0V-0.595349H11.907V0ZM384 11.907H383.405V481.013H384H384.595V11.907H384ZM372.093 0V0.595349C378.34 0.595349 383.405 5.65974 383.405 11.907H384H384.595C384.595 5.00213 378.998 -0.595349 372.093 -0.595349V0ZM0 11.907H0.595349C0.595349 5.65973 5.65974 0.595349 11.907 0.595349V0V-0.595349C5.00213 -0.595349 -0.595349 5.00213 -0.595349 11.907H0ZM11.907 538V537.405C5.65974 537.405 0.595349 532.34 0.595349 526.093H0H-0.595349C-0.595349 532.998 5.00213 538.595 11.907 538.595V538ZM349.608 533.01L349.124 532.665C347.001 535.639 343.571 537.405 339.917 537.405V538V538.595C343.956 538.595 347.746 536.644 350.093 533.356L349.608 533.01ZM381.785 487.93L382.269 488.276C383.782 486.156 384.595 483.617 384.595 481.013H384H383.405C383.405 483.369 382.669 485.666 381.3 487.584L381.785 487.93Z"
          fill="#9C9C9C"
          fillOpacity="0.55"
          mask={`url(#path-1-inside-1_34_19267_${index})`}
        />
      </svg>

      {/* Background Pattern Overlay */}
      {backgroundPattern}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-white text-[24px] font-bold uppercase", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[#5C5C5C] leading-[28px] text-[19px] font-medium font-[family-name:var(--font-inter)] flex-1",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col h-full", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mt-auto", className)} {...props} />;
}

// Testimonial-specific components
function CardQuote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("flex items-start gap-8", className)}
      {...props}
    />
  );
}

function CardQuoteText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[#5C5C5C] leading-[28px] text-[19px] font-medium font-[family-name:var(--font-inter)]",
        className
      )}
      {...props}
    />
  );
}

function CardAuthor({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 font-[family-name:var(--font-inter)]",
        className
      )}
      {...props}
    />
  );
}

function CardAuthorInfo({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}

function CardAuthorName({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[#212123] leading-[24px] text-[16px] font-medium",
        className
      )}
      {...props}
    />
  );
}

function CardAuthorCompany({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-[#000]/70 leading-[20px] text-sm", className)}
      {...props}
    />
  );
}

function CardAward({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 font-[family-name:var(--font-inter)] border-l border-[#000]/10 pl-[37px]",
        className
      )}
      {...props}
    />
  );
}

function CardAwardInfo({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}

function CardAwardTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "apple-bg leading-[24px] text-[16px] font-medium",
        className
      )}
      {...props}
    />
  );
}

function CardAwardYear({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "apple-bg leading-[16px] text-[12px] font-medium",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardQuote,
  CardQuoteText,
  CardAuthor,
  CardAuthorInfo,
  CardAuthorName,
  CardAuthorCompany,
  CardAward,
  CardAwardInfo,
  CardAwardTitle,
  CardAwardYear,
};
