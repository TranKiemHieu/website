import React from "react";
import * as LucideIcons from "lucide-react";
import { FEATURES } from "@/constants/landing-data";

export function Features() {
  return (
    <section id="tinh-nang" className="py-20 max-w-[1140px] mx-auto px-6 text-left">
      <div className="max-w-[640px] mb-12">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
          Chimori làm được gì
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Mọi việc đội ngũ chạm tới, gọn trong một nơi
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {FEATURES.map((f, idx) => {
          // @ts-ignore
          const Icon = LucideIcons[f.icon] || LucideIcons.HelpCircle;
          return (
            <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-xl shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{f.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{f.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}