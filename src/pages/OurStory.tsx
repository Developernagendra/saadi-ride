
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-wedding-navy">Our Story</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The journey of ShaadiSaathi began in 2014 when our founders, Anand and Mehak, experienced firsthand the challenges of planning their own wedding. They realized that despite India having one of the largest wedding industries in the world, couples lacked a centralized platform to discover and connect with reliable vendors.
              </p>
              
              <div className="my-10 bg-white p-8 rounded-lg shadow-sm">
                <blockquote className="italic text-xl text-gray-700 border-l-4 border-wedding-pink pl-4">
                  "We wanted to create something that would make wedding planning enjoyable rather than overwhelming. Every couple deserves to focus on the joy of their celebration instead of the stress of coordination."
                  <footer className="text-base font-semibold mt-2">— Mehak Singh, Co-founder</footer>
                </blockquote>
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">From Idea to Reality</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Starting with just a small team working out of a tiny office in Delhi, ShaadiSaathi began by curating a list of 100 vendors across three categories. The platform quickly gained traction as couples appreciated the verified reviews, detailed portfolios, and transparent pricing information.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                By 2016, we had expanded to five major cities and introduced our innovative planning tools, including the Budget Calculator and Guest List Manager. These tools were designed specifically for Indian weddings, considering their unique cultural elements and family dynamics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-wedding-pink mb-2">30M+</div>
                  <div className="text-gray-600">Annual Visitors</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-wedding-pink mb-2">50+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="text-4xl font-bold text-wedding-pink mb-2">25K+</div>
                  <div className="text-gray-600">Verified Vendors</div>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Our Cultural Mission</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                India's wedding traditions are as diverse as its culture. From the vibrant Punjabi celebrations to the elegant Tamil ceremonies, each wedding carries unique customs and rituals. At ShaadiSaathi, we're committed to celebrating this diversity and helping couples honor their traditions while also creating their personal touches.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team has grown to include wedding specialists from various cultural backgrounds, ensuring we can provide tailored guidance for every type of celebration. We regularly feature real weddings that showcase different traditions, helping couples find inspiration that resonates with their heritage.
              </p>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Looking Ahead</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Today, ShaadiSaathi has evolved into much more than a vendor directory. We're a comprehensive wedding ecosystem that supports couples through every stage of planning. Our blogging platform features expert advice, our mobile app allows planning on the go, and our vendor management tools help businesses grow and connect with their ideal clients.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                As we continue to grow, our focus remains on innovation and customer experience. We're exploring new technologies like AR for venue visualization and developing more personalized planning experiences based on individual preferences and cultural backgrounds.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The ShaadiSaathi story is still being written, and we're excited to be part of countless couple's wedding journeys in the years to come.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
