import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WeddingChecklist from "@/components/WeddingChecklist";

const WeddingChecklistPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Checklist</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay organized and never miss a task with our comprehensive wedding planning checklist.
          </p>
        </div>
        <WeddingChecklist />
      </main>
      <Footer />
    </div>
  );
};

export default WeddingChecklistPage;