
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  Calendar,
  CheckSquare,
  Palette,
  Search,
  Users,
  Heart,
  Star,
  ChevronDown,
  ChevronUp,
  Target,
  Clock,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const InteractiveFeatures = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const toggleTool = (toolId: string) => {
    setExpandedTool(expandedTool === toolId ? null : toolId);
  };

  const planningTools = [
    {
      id: "budget-calculator",
      title: "Budget Calculator",
      icon: Calculator,
      description: "Plan your wedding expenses with our smart budget calculator",
      features: [
        "Category-wise budget breakdown",
        "Expense tracking and alerts",
        "Cost comparison tools", 
        "Savings recommendations",
        "Vendor cost estimates"
      ],
      color: "from-green-500 to-emerald-600",
      link: "/planning-tools"
    },
    {
      id: "wedding-checklist",
      title: "Wedding Checklist",
      icon: CheckSquare,
      description: "Never miss a task with our comprehensive wedding checklist",
      features: [
        "12-month timeline planning",
        "Task prioritization system",
        "Progress tracking dashboard",
        "Custom reminder notifications",
        "Sharing with family & vendors"
      ],
      color: "from-blue-500 to-cyan-600",
      link: "/planning-tools"
    },
    {
      id: "guest-manager",
      title: "Guest Manager",
      icon: Users,
      description: "Manage your guest list and RSVPs effortlessly",
      features: [
        "Guest list organization",
        "RSVP tracking system",
        "Seating arrangement planner",
        "Dietary preferences tracker",
        "Digital invitation sender"
      ],
      color: "from-purple-500 to-violet-600",
      link: "/planning-tools"
    },
    {
      id: "color-palette",
      title: "Color Palette Generator",
      icon: Palette,
      description: "Create beautiful color schemes for your wedding theme",
      features: [
        "AI-powered color matching",
        "Seasonal palette suggestions",
        "Mood board creator",
        "Vendor color coordination",
        "Print-ready color codes"
      ],
      color: "from-pink-500 to-rose-600",
      link: "/planning-tools"
    },
    {
      id: "timeline-planner",
      title: "Timeline Planner",
      icon: Calendar,
      description: "Create detailed schedules for your wedding day",
      features: [
        "Hour-by-hour timeline",
        "Vendor coordination schedule",
        "Photography timeline",
        "Transportation planning",
        "Emergency backup plans"
      ],
      color: "from-orange-500 to-amber-600",
      link: "/planning-tools"
    },
    {
      id: "vendor-comparison",
      title: "Vendor Comparison",
      icon: Search,
      description: "Compare vendors side-by-side to make informed decisions",
      features: [
        "Price comparison matrix",
        "Service feature analysis",
        "Review aggregation",
        "Availability checker",
        "Contract term comparison"
      ],
      color: "from-indigo-500 to-blue-700",
      link: "/vendors"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="wedding-container">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-wedding-pink to-pink-600 p-3 rounded-full">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-wedding-navy mb-6">
            Your Wedding Planning <span className="text-wedding-pink">Toolkit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and resources to make your wedding planning journey smooth, 
            organized, and stress-free from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {planningTools.map((tool) => {
            const IconComponent = tool.icon;
            const isExpanded = expandedTool === tool.id;
            
            return (
              <Card 
                key={tool.id} 
                className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-wedding-pink/30 bg-white/90 backdrop-blur-sm ${
                  isExpanded ? 'ring-2 ring-wedding-pink/50 shadow-xl' : ''
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading font-bold text-wedding-navy group-hover:text-wedding-pink transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <Button
                    onClick={() => toggleTool(tool.id)}
                    variant="outline"
                    className="w-full border-wedding-pink/30 text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300"
                  >
                    {isExpanded ? (
                      <>
                        Hide Features <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View Features <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  
                  {isExpanded && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-in slide-in-from-top-2 duration-300">
                      <h4 className="font-semibold text-wedding-navy mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {tool.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-wedding-pink rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={tool.link}>
                        <Button className="w-full mt-4 bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white">
                          Try Now <Star className="ml-2 h-4 w-4" />
                        </Button>  
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wedding-pink">50K+</div>
              <div className="text-sm text-gray-600">Weddings Planned</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wedding-pink">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wedding-pink">30+</div>
              <div className="text-sm text-gray-600">Planning Tools</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-wedding-pink">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/planning-tools">
            <Button className="bg-gradient-to-r from-wedding-navy to-blue-700 hover:from-wedding-navy/90 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300">
              <Clock className="mr-2 h-5 w-5" />
              Access All Planning Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
