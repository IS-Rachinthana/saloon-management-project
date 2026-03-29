import { ContactSection } from "@/components/marketing/contact-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { SectionGrid } from "@/components/marketing/section-grid";
import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <SectionGrid />
        <ContactSection />
      </main>
    </>
  );
}
