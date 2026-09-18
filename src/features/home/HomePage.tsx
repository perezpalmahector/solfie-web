import MainLayout from "../../components/layout/MainLayout";

import HeroCarousel from "./HeroCarousel";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import Faq from "./Faq";
import Contact from "./Contact";
import CallToAction from "./CallToAction";
import TaxCalculator from "./TaxCalculator";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroCarousel />
      <Services />
      <WhyChooseUs />
      <Process />
      <TaxCalculator />
      <Faq />
      <CallToAction />
      <Contact />
    </MainLayout>
  );
}