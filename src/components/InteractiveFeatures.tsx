
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CheckCircle, Calendar, Mail, Scale, DollarSign, Palette } from "lucide-react";
import BudgetCalculator from "./BudgetCalculator";
import WeddingChecklist from "./WeddingChecklist";
import BookingCalendar from "./BookingCalendar";
import NewsletterSubscription from "./NewsletterSubscription";
import VendorComparison from "./VendorComparison";
import WeddingCostEstimator from "./WeddingCostEstimator";
import ColorPaletteGenerator from "./ColorPaletteGenerator";

const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState("budget");

  const features = [
    {
      id: "budget",
      title: "Budget Calculator",
      icon: <Calculator className="w-4 h-4" />,
      description: "Plan your wedding budget with our smart calculator"
    },
    {
      id: "checklist",
      title: "Planning Checklist",
      icon: <CheckCircle className="w-4 h-4" />,
      description: "Stay organized with our comprehensive wedding checklist"
    },
    {
      id: "booking",
      title: "Book Appointment",
      icon: <Calendar className="w-4 h-4" />,
      description: "Schedule consultations with our wedding experts"
    },
    {
      id: "newsletter",
      title: "Newsletter",
      icon: <Mail className="w-4 h-4" />,
      description: "Get the latest wedding trends and tips"
    },
    {
      id: "comparison",
      title: "Compare Vendors",
      icon: <Scale className="w-4 h-4" />,
      description: "Compare different vendors side by side"
    },
    {
      id: "estimator",
      title: "Cost Estimator",
      icon: <DollarSign className="w-4 h-4" />,
      description: "Get detailed wedding cost estimates"
    },
    {
      id: "colors",
      title: "Color Palettes",
      icon: <Palette className="w-4 h-4" />,
      description: "Discover perfect color combinations"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-wedding-cream/30 to-white">
      <div className="wedding-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-wedding-navy mb-4">
            Interactive Planning Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make your wedding planning easier with our comprehensive set of interactive tools and features
          </p>
        </div>

        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-wedding-pink to-wedding-navy text-white p-6">
            <CardTitle className="text-center text-2xl font-heading">
              Your Wedding Planning Toolkit
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Enhanced Tab Navigation */}
              <div className="border-b bg-gray-50/50">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 w-full h-auto bg-transparent p-0 gap-0">
                  {features.map((feature) => (
                    <TabsTrigger
                      key={feature.id}
                      value={feature.id}
                      className="flex flex-col items-center justify-center p-4 min-h-[80px] data-[state=active]:bg-white data-[state=active]:text-wedding-pink data-[state=active]:border-b-2 data-[state=active]:border-wedding-pink border-b border-transparent hover:bg-white/50 transition-all duration-200 rounded-none"
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className="p-2 rounded-full bg-wedding-pink/10 data-[state=active]:bg-wedding-pink/20">
                          {feature.icon}
                        </div>
                        <div className="text-center">
                          <span className="font-medium text-xs sm:text-sm block leading-tight">
                            {feature.title}
                          </span>
                          <span className="text-xs text-gray-500 hidden lg:block mt-1 leading-tight">
                            {feature.description}
                          </span>
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content with Better Spacing */}
              <div className="p-6 min-h-[500px] bg-white">
                <TabsContent value="budget" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <BudgetCalculator />
                  </div>
                </TabsContent>

                <TabsContent value="checklist" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <WeddingChecklist />
                  </div>
                </TabsContent>

                <TabsContent value="booking" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <BookingCalendar />
                  </div>
                </TabsContent>

                <TabsContent value="newsletter" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <NewsletterSubscription />
                  </div>
                </TabsContent>

                <TabsContent value="comparison" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <VendorComparison />
                  </div>
                </TabsContent>

                <TabsContent value="estimator" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <WeddingCostEstimator />
                  </div>
                </TabsContent>

                <TabsContent value="colors" className="mt-0 focus-visible:outline-none">
                  <div className="animate-fade-in">
                    <ColorPaletteGenerator />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">👰</span>
            </div>
            <div className="text-3xl font-bold text-wedding-pink mb-2">1000+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Couples</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-wedding-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🏪</span>
            </div>
            <div className="text-3xl font-bold text-wedding-navy mb-2">500+</div>
            <div className="text-sm text-gray-600 font-medium">Trusted Vendors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🏙️</span>
            </div>
            <div className="text-3xl font-bold text-wedding-pink mb-2">50+</div>
            <div className="text-sm text-gray-600 font-medium">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-wedding-navy/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⭐</span>
            </div>
            <div className="text-3xl font-bold text-wedding-navy mb-2">4.9</div>
            <div className="text-sm text-gray-600 font-medium flex items-center justify-center">
              <span className="text-yellow-400 mr-1">⭐</span>
              Average Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
