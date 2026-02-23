import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatYouGet />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
