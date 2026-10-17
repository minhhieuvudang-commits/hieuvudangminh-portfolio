import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CoreCompetencies from "@/components/CoreCompetencies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFF] text-[#123A5A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImpactStats />
        <AboutSection />
        <ProjectSection />
        <ExperienceTimeline />
        <CoreCompetencies />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
