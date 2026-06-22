import React from "react";
import { Bot, HeartHandshake, Check } from "lucide-react";
import { AI_TASKS, HUMAN_TASKS } from "@/constants/landing-data";

export function Delegation() {
  return (
    <section id="con-nguoi-ai" className="py-20 bg-neutral-50 border-y border-neutral-200/60 text-left">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="max-w-[680px] mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
            Con người + AI
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
            Ranh giới rõ ràng giữa hai bên
          </h2>
          <p className="text-neutral-500 leading-relaxed text-[16px]">
            AI gánh việc nhàm chán và lặp lại. Con người giữ phần cần trái tim và quyết định. Đó là lý do Chimori là người đồng hành, không phải người thay thế.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-2xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-neutral-900">Chimori làm</h4>
                <p className="text-xs text-neutral-400">Việc lặp lại, tốc độ, quy mô</p>
              </div>
            </div>
            <ul className="space-y-3">
              {AI_TASKS.map((t, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-neutral-700 text-sm">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-2xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-neutral-900">Bạn làm</h4>
                <p className="text-xs text-neutral-400">Thấu cảm, phán đoán, quan hệ</p>
              </div>
            </div>
            <ul className="space-y-3">
              {HUMAN_TASKS.map((t, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-neutral-700 text-sm">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}