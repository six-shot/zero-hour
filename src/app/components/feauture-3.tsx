import React from 'react'
import { ArrowRight } from './ui/icons';

export default function Feauture3() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="px-2.5 h-[23px] border border-[#4D4D4D] rounded-[9px] flex items-center mb-[22px]">
          <div className="px-2 flex items-center gap-[2px] text-[17px] text-white font-[family-name:var(--font-vt323)] uppercase ">
            <span>Success protocol</span>
            <ArrowRight />
            <span>Web3 Transformation</span>
          </div>
        </div>
        <h4 className="text-[38px] leading-[38px] font-[family-name:var(--font-sentex)] text-white uppercase text-center">
          ZEROhoURS VICTORIES
        </h4>
        <p className="text-[28px] leading-[28px] font-[family-name:var(--font-vt323)] text-white uppercase mt-[17px]">
          Witness the transformation. These IPs didn't just survive the Web3
          transition—<br/> they evolved into something more powerful than their
          creators ever imagined.
        </p>{" "}
      </div>
    </div>
  );
}
