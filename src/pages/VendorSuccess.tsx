
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const VendorSuccess = () => {
  const navigate = useNavigate();
  
  const successStories = [
    {
      id: 1,
      name: "Vibrant Weddings",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      quote: "Since joining WedMeGood, our bookings have increased by 70%. The platform has been instrumental in connecting us with couples who perfectly match our style and vision.",
      results: "200+ new bookings in the first year"
    },
    {
      id: 2,
      name: "Royal Banquets",
      category: "Venue",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      quote: "WedMeGood has transformed our business. The targeted exposure has helped us reach couples who are specifically looking for luxury wedding venues like ours.",
      results: "40% increase in venue bookings"
    },
    {
      id: 3,
      name: "Glamour Makeovers",
      category: "Makeup Artist",
      image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
      quote: "As a makeup artist, I was struggling to reach my target audience. With WedMeGood, I've been able to showcase my portfolio to brides who appreciate my style and artistry.",
      results: "Fully booked for wedding season within 3 months"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Vendor <span className="text-wedding-pink">Success Stories</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how wedding professionals have grown their businesses with WedMeGood
          </p>
        </div>

        <section className="mb-16">
          {successStories.map((story, index) => (
            <Card key={story.id} className="mb-10 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-heading font-bold text-wedding-navy mb-2">{story.name}</h2>
                  <p className="text-wedding-pink mb-4">{story.category}</p>
                  <blockquote className="text-gray-600 italic mb-6 border-l-4 border-wedding-pink pl-4 py-1">
                    "{story.quote}"
                  </blockquote>
                  <div className="bg-wedding-pink/10 text-wedding-pink p-3 rounded-md font-semibold text-center mb-6">
                    {story.results}
                  </div>
                  <Button 
                    className="bg-wedding-pink text-white hover:bg-wedding-pink/90 self-start"
                    onClick={() => navigate("/vendors/join")}
                  >
                    Join WedMeGood
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </section>

        <section className="mb-16 bg-wedding-pink/5 p-8 rounded-lg border border-wedding-pink/20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4">
              Your Success Story Starts Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join thousands of wedding vendors who have grown their businesses with WedMeGood. 
              Create your profile today and start connecting with engaged couples.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-wedding-pink text-white hover:bg-wedding-pink/90"
                onClick={() => navigate("/vendors/join")}
              >
                Join as Vendor
              </Button>
              <Button 
                variant="outline" 
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                onClick={() => navigate("/vendors/faq")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VendorSuccess;
