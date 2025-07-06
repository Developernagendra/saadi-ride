
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BudgetCalculator from "@/components/BudgetCalculator";
import WeddingCostEstimator from "@/components/WeddingCostEstimator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BudgetCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Wedding <span className="text-wedding-pink">Budget Calculator</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your perfect wedding budget with our comprehensive calculator and cost estimator tools.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Budget Calculator</TabsTrigger>
            <TabsTrigger value="estimator">Cost Estimator</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator" className="mt-6">
            <BudgetCalculator />
          </TabsContent>
          
          <TabsContent value="estimator" className="mt-6">
            <WeddingCostEstimator />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default BudgetCalculatorPage;
