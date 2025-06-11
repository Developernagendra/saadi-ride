import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users, Globe, Award } from "lucide-react";

const MissionVision = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-wedding-pink" />,
      title: "Customer First",
      description: "Every decision we make is centered around creating the best experience for our customers on their special day."
    },
    {
      icon: <Target className="h-8 w-8 text-wedding-pink" />,
      title: "Reliability",
      description: "We understand that weddings happen once in a lifetime, and we ensure our services are always dependable and punctual."
    },
    {
      icon: <Users className="h-8 w-8 text-wedding-pink" />,
      title: "Community Focus",
      description: "We're proud to serve the Bihar community and contribute to making local weddings more beautiful and memorable."
    },
    {
      icon: <Globe className="h-8 w-8 text-wedding-pink" />,
      title: "Innovation",
      description: "We continuously invest in technology like live tracking and seamless booking to enhance our service quality."
    },
    {
      icon: <Award className="h-8 w-8 text-wedding-pink" />,
      title: "Excellence",
      description: "We maintain the highest standards in our fleet, drivers, and customer service to exceed expectations."
    },
    {
      icon: <Eye className="h-8 w-8 text-wedding-pink" />,
      title: "Transparency",
      description: "We believe in honest pricing, clear communication, and transparent business practices with all our clients."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy mb-6">
            Our Mission <span className="text-wedding-pink">&</span> Vision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what drives us to transform wedding transportation and planning in Bihar and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-l-4 border-l-wedding-pink">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-wedding-pink mr-4" />
                <h2 className="text-3xl font-heading font-bold text-wedding-navy">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To revolutionize wedding transportation in Bihar by providing reliable, premium, and technology-enabled 
                transportation services that make every couple's special day seamless and memorable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to connecting couples with the best transportation options, from luxurious wedding cars 
                to efficient guest shuttles, while ensuring punctuality, safety, and exceptional customer service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-wedding-navy">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-wedding-navy mr-4" />
                <h2 className="text-3xl font-heading font-bold text-wedding-navy">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To become Bihar's most trusted wedding transportation platform, setting new standards for reliability, 
                innovation, and customer satisfaction in the wedding industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where every couple in Bihar has access to premium transportation services with 
                real-time tracking, seamless booking, and personalized care that makes their wedding day perfect.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-wedding-navy text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-wedding-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-wedding-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-wedding-pink/10 to-wedding-navy/10 rounded-lg p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-wedding-navy mb-6">
            Our Commitment to Bihar
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            As a Bihar-based company, we understand the unique cultural significance of weddings in our region. 
            We're not just a transportation service – we're part of your celebration, ensuring that every journey 
            on your wedding day reflects the joy and grandeur of this once-in-a-lifetime event.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-wedding-pink mb-2">1000+</div>
              <div className="text-gray-600">Happy Couples Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-wedding-pink mb-2">50+</div>
              <div className="text-gray-600">Premium Vehicles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-wedding-pink mb-2">4</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MissionVision;
