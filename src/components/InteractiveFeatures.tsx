
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, CheckCircle, Calendar, Mail, Scale, DollarSign, Palette, Camera } from "lucide-react";
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
      icon: <Calculator className="w-5 h-5" />,
      description: "Plan your wedding budget with our smart calculator"
    },
    {
      id: "checklist",
      title: "Planning Checklist",
      icon: <CheckCircle className="w-5 h-5" />,
      description: "Stay organized with our comprehensive wedding checklist"
    },
    {
      id: "booking",
      title: "Book Appointment",
      icon: <Calendar className="w-5 h-5" />,
      description: "Schedule consultations with our wedding experts"
    },
    {
      id: "newsletter",
      title: "Newsletter",
      icon: <Mail className="w-5 h-5" />,
      description: "Get the latest wedding trends and tips"
    },
    {
      id: "comparison",
      title: "Compare Vendors",
      icon: <Scale className="w-5 h-5" />,
      description: "Compare different vendors side by side"
    },
    {
      id: "estimator",
      title: "Cost Estimator",
      icon: <DollarSign className="w-5 h-5" />,
      description: "Get detailed wedding cost estimates"
    },
    {
      id: "colors",
      title: "Color Palettes",
      icon: <Palette className="w-5 h-5" />,
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

        <Card className="shadow-xl">
          <CardHeader className="bg-gradient-to-r from-wedding-pink to-wedding-navy text-white">
            <CardTitle className="text-center text-2xl font-heading">
              Your Wedding Planning Toolkit
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 w-full h-auto bg-gray-50">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className="flex flex-col items-center p-3 data-[state=active]:bg-white data-[state=active]:text-wedding-pink text-xs"
                  >
                    <div className="flex items-center space-x-1 mb-1">
                      {feature.icon}
                      <span className="font-medium hidden sm:inline">{feature.title}</span>
                    </div>
                    <span className="text-xs text-gray-500 hidden lg:block text-center leading-tight">
                      {feature.description}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="p-6">
                <TabsContent value="budget" className="mt-0">
                  <BudgetCalculator />
                </TabsContent>

                <TabsContent value="checklist" className="mt-0">
                  <WeddingChecklist />
                </TabsContent>

                <TabsContent value="booking" className="mt-0">
                  <BookingCalendar />
                </TabsContent>

                <TabsContent value="newsletter" className="mt-0">
                  <NewsletterSubscription />
                </TabsContent>

                <TabsContent value="comparison" className="mt-0">
                  <VendorComparison />
                </TabsContent>

                <TabsContent value="estimator" className="mt-0">
                  <WeddingCostEstimator />
                </TabsContent>

                <TabsContent value="colors" className="mt-0">
                  <ColorPaletteGenerator />
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-wedding-pink mb-2">1000+</div>
            <div className="text-sm text-gray-600">Happy Couples</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-wedding-navy mb-2">500+</div>
            <div className="text-sm text-gray-600">Trusted Vendors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-wedding-pink mb-2">50+</div>
            <div className="text-sm text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-wedding-navy mb-2">4.9</div>
            <div className="text-sm text-gray-600 flex items-center justify-center">
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
