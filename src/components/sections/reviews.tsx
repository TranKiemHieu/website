import React from "react";
import { Star } from "lucide-react";
import { REVIEWS } from "@/constants/landing-data";

export function Reviews() {
  return (
    <section id="khach-hang" className="py-20 bg-neutral-50 border-y border-neutral-200/60 text-left">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-[640px] mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
            Khách hàng
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Những đội ngũ đã thôi chữa cháy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-xl flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-800 text-[15px] leading-relaxed italic mb-6">"{r.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-neutral-100">
                <div className="w-9 h-9 rounded-full bg-neutral-200 font-bold text-xs flex items-center justify-center text-neutral-600">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-bold text-sm text-neutral-900">{r.name}</span>
                  <span className="text-xs text-neutral-400">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}