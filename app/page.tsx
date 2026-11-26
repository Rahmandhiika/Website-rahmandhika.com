import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
