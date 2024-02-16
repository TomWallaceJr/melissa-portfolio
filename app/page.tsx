// "use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import PortfolioSection from "./components/PortfolioSection";
import EmailForm from "./components/EmailForm";
import { getAllProjects } from "@/api";

export default async function Home() {
  const projects = await getAllProjects();
  console.log(projects);

  return (
    <main className='font-poppins'>
      <Navbar />
      <Hero />
      <PortfolioSection projects={projects} />
      {/* <EmailForm /> */}
      <Footer />
    </main>
  );
}
