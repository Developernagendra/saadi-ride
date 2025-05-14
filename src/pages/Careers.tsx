
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const currentOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Delhi NCR (Hybrid)",
      type: "Full-time",
      description: "We are looking for an experienced Frontend Developer with React expertise to help build and improve our wedding planning tools and user interfaces.",
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Join our team as a Content Marketing Manager to create engaging wedding-related content that inspires couples and drives engagement with our platform.",
    },
    {
      title: "Wedding Industry Specialist",
      department: "Vendor Relations",
      location: "Mumbai",
      type: "Full-time",
      description: "Help us grow our vendor network in the Mumbai region and ensure we maintain high quality standards across all vendor listings.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Delhi NCR",
      type: "Full-time",
      description: "Create beautiful, intuitive interfaces for our web and mobile applications that make wedding planning a delightful experience for our users.",
    },
    {
      title: "Customer Success Associate",
      department: "Customer Success",
      location: "Bangalore",
      type: "Full-time",
      description: "Support couples and vendors in making the most of our platform, providing timely assistance and ensuring a positive experience for all users.",
    },
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      items: ["Comprehensive health insurance", "Mental health coverage", "Annual wellness allowance", "Gym membership discounts"]
    },
    {
      title: "Work-Life Balance",
      items: ["Flexible working hours", "Remote work options", "Unlimited paid time off", "Parental leave"]
    },
    {
      title: "Growth & Development",
      items: ["Learning budget", "Conference attendance", "Mentorship programs", "Career progression framework"]
    },
    {
      title: "Team & Culture",
      items: ["Regular team events", "Annual retreats", "Birthday celebrations", "Volunteer opportunities"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-wedding-navy">Careers at WedMeGood</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join our passionate team and help transform the wedding planning experience for millions of couples across India. At WedMeGood, we combine creativity, technology, and a deep understanding of celebrations to create products that make a difference in people's lives.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-wedding-navy">Why Work With Us?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Meaningful Impact</h3>
                    <p className="text-gray-700">
                      Our platform helps couples navigate one of the most important celebrations of their lives. Your work directly contributes to making these special moments memorable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Innovation-Focused</h3>
                    <p className="text-gray-700">
                      We're constantly experimenting with new technologies and approaches to improve the wedding planning experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Growth Opportunities</h3>
                    <p className="text-gray-700">
                      As a growing company, we offer numerous opportunities to take on new challenges and develop your skills in multiple areas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-wedding-pink">Collaborative Culture</h3>
                    <p className="text-gray-700">
                      We believe in the power of diverse perspectives and foster a supportive environment where everyone's voice is valued.
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Our Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {benefits.map((category) => (
                  <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-wedding-pink">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center text-gray-700">
                          <svg className="w-4 h-4 text-wedding-pink mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <h2 className="text-3xl font-semibold my-6 text-wedding-navy">Current Openings</h2>
              
              <div className="space-y-6 mb-12">
                {currentOpenings.map((job) => (
                  <div key={job.title} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-wedding-pink">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-wedding-navy">{job.title}</h3>
                        <p className="text-gray-700">{job.department} • {job.location} • {job.type}</p>
                      </div>
                      <button className="px-5 py-2 bg-wedding-pink hover:bg-wedding-pink-dark text-white rounded-md transition-colors whitespace-nowrap">
                        Apply Now
                      </button>
                    </div>
                    <p className="mt-4 text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-wedding-navy text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Don't see the right role?</h2>
                <p className="mb-6">We're always looking for talented individuals to join our team. Send us your resume for future opportunities.</p>
                <button className="px-6 py-3 bg-wedding-pink hover:bg-wedding-pink-dark text-white rounded-md transition-colors">
                  Send Open Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
