"use client";
import React from "react";
import Image from "next/image";

interface ReusableCardProps {
  title: string;
  description: string;
  image?: string;
  pattern?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}

export function ReusableCard({
  title,
  description,
  image,
  pattern,
  className = "",
  titleClassName = "font-[family-name:var(--font-sentex)] text-[24px] leading-[24px] uppercase mt-5",
  descriptionClassName = "text-[#c5c5c5] text-[24px] leading-[24px] font-[family-name:var(--font-vt323)] mt-2.5",
  imageClassName = "w-full ",
}: ReusableCardProps) {
  return (
    <div className={`relative z-[100] w-full h-full  ${className}`}>
      {/* Background SVG */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 384 538"
        fill="none"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <mask id={`card-mask-${Math.random()}`} fill="white">
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
          mask={`url(#card-mask-${Math.random()})`}
        />
      </svg>


      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col items-center text-white z-20">
        {image && (
          <Image
            src={image}
            alt={title}
            width={296}
            height={296}
            className={imageClassName}
            
          />
        )}
        <h3 className={titleClassName}>{title}</h3>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
}
