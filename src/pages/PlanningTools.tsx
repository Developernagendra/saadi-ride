
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, ListCheck, Users, Book, Wallet, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const PlanningTools = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const tools = [
    {
      id: "checklist",
      title: "Wedding Checklist",
      description: "Keep track of all your wedding tasks with our comprehensive checklist.",
      icon: <ListCheck className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false,
      route: "/"
    },
    {
      id: "budget",
      title: "Budget Planner",
      description: "Plan and manage your wedding expenses with our easy-to-use budget planner.",
      icon: <Wallet className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false,
      route: "/"
    },
    {
      id: "guests",
      title: "Guest List Manager",
      description: "Organize your guest list, track RSVPs, and manage seating arrangements.",
      icon: <Users className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false,
      route: "/"
    },
    {
      id: "vendors",
      title: "Vendor Manager",
      description: "Keep all your vendor contacts, quotes, and payments organized in one place.",
      icon: <Book className="h-8 w-8 text-wedding-pink" />,
      comingSoon: true
    },
    {
      id: "website",
      title: "Wedding Website",
      description: "Create a beautiful wedding website to share with your guests.",
      icon: <Calendar className="h-8 w-8 text-wedding-pink" />,
      comingSoon: true
    },
    {
      id: "timeline",
      title: "Timeline Planner",
      description: "Create a detailed timeline for your wedding day and share it with vendors.",
      icon: <CalendarCheck className="h-8 w-8 text-wedding-pink" />,
      comingSoon: true
    }
  ];

  const handleToolClick = (tool: typeof tools[0]) => {
    if (tool.comingSoon) {
      toast({
        title: "Coming Soon!",
        description: `${tool.title} will be available soon. We'll notify you when it's ready.`,
      });
    } else {
      navigate(tool.route);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding Planning <span className="text-wedding-pink">Tools</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Streamline your wedding planning process with our comprehensive suite of tools designed to make your special day perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => (
            <Card 
              key={tool.id} 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                tool.comingSoon ? 'opacity-75' : ''
              }`}
              onClick={() => handleToolClick(tool)}
            >
              <CardHeader className="text-center">
                <div className="bg-wedding-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  {tool.title}
                  {tool.comingSoon && (
                    <span className="text-xs bg-wedding-pink text-white px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant={tool.comingSoon ? "outline" : "default"}
                  className={tool.comingSoon ? 
                    "border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10" : 
                    "bg-wedding-pink text-white hover:bg-wedding-pink/90"
                  }
                  disabled={tool.comingSoon}
                >
                  {tool.comingSoon ? "Notify Me" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-wedding-pink/5 to-wedding-navy/5 rounded-lg p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-6">
            Why Choose ShaadiSaathi Planning Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive tools designed for couples, not wedding planners.</p>
            </div>
            <div className="text-center">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💾</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Synced</h3>
              <p className="text-gray-600">Access your planning data from anywhere, anytime.</p>
            </div>
            <div className="text-center">
              <div className="bg-wedding-pink/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Collaborative</h3>
              <p className="text-gray-600">Share with your partner, family, and vendors.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningTools;
