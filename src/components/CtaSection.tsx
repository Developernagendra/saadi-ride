
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-wedding-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="wedding-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Start Planning Your Dream Wedding Today
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of happy couples who planned their perfect wedding with WedMeGood. Get access to top vendors, planning tools, and inspiration for your big day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-wedding-pink hover:bg-wedding-pink/90 text-white">
                Find Vendors
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Create Free Account
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                alt="Happy couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-wedding-navy/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 w-28 h-28 border-4 border-wedding-pink rounded-full z-0"></div>
            <div className="absolute -top-5 -right-5 w-20 h-20 border-4 border-wedding-gold opacity-70 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
