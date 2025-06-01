
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about transforming wedding transportation in Bihar with 10+ years of experience in the industry."
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in logistics and operations, ensuring smooth and reliable transportation services for every wedding."
    },
    {
      name: "Amit Singh",
      role: "Technology Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Tech enthusiast developing innovative solutions for live tracking and seamless booking experiences."
    },
    {
      name: "Sunita Devi",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated to ensuring every couple has a perfect wedding day experience with our transportation services."
    },
    {
      name: "Vikash Jha",
      role: "Fleet Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Maintains our premium fleet of vehicles and ensures the highest standards of safety and comfort."
    },
    {
      name: "Kavita Kumari",
      role: "Wedding Coordinator",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in coordinating wedding day logistics and ensuring seamless transportation for all events."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy mb-6">
            Meet Our <span className="text-wedding-pink">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate people behind Saadi Ride who are dedicated to making your wedding transportation seamless and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-heading font-semibold text-xl text-wedding-navy mb-1">
                  {member.name}
                </h3>
                <p className="text-wedding-pink font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-wedding-navy mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to help make weddings more beautiful and memorable. 
            If you're interested in joining the Saadi Ride family, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@saadiride.com" 
              className="bg-wedding-navy text-white px-8 py-3 rounded-lg hover:bg-wedding-navy/90 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="mailto:hello@saadiride.com" 
              className="border border-wedding-pink text-wedding-pink px-8 py-3 rounded-lg hover:bg-wedding-pink/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeetOurTeam;
