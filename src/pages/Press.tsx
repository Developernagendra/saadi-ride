
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Press = () => {
  const pressReleases = [
    {
      title: "WedMeGood Launches Comprehensive Wedding Budget Tool",
      date: "April 15, 2025",
      excerpt: "New tool helps couples plan and track wedding expenses with customized budgeting based on regional and cultural factors.",
      link: "#",
    },
    {
      title: "WedMeGood Reaches 25,000 Verified Vendor Milestone",
      date: "February 22, 2025",
      excerpt: "Leading wedding platform now offers the largest verified vendor network across 50+ cities in India.",
      link: "#",
    },
    {
      title: "WedMeGood's Annual Wedding Trends Report Released",
      date: "January 10, 2025",
      excerpt: "Report highlights sustainability, personalization, and hybrid celebrations as key trends for the 2025 wedding season.",
      link: "#",
    },
    {
      title: "WedMeGood Expands Services to International Destination Weddings",
      date: "November 5, 2024",
      excerpt: "New partnerships with international vendors help Indian couples plan destination weddings across Southeast Asia and Europe.",
      link: "#",
    },
    {
      title: "WedMeGood Hosts First Virtual Wedding Expo",
      date: "September 17, 2024",
      excerpt: "Over 10,000 couples attended the three-day virtual event featuring vendor showcases, workshops, and wedding planning masterclasses.",
      link: "#",
    },
  ];

  const mediaFeatures = [
    {
      publication: "Economic Times",
      title: "How WedMeGood is Revolutionizing Wedding Planning in India",
      date: "March 5, 2025",
      logo: "https://placehold.co/200x100?text=ET",
      link: "#",
    },
    {
      publication: "Vogue India",
      title: "Wedding Planning Made Simple: WedMeGood's Digital Transformation",
      date: "January 18, 2025",
      logo: "https://placehold.co/200x100?text=Vogue",
      link: "#",
    },
    {
      publication: "YourStory",
      title: "WedMeGood: The Startup Story Behind India's Wedding Revolution",
      date: "December 1, 2024",
      logo: "https://placehold.co/200x100?text=YourStory",
      link: "#",
    },
    {
      publication: "NDTV",
      title: "Wedding Industry Trends: In Conversation with WedMeGood Founders",
      date: "October 22, 2024",
      logo: "https://placehold.co/200x100?text=NDTV",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-wedding-navy">Press & Media</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Find the latest news from WedMeGood, press resources, and media features. For press inquiries, please contact our media relations team at press@wedmegood.com.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 mb-12">
                <a href="#" className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Press Kit</h3>
                  <p className="text-gray-700 mb-4">Download our press kit with logos, official photos, and company information.</p>
                  <span className="inline-block px-5 py-2 bg-wedding-pink hover:bg-wedding-pink-dark text-white rounded-md transition-colors">
                    Download Kit
                  </span>
                </a>
                
                <a href="#" className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Media Inquiries</h3>
                  <p className="text-gray-700 mb-4">Contact our press team for interviews, statements, or collaboration opportunities.</p>
                  <span className="inline-block px-5 py-2 bg-wedding-pink hover:bg-wedding-pink-dark text-white rounded-md transition-colors">
                    Contact Us
                  </span>
                </a>
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Latest Press Releases</h2>
              
              <div className="space-y-6 mb-12">
                {pressReleases.map((press) => (
                  <a 
                    key={press.title} 
                    href={press.link}
                    className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-wedding-pink"
                  >
                    <span className="text-sm text-gray-500 block mb-2">{press.date}</span>
                    <h3 className="text-xl font-semibold mb-3 text-wedding-navy hover:text-wedding-pink transition-colors">{press.title}</h3>
                    <p className="text-gray-700">{press.excerpt}</p>
                  </a>
                ))}
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Media Coverage</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {mediaFeatures.map((feature) => (
                  <a 
                    key={feature.title} 
                    href={feature.link}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="p-4 h-24 flex items-center justify-center bg-gray-100">
                      <div className="w-32 h-16">
                        <AspectRatio ratio={2 / 1} className="bg-muted">
                          <img 
                            src={feature.logo} 
                            alt={feature.publication} 
                            className="object-contain w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gray-500 block mb-2">{feature.date} • {feature.publication}</span>
                      <h3 className="text-lg font-semibold text-wedding-navy hover:text-wedding-pink transition-colors">{feature.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Brand Assets</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <p className="text-gray-700 mb-6">
                  Our brand assets are available for media use. Please respect our brand guidelines when using these assets. For additional formats or assistance, contact our media team.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Logo Package</h4>
                    <p className="text-sm text-gray-600 mb-4">PNG, SVG, and EPS formats</p>
                    <button className="px-4 py-2 bg-wedding-navy hover:bg-wedding-navy-dark text-white text-sm rounded-md transition-colors">
                      Download Logos
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <h4 className="font-semibold mb-2">Brand Guidelines</h4>
                    <p className="text-sm text-gray-600 mb-4">PDF format, 3.2 MB</p>
                    <button className="px-4 py-2 bg-wedding-navy hover:bg-wedding-navy-dark text-white text-sm rounded-md transition-colors">
                      Download Guidelines
                    </button>
                  </div>
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

export default Press;
