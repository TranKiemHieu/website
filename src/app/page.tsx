import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Audience } from "@/components/sections/audience";
import { Steps } from "@/components/sections/steps";
import { Delegation } from "@/components/sections/delegation";
import { Proof } from "@/components/sections/proof";
import { Reviews } from "@/components/sections/reviews";
import { Faq } from "@/components/sections/faq";
import { DemoForm } from "@/components/sections/demo-form";
import { FinalCta } from "@/components/sections/final-cta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-blue-50 selection:text-blue-700">
      <Header />
      
      <main id="top">
        <Hero />
        <Features />
        <Audience />
        <Steps />
        <Delegation />
        <Proof />
        <Reviews />
        <Faq />
        <DemoForm />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}