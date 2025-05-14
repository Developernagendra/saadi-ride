
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, ListCheck, Users, Book, Wallet, Calendar } from "lucide-react";

const PlanningTools = () => {
  const tools = [
    {
      id: "checklist",
      title: "Wedding Checklist",
      description: "Keep track of all your wedding tasks with our comprehensive checklist.",
      icon: <ListCheck className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false
    },
    {
      id: "budget",
      title: "Budget Planner",
      description: "Plan and manage your wedding expenses with our easy-to-use budget planner.",
      icon: <Wallet className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false
    },
    {
      id: "guests",
      title: "Guest List Manager",
      description: "Organize your guest list, track RSVPs, and manage seating arrangements.",
      icon: <Users className="h-8 w-8 text-wedding-pink" />,
      comingSoon: false
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
      title: "Day-Of Timeline",
      description: "Plan your wedding day schedule down to the minute.",
      icon: <CalendarCheck className="h-8 w-8 text-wedding-pink" />,
      comingSoon: true
    }
  ];

  const featuredTool = {
    title: "Wedding Checklist",
    description: "Stay on track with our comprehensive wedding planning checklist",
    features: [
      "Personalized timeline based on your wedding date",
      "Task reminders and notifications",
      "Progress tracking and completion status",
      "Categorized tasks for easy organization",
      "Ability to add custom tasks",
      "Share with your partner or wedding planner"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Planning Tools</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Make your wedding planning journey stress-free with our suite of planning tools.
            From budgeting to guest lists, we've got everything you need to organize your perfect day.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4">
                {featuredTool.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {featuredTool.description}
              </p>
              <ul className="space-y-3 mb-8">
                {featuredTool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 bg-wedding-pink/10 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-wedding-pink" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
                Try It Now
              </Button>
            </div>
            <div className="bg-wedding-pink/5 p-6 rounded-lg border border-wedding-pink/20">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-wedding-pink flex items-center justify-center text-white text-sm font-medium">1</div>
                  <div className="ml-3 p-3 bg-white rounded-lg border flex-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-wedding-pink rounded border-gray-300" checked />
                      <span className="ml-2 text-gray-700 line-through">Set your wedding date</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-wedding-pink flex items-center justify-center text-white text-sm font-medium">2</div>
                  <div className="ml-3 p-3 bg-white rounded-lg border flex-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-wedding-pink rounded border-gray-300" checked />
                      <span className="ml-2 text-gray-700 line-through">Create your wedding budget</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-wedding-pink flex items-center justify-center text-white text-sm font-medium">3</div>
                  <div className="ml-3 p-3 bg-white rounded-lg border flex-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-wedding-pink rounded border-gray-300" checked />
                      <span className="ml-2 text-gray-700 line-through">Book your venue</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-wedding-pink flex items-center justify-center text-white text-sm font-medium">4</div>
                  <div className="ml-3 p-3 bg-white rounded-lg border flex-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-wedding-pink rounded border-gray-300" />
                      <span className="ml-2 text-gray-700">Start looking for vendors</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-wedding-pink/30 flex items-center justify-center text-white text-sm font-medium">5</div>
                  <div className="ml-3 p-3 bg-white rounded-lg border border-dashed flex-1">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-wedding-pink rounded border-gray-300" disabled />
                      <span className="ml-2 text-gray-400">Create your guest list</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-6">
            Our Planning Tools
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {tool.icon}
                    {tool.comingSoon && (
                      <span className="inline-block bg-wedding-navy/10 text-wedding-navy text-xs px-2 py-1 rounded-full font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-heading text-wedding-navy mt-4">{tool.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className={tool.comingSoon ? 
                      "w-full bg-gray-100 text-gray-500 hover:bg-gray-200 cursor-not-allowed" : 
                      "w-full bg-wedding-pink text-white hover:bg-wedding-pink/90"}
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? "Notify Me" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-wedding-pink/5 p-8 rounded-lg mb-16 border border-wedding-pink/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4">
              Need Help Planning Your Wedding?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our premium planning tools are designed to make your wedding planning journey smooth and stress-free.
              Create an account to access all tools and save your progress.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-wedding-pink text-white hover:bg-wedding-pink/90">
              Create Free Account
            </Button>
            <Button variant="outline" className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10">
              Learn More
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningTools;
