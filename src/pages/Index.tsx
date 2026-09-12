import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import CoreCategories from "@/components/home/CoreCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturedSolutions from "@/components/home/FeaturedSolutions";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import ResourcesGrid from "@/components/home/ResourcesGrid";
import Process from "@/components/home/Process";
import ContactForm from "@/components/home/ContactForm";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <TrustBar />
      <CoreCategories />
      <WhyChooseUs />
      <FeaturedProducts />
      <FeaturedSolutions />
      <IndustriesGrid />
      <ResourcesGrid />
      <Process />
      <ContactForm />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
