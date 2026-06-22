import React from "react";
import { FAQ_ITEMS } from "@/constants/landing-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="py-20 max-w-[760px] mx-auto px-6 text-left">
      <div className="mb-8">
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 mb-3">
          Câu hỏi thường gặp
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
          Những điều thường được hỏi
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
        {FAQ_ITEMS.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-neutral-200 py-1">
            <AccordionTrigger className="text-base font-semibold text-neutral-900 hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-500 text-sm leading-relaxed max-w-[600px]">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}