"use client";

import React from "react";

export const CardPreview = React.forwardRef<HTMLDivElement, { text: string }>(
  ({ text }, ref) => (
    <div
      ref={ref}
      className="w-[480px] h-[850px] bg-[#1a1718] flex justify-center items-center rounded-[12px]"
    >
      <div className="bg-black text-neutral-400 rounded-xl px-8 py-6 shadow-[0_0_80px_rgba(255,255,255,0.1)] w-[90%] text-center text-[15px] leading-relaxed font-light font-sans">
        {text}
      </div>
    </div>
  ),
);

CardPreview.displayName = "CardPreview";
