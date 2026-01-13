import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reporting from "@/components/Reporting";
import SalaryManagement from "@/components/SalaryManagement";
import Calculations from "@/components/Calculations";
import FreeTrial from "@/components/FreeTrial";
import FAQ from "@/components/FAQ";
import TimeSaving from "@/components/TimeSaving";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Reporting />
      <SalaryManagement />
      <Calculations />
      <FreeTrial />
      <FAQ />
      <TimeSaving />
      <Footer />
    </main>
  );
}
