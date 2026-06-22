import React from "react";
import { PROOF } from "@/constants/landing-data";

export function Proof() {
  return (
    <section className="py-20 max-w-[1140px] mx-auto px-6 text-left">
      <div className="max-w-[640px] mb-12">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
          Vì sao đội ngũ chọn Chimori
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Số liệu, không phải lời hứa
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROOF.map((p, idx) => (
          <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-xl">
            <div className="text-4xl font-extrabold tracking-tight text-blue-600">{p.stat}</div>
            <div className="font-bold text-[16px] text-neutral-900 mt-3">{p.label}</div>
            <p className="text-neutral-400 text-xs mt-1 leading-normal">{p.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}