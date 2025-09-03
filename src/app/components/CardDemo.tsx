"use client";
import React, { useMemo } from "react";
import { ReusableCard } from "./ReusableCard";

// Your SVG as a component
const CardBackgroundSVG = () => (
  <svg
    width="384"
    height="538"
    viewBox="0 0 384 538"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <mask id="path-1-inside-1_36_19733" fill="white">
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
      mask="url(#path-1-inside-1_36_19733)"
    />
  </svg>
);

// Demo component
export default function CardDemo() {
  // Array of random images for testing
  const randomImages = [
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=296&h=296&fit=crop&crop=center", // Forest
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=296&h=296&fit=crop&crop=center", // Mountain landscape
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=296&h=296&fit=crop&crop=center", // Tech/circuit
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=296&h=296&fit=crop&crop=center", // Neon city
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=296&h=296&fit=crop&crop=center", // Space/stars
  ];

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl font-mono mb-12 text-center">
          Mix Blend Luminosity Practice
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: With Blend Mode */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="FOREST VIBES"
              description="With mix-blend-luminosity - notice how colors blend with the SVG background"
              image={randomImages[0]}
              pattern={<CardBackgroundSVG />}
              enableBlendMode={true}
              className="mb-4"
            />
            <p className="text-green-400 text-sm font-mono">✓ Blend Mode ON</p>
          </div>

          {/* Card 2: Without Blend Mode */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="MOUNTAIN PEAK"
              description="Same SVG background but NO blend mode - original colors preserved"
              image={randomImages[1]}
              pattern={<CardBackgroundSVG />}
              enableBlendMode={false}
              className="mb-4"
            />
            <p className="text-red-400 text-sm font-mono">✗ Blend Mode OFF</p>
          </div>

          {/* Card 3: Tech Image with Blend */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="CIRCUIT FLOW"
              description="Tech imagery works great with luminosity blending"
              image={randomImages[2]}
              pattern={<CardBackgroundSVG />}
              enableBlendMode={true}
              className="mb-4"
            />
            <p className="text-green-400 text-sm font-mono">✓ Blend Mode ON</p>
          </div>

          {/* Card 4: Neon City */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="NEON NIGHTS"
              description="Colorful neon gets muted and atmospheric with blend mode"
              image={randomImages[3]}
              pattern={<CardBackgroundSVG />}
              enableBlendMode={true}
              className="mb-4"
            />
            <p className="text-green-400 text-sm font-mono">✓ Blend Mode ON</p>
          </div>

          {/* Card 5: Space without blend */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="COSMIC VOID"
              description="Space imagery without blending - pure original colors"
              image={randomImages[4]}
              pattern={<CardBackgroundSVG />}
              enableBlendMode={false}
              className="mb-4"
            />
            <p className="text-red-400 text-sm font-mono">✗ Blend Mode OFF</p>
          </div>

          {/* Card 6: No background, no blend */}
          <div className="flex flex-col items-center">
            <ReusableCard
              title="CLEAN SLATE"
              description="No background, no blend mode - image displays normally"
              image={randomImages[0]}
              backgroundColor=""
              enableBlendMode={false}
              className="mb-4"
            />
            <p className="text-blue-400 text-sm font-mono">○ No Background</p>
          </div>
        </div>
      </div>
    </div>
  );
}
