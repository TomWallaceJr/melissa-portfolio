import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PortfolioSection from "./components/PortfolioSection";
import EmailForm from "./components/EmailForm";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioSection />
      <EmailForm />
      <Footer />
    </main>
  );
}
