import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
