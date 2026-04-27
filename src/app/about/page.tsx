import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { AboutUs } from "@/components/sections/AboutUs";
import { Vision } from "@/components/sections/Vision";
import { Mission } from "@/components/sections/Mission";
import { Team } from "@/components/sections/Team";
import { OfficeGallery } from "@/components/sections/OfficeGallery";
import { Awards } from "@/components/sections/Awards";
import { Testimonials } from "@/components/sections/Testimonials";
import { constructMetadata } from "@/lib/seo";
import { AboutHero } from "@/components/sections/AboutHero";

export const metadata: Metadata = constructMetadata({
  title: "About Shivdhara Securities | Our Mission, Vision & Team",
  description: "Learn about Shivdhara Securities, our mission, vision, and team dedicated to helping clients achieve financial success through expert advisory and investment strategies.",
});

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <AboutUs />
      <Vision />
      <Mission />
      <Team />
      <OfficeGallery />
      <Awards />
      <Testimonials />
    </main>
  );
}
