
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-wedding-navy">About Us</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                ShaadiShaati is India's favorite wedding planning platform helping couples create magical weddings since 2014. 
                We bring together the best wedding vendors, inspirational content, and planning tools to make your wedding journey seamless and joyful.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 my-12">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-wedding-navy">Our Mission</h2>
                  <p className="text-gray-700">
                    To simplify wedding planning and make it enjoyable by connecting couples with the best vendors and providing innovative planning tools.
                  </p>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-wedding-navy">Our Vision</h2>
                  <p className="text-gray-700">
                    To be the most trusted wedding platform that celebrates diverse cultures and helps couples create their unique wedding story.
                  </p>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-wedding-navy">Our Values</h2>
                  <p className="text-gray-700">
                    Authenticity, innovation, inclusivity, and exceptional customer service are the core values that drive everything we do.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-wedding-navy">Our Journey</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 text-wedding-pink font-bold">2014</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">The Beginning</h3>
                      <p className="text-gray-700">ShaadiShaati was founded with a mission to transform wedding planning in India.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-20 text-wedding-pink font-bold">2016</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Growing Community</h3>
                      <p className="text-gray-700">Reached 5,000 vendors across major cities in India.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-20 text-wedding-pink font-bold">2019</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Digital Transformation</h3>
                      <p className="text-gray-700">Launched comprehensive planning tools and website builder for couples.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-20 text-wedding-pink font-bold">2023</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">National Reach</h3>
                      <p className="text-gray-700">Expanded to cover 50+ cities with 25,000+ verified vendors.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-20 text-wedding-pink font-bold">Today</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-1">Industry Leader</h3>
                      <p className="text-gray-700">India's most trusted wedding platform with millions of monthly visitors.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-6 text-wedding-navy">Explore More</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/about/our-story" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-wedding-pink transition-colors">Our Story</h3>
                    <p className="text-gray-700">Learn about how ShaadiShaati started and our journey.</p>
                  </Link>
                  <Link to="/about/mission-vision" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-wedding-pink transition-colors">Mission & Vision</h3>
                    <p className="text-gray-700">Discover our mission, vision, and core values.</p>
                  </Link>
                  <Link to="/about/press" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-wedding-pink transition-colors">Press</h3>
                    <p className="text-gray-700">View our press releases and media coverage.</p>
                  </Link>
                  <Link to="/about/contact" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-wedding-pink transition-colors">Contact Us</h3>
                    <p className="text-gray-700">Get in touch with our team for inquiries and support.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
