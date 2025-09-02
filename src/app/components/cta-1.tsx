import React from 'react'
import { Button } from './ui/button';

export default function CTA1() {
  return (
    <div className="bg-black relative py-8">
      <div
        className="w-full h-full absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/mask.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />
      <div className="max-w-[1440px] mx-auto relative z-100">
        <div className=" border-[0.5px] border-white py-[55px] px-[63px] rounded-[19px] flex flex-col items-start">
          <h3 className="text-[64px] leading-[64px] font-[family-name:var(--font-sentex)]">
            Ready to Transform <br />
            Your IP?
          </h3>
          <p className="mt-[18px] text-[38px] leading-[38px] font-[family-name:var(--font-vt323)]">
            Join the revolution. Let us decode your IP&apos;s Web3 potential <br/>and
            build something extraordinary together.
          </p>
          <div className='mt-[35px]'>
            <Button>Book A Session</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
