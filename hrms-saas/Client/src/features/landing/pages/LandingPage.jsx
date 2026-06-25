import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Features from '../components/Features';
import Modules from '../components/Modules';
import DashboardPreview from '../components/DashboardPreview';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <Modules />
      <DashboardPreview />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
