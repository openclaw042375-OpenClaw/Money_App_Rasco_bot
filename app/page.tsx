import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import ProblemSolution from "@/components/ProblemSolution";
import ModulesTOC from "@/components/ModulesTOC";
import Templates from "@/components/Templates";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProblemSolution />
        <ModulesTOC />
        <Templates />
        <WhoItsFor />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
