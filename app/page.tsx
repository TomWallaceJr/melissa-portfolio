import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PortfolioSection from "./components/PortfolioSection.client";
import EmailForm from "./components/EmailForm";
import { getAllProjects } from "@/api";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioSection projects={projects} />
      {/* <EmailForm /> */}
      <Footer />
    </main>
  );
}
