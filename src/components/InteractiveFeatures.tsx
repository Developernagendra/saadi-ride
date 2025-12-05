import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Calendar,
  CheckSquare,
  Palette,
  Search,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  Target,
  Clock,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveFeatures = () => {
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleTool = (toolId: string) => {
    setExpandedTool(expandedTool === toolId ? null : toolId);
  };

  const handleToolClick = (toolId: string, link: string) => {
    console.log(`Navigating to tool: ${toolId}`);
    if (toolId === "budget-calculator") {
      navigate("/budget-calculator");
      toast.success("Opening Budget Calculator!");
    } else if (toolId === "wedding-checklist") {
      navigate("/planning-tools");
      toast.success("Navigate to Planning Tools for Wedding Checklist!");
    } else if (toolId === "guest-manager") {
      navigate("/planning-tools");
      toast.success("Navigate to Planning Tools for Guest Manager!");
    } else if (toolId === "color-palette") {
      navigate("/planning-tools");
      toast.success("Navigate to Planning Tools for Color Palette Generator!");
    } else if (toolId === "timeline-planner") {
      navigate("/planning-tools");
      toast.success("Navigate to Planning Tools for Timeline Planner!");
    } else {
      navigate(link);
    }
  };

  const planningTools = [
    {
      id: "budget-calculator",
      title: "Budget Calculator",
      icon: Calculator,
      description: "Plan your wedding expenses with our smart budget calculator",
      features: [
        "Real-time budget calculations",
        "Category-wise expense breakdown",
        "Cost per person calculator",
        "Download & share functionality",
        "Interactive sliders for easy input"
      ],
      color: "from-green-500 to-emerald-600",
      link: "/budget-calculator"
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
    <section className="py-8 xs:py-10 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="wedding-container">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 lg:mb-16 px-4">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="bg-gradient-to-r from-wedding-pink to-pink-600 p-2 xs:p-2.5 sm:p-3 rounded-full">
              <Sparkles className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-3 xs:mb-4 sm:mb-6">
            Your Wedding Planning <span className="text-wedding-pink">Toolkit</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and resources to make your wedding planning journey smooth, 
            organized, and stress-free from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 mb-8 xs:mb-10 sm:mb-12 lg:mb-16 px-3 sm:px-2 lg:px-0">
          {planningTools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isExpanded = expandedTool === tool.id;
            
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card 
                  className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] border-2 border-gray-100 hover:border-wedding-pink/30 bg-white/90 backdrop-blur-sm cursor-pointer touch-manipulation h-full ${
                    isExpanded ? 'ring-2 ring-wedding-pink/50 shadow-xl' : ''
                  }`}
                  onClick={() => handleToolClick(tool.id, tool.link)}
                >
                <CardHeader className="text-center pb-2 xs:pb-3 sm:pb-4 p-3 xs:p-4 sm:p-6">
                  <div className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto mb-2 xs:mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-sm xs:text-base sm:text-xl font-heading font-bold text-wedding-navy group-hover:text-wedding-pink transition-colors leading-tight">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-2 xs:space-y-3 sm:space-y-4 p-3 xs:p-4 sm:p-6 pt-0">
                  <p className="text-gray-600 leading-relaxed text-[11px] xs:text-xs sm:text-base line-clamp-2 xs:line-clamp-3 sm:line-clamp-none">
                    {tool.description}
                  </p>
                  
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTool(tool.id);
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full border-wedding-pink/30 text-wedding-pink hover:bg-wedding-pink hover:text-white transition-all duration-300 text-xs xs:text-sm h-8 xs:h-9 sm:h-10"
                  >
                    {isExpanded ? (
                      <>
                        Hide <ChevronUp className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </>
                    ) : (
                      <>
                        Features <ChevronDown className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </>
                    )}
                  </Button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <h4 className="font-semibold text-wedding-navy mb-2 sm:mb-3 flex items-center text-xs sm:text-sm">
                          <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          Key Features:
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                          {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-wedding-pink rounded-full mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></div>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToolClick(tool.id, tool.link);
                          }}
                          size="sm"
                          className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white text-xs sm:text-sm h-8 sm:h-10"
                        >
                          Try Now <Star className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>  
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-xl border border-gray-200/50 mx-4 sm:mx-2 lg:mx-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 text-center">
            <div className="space-y-1 xs:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-wedding-pink">50K+</div>
              <div className="text-xs xs:text-sm text-gray-600">Weddings Planned</div>
            </div>
            <div className="space-y-1 xs:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-wedding-pink">95%</div>
              <div className="text-xs xs:text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-1 xs:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-wedding-pink">30+</div>
              <div className="text-xs xs:text-sm text-gray-600">Planning Tools</div>
            </div>
            <div className="space-y-1 xs:space-y-2">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-wedding-pink">24/7</div>
              <div className="text-xs xs:text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 xs:mt-10 sm:mt-12 px-4">
          <Button 
            onClick={() => navigate('/planning-tools')}
            className="bg-gradient-to-r from-wedding-navy to-blue-700 hover:from-wedding-navy/90 hover:to-blue-800 text-white px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 touch-target w-full sm:w-auto"
          >
            <Clock className="mr-2 h-4 w-4 xs:h-5 xs:w-5" />
            Access All Planning Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
