import React from "react";
import Navbar from "@/components/neurosync/Navbar";
import Hero from "@/components/neurosync/Hero";
import NeuroptimalSection from "@/components/neurosync/NeuroptimalSection";
import NQFTCSection from "@/components/neurosync/NQFTCSection";
import LocationSection from "@/components/neurosync/LocationSection";
import ContactSection from "@/components/neurosync/ContactSection";
import Footer from "@/components/neurosync/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <NeuroptimalSection />
      <NQFTCSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}