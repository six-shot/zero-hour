import React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "./Card";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  image,
  index,
}: FeatureCardProps) {
  return (
    <Card index={index} className="py-6">
      <CardContent>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src={image}
            width={296}
            height={296}
            className=""
            alt="feature"
          />
        </div>
        <div className="mt-[18px] flex flex-col gap-2.5 px-4">
          <h4 className="font-[family-name:var(--font-sentex)] text-[24px] leading-[24px] uppercase">
            {title}
          </h4>
          <CardDescription className="text-[#c5c5c5] text-[24px] leading-[24px]  font-[family-name:var(--font-vt323)]">
            {description}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
