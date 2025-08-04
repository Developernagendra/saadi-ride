import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuestListManager from "@/components/GuestListManager";

const GuestListManagerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Guest List <span className="text-wedding-pink">Manager</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organize your guest list, track RSVPs, and manage seating arrangements with ease.
          </p>
        </div>
        <GuestListManager />
      </main>
      <Footer />
    </div>
  );
};

export default GuestListManagerPage;