
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VendorFAQ = () => {
  const navigate = useNavigate();
  
  const faqs = [
    {
      question: "How do I join ShaadiShaati as a vendor?",
      answer: "To join ShaadiShaati as a vendor, you can click on the 'Join as Vendor' button on our website. Fill out the required information, upload your portfolio, and our team will review your application. Once approved, you'll receive a confirmation email with your account details."
    },
    {
      question: "What types of vendors can join ShaadiShaati?",
      answer: "ShaadiShaati welcomes a wide range of wedding vendors including photographers, makeup artists, wedding planners, venues, caterers, decorators, bridal wear designers, groom wear designers, invitation designers, choreographers, mehendi artists, and more."
    },
    {
      question: "How much does it cost to join as a vendor?",
      answer: "We offer various membership packages to suit different business needs. Our basic listing is free, while premium listings with enhanced features start at ₹15,000 per year. For detailed pricing, please contact our vendor support team."
    },
    {
      question: "How do I get more leads through ShaadiShaati?",
      answer: "To maximize your leads on ShaadiShaati, we recommend completing your profile with high-quality photos, detailed descriptions, and accurate pricing information. Respond promptly to inquiries, collect reviews from past clients, and consider upgrading to a premium listing for better visibility and additional features."
    },
    {
      question: "Can I update my portfolio and pricing after creating my profile?",
      answer: "Yes, you can update your portfolio, services, and pricing information anytime through your vendor dashboard. We encourage vendors to keep their profiles up-to-date with their latest work and service offerings."
    },
    {
      question: "How do customers contact me through ShaadiShaati?",
      answer: "When a customer is interested in your services, they can send you an inquiry through your profile page. You'll receive a notification by email and in your vendor dashboard. You can then respond directly to the customer through our messaging system."
    },
    {
      question: "How are vendors ranked on search results?",
      answer: "Vendor ranking in search results depends on several factors including profile completeness, response rate to inquiries, customer reviews and ratings, premium membership status, and the relevance of your services to the customer's search criteria."
    },
    {
      question: "How do I get featured on ShaadiShaati's homepage or blog?",
      answer: "We regularly feature exceptional vendors on our homepage and blog. To be considered, maintain a high-quality profile with excellent reviews. You can also share your best work with our editorial team for consideration in our curated content features."
    },
    {
      question: "What support does ShaadiShaati provide to vendors?",
      answer: "We provide dedicated vendor support through phone and email, analytics on your profile performance, marketing tips, and educational resources to help grow your business. Premium vendors also receive priority support and additional marketing opportunities."
    },
    {
      question: "Can I advertise my business on ShaadiShaati?",
      answer: "Yes, we offer various advertising options including banner ads, sponsored content, and featured listings. Contact our advertising team for custom packages tailored to your marketing goals and budget."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Vendor <span className="text-wedding-pink">FAQ</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about joining and growing your business with ShaadiShaati
          </p>
        </div>

        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-wedding-navy font-semibold hover:text-wedding-pink">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="mb-16 bg-wedding-pink/5 p-8 rounded-lg border border-wedding-pink/20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-4">
              Ready to Join ShaadiShaati?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Reach thousands of engaged couples planning their weddings. Create your vendor profile today and start growing your business.
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
                onClick={() => navigate("/vendors/advertise")}
              >
                Advertise With Us
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-wedding-cream/50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-wedding-navy mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our vendor support team is here to help you with any questions about joining ShaadiShaati or managing your vendor profile.
              </p>
              <Button 
                variant="outline" 
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                onClick={() => navigate("/about/contact")}
              >
                Contact Support
              </Button>
            </div>
            <div className="bg-wedding-cream/50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-wedding-navy mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Read how wedding vendors have grown their businesses and reached more clients through our platform.
              </p>
              <Button 
                variant="outline" 
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10"
                onClick={() => navigate("/vendors/success")}
              >
                See Success Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VendorFAQ;
