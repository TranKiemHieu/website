import React from "react";
import * as LucideIcons from "lucide-react";
import { STEPS } from "@/constants/landing-data";

export function Steps() {
  return (
    <section id="cach-hoat-dong" className="py-20 max-w-[1140px] mx-auto px-6 text-left">
      <div className="max-w-[640px] mb-12">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
          Cách hoạt động
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Từ kết nối đến tự động, trong một buổi
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((s, idx) => {
          // @ts-ignore
          const Icon = LucideIcons[s.icon] || LucideIcons.HelpCircle;
          return (
            <div key={idx} className="bg-white border border-neutral-200 p-6 rounded-xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="font-mono text-sm font-semibold text-blue-600">{s.n}</span>
                <span className="flex-1 h-px bg-neutral-100"></span>
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}