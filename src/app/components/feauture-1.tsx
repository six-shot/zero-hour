import React from "react";
import { ArrowRight } from "./ui/icons";
import { AutoSlider } from "./autoSlider";

// Card patterns
const StrategicIPPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="text-cyan-400"
    >
      <defs>
        <pattern
          id="spirograph"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="30"
            cy="30"
            r="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="30"
            cy="30"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.8"
          />
          <circle cx="30" cy="30" r="5" fill="currentColor" opacity="0.9" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#spirograph)" />
      <circle
        cx="60"
        cy="60"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      <circle
        cx="60"
        cy="60"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  </div>
);

const BlockchainPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="text-cyan-400"
    >
      <g>
        {Array.from({ length: 5 }, (_, i) =>
          Array.from({ length: 5 }, (_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={20 + j * 20}
              cy={20 + i * 20}
              r={8 - i * 1.2}
              fill="currentColor"
              opacity={0.3 + i * 0.1}
            />
          ))
        )}
      </g>
    </svg>
  </div>
);

const LaunchPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="text-cyan-400"
    >
      <defs>
        <path
          id="wave"
          d="M0,60 Q30,20 60,60 T120,60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </defs>
      {Array.from({ length: 5 }, (_, i) =>
        Array.from({ length: 5 }, (_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={20 + j * 20}
            cy={20 + i * 20 + Math.sin(j * 0.5) * 10}
            r={6 - i * 0.8}
            fill="currentColor"
            opacity={0.2 + i * 0.15}
          />
        ))
      )}
    </svg>
  </div>
);

const CommunityPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="text-cyan-400"
    >
      <defs>
        <pattern
          id="mesh"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0,0 L20,20 M20,0 L0,20"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#mesh)" />
      {Array.from({ length: 6 }, (_, i) =>
        Array.from({ length: 6 }, (_, j) => (
          <line
            key={`${i}-${j}`}
            x1={j * 20}
            y1={i * 20 + Math.sin(j * 0.3) * 5}
            x2={(j + 1) * 20}
            y2={(i + 1) * 20 + Math.sin((j + 1) * 0.3) * 5}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.2 + i * 0.1}
          />
        ))
      )}
    </svg>
  </div>
);

// Card data
const featureCards = [
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "WE WORK 24/7 TO ENSURE YOUR ENTRY TO MARKET EXCEEDS EXPECTATIONS, OUR IN HOUSE SYSTEMS WORK 24/7 TO STRATEGICALLY PLACE YOUR IP IN FRONT OF INVESTORS.",
    pattern: <StrategicIPPattern />,
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    pattern: <BlockchainPattern />,
  },
  {
    title: "LAUNCH PROTOCOL",
    description:
      "STRATEGIC MARKET ENTRY WITH COORDINATED PR, INFLUENCER NETWORKS, AND COMMUNITY-DRIVEN CAMPAIGNS FOR MAXIMUM IMPACT AND ADOPTION.",
    pattern: <LaunchPattern />,
  },
  {
    title: "COMMUNITY SYNERGY",
    description:
      "BUILD AND NURTURE ENGAGED COMMUNITIES THROUGH GOVERNANCE TOKENS, DECENTRALIZED DECISION-MAKING, AND COLLABORATIVE ECOSYSTEMS.",
    pattern: <CommunityPattern />,
  },
  {
    title: "STRATEGIC IP MAPPING",
    description:
      "WE WORK 24/7 TO ENSURE YOUR ENTRY TO MARKET EXCEEDS EXPECTATIONS, OUR IN HOUSE SYSTEMS WORK 24/7 TO STRATEGICALLY PLACE YOUR IP IN FRONT OF INVESTORS.",
    pattern: <StrategicIPPattern />,
  },
  {
    title: "BLOCKCHAIN ARCHITECTURE",
    description:
      "CUSTOM SMART CONTRACT DEVELOPMENT, TOKENOMICS DESIGN, AND DECENTRALIZED INFRASTRUCTURE TO MAXIMIZE YOUR IP'S WEB3 POTENTIAL.",
    pattern: <BlockchainPattern />,
  },
  {
    title: "LAUNCH PROTOCOL",
    description:
      "STRATEGIC MARKET ENTRY WITH COORDINATED PR, INFLUENCER NETWORKS, AND COMMUNITY-DRIVEN CAMPAIGNS FOR MAXIMUM IMPACT AND ADOPTION.",
    pattern: <LaunchPattern />,
  },
  {
    title: "COMMUNITY SYNERGY",
    description:
      "BUILD AND NURTURE ENGAGED COMMUNITIES THROUGH GOVERNANCE TOKENS, DECENTRALIZED DECISION-MAKING, AND COLLABORATIVE ECOSYSTEMS.",
    pattern: <CommunityPattern />,
  },
];

export default function Feauture1() {
  return (
    <div className="mt-[181px] w-full ">
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex flex-col items-start">
          <h4 className="text-[38px] leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase">
            Zero Hours Wasted
          </h4>
          <p className="text-[28px] leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[23px]">
            Our systems analyze, deconstruct, and surge your web-2 assets into
            thriving web-3 <br /> ecosystems. Every transformation is
            strategically engineered for maximum impact.
          </p>{" "}
          <div className="px-2.5 h-[37px] border border-[#4D4D4D] rounded-[9px] flex items-center mt-[31px]">
            <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
              <span>Web2</span>
              <ArrowRight />
              <span>Web3 Transformation</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[105px] w-full">
        <div className="relative overflow-hidden">
          <AutoSlider cards={featureCards} />
        </div>
      </div>
    </div>
  );
}
