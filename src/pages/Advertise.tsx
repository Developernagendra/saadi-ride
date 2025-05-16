
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const Advertise = () => {
  const navigate = useNavigate();
  
  const adPackages = [
    {
      title: "Basic Listing",
      price: "Free",
      description: "Get started with a basic vendor profile",
      features: [
        "Standard vendor listing",
        "3 portfolio images",
        "Basic analytics",
        "Email inquiries"
      ]
    },
    {
      title: "Premium",
      price: "₹25,000/year",
      description: "Enhanced visibility and features",
      popular: true,
      features: [
        "Featured in search results",
        "Unlimited portfolio images",
        "Advanced analytics dashboard",
        "Priority customer support",
        "Lead management tools",
        "Social media promotion (1x/month)"
      ]
    },
    {
      title: "Elite",
      price: "₹45,000/year",
      description: "Maximum exposure for high-end vendors",
      features: [
        "Top placement in search results",
        "Unlimited portfolio images",
        "Full analytics suite",
        "Dedicated account manager",
        "Lead management tools",
        "Featured on homepage (rotation)",
        "Social media promotion (2x/month)",
        "Featured in email newsletters"
      ]
    }
  ];

  const adOptions = [
    {
      title: "Banner Ads",
      description: "Display your brand on high-traffic pages"
    },
    {
      title: "Featured Listings",
      description: "Premium placement in search results and category pages"
    },
    {
      title: "Email Promotions",
      description: "Reach engaged couples through our email newsletters"
    },
    {
      title: "Social Media Features",
      description: "Get featured on our Instagram and Facebook pages"
    },
    {
      title: "Blog Collaborations",
      description: "Showcase your work in our wedding inspiration blog"
    },
    {
      title: "Custom Campaigns",
      description: "Tailored advertising solutions for your specific goals"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Advertise <span className="text-wedding-pink">With Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach engaged couples and grow your wedding business with our tailored advertising solutions
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8 text-center">
            Vendor Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden ${pkg.popular ? 'border-wedding-pink ring-2 ring-wedding-pink/20' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-wedding-pink text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-6 ${pkg.popular ? 'pt-4' : 'pt-6'}`}>
                  <h3 className="text-xl font-heading font-bold text-wedding-navy mb-1">{pkg.title}</h3>
                  <div className="text-2xl font-bold mb-2">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex">
                        <Check className="h-5 w-5 text-wedding-pink mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={pkg.popular ? 
                      "w-full bg-wedding-pink text-white hover:bg-wedding-pink/90" : 
                      "w-full border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 bg-transparent"}
                    onClick={() => navigate("/vendors/join")}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8 text-center">
            Advertising Options
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-wedding-navy mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 text-wedding-pink"
                    onClick={() => navigate("/about/contact")}
                  >
                    Contact for Details →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-wedding-navy p-8 rounded-lg text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Ready to Grow Your Wedding Business?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Our advertising team will work with you to create a custom solution that meets your business goals and budget.
            </p>
            <Button 
              className="bg-wedding-pink text-white hover:bg-wedding-pink/90"
              onClick={() => navigate("/about/contact")}
            >
              Contact Our Ad Team
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Advertise;
