
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="wedding-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-wedding-navy">Terms & Privacy</h1>
            
            <Tabs defaultValue="terms" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="terms">Terms of Service</TabsTrigger>
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="terms" className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-wedding-navy">Terms of Service</h2>
                <p className="text-gray-700 mb-4">
                  Last Updated: May 1, 2025
                </p>
                
                <p className="text-gray-700 mb-4">
                  Welcome to WedMeGood. By accessing or using our website, mobile applications, or services, you agree to be bound by these Terms of Service. Please read them carefully.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">1. Acceptance of Terms</h3>
                <p className="text-gray-700 mb-4">
                  By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">2. Description of Service</h3>
                <p className="text-gray-700 mb-4">
                  WedMeGood provides a platform for couples to discover wedding vendors, create wedding websites, manage guest lists, and access other wedding planning tools. We also provide a platform for wedding vendors to showcase their services to potential clients.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">3. User Accounts</h3>
                <p className="text-gray-700 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <p className="text-gray-700 mb-4">
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">4. User Content</h3>
                <p className="text-gray-700 mb-4">
                  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. By providing User Content to the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.
                </p>
                <p className="text-gray-700 mb-4">
                  You are responsible for the content you post. You represent and warrant that you own or have the necessary rights to post any User Content, and that your User Content does not violate the rights of any third party, including intellectual property rights and privacy rights.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">5. Vendor Listings</h3>
                <p className="text-gray-700 mb-4">
                  WedMeGood does not guarantee the accuracy of information provided by vendors on the platform. While we make efforts to verify vendor information, you should independently verify information before making any decisions or entering into contracts with vendors.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">6. Reviews and Ratings</h3>
                <p className="text-gray-700 mb-4">
                  Users may post reviews and ratings of vendors. All reviews must be based on genuine experiences and must not contain offensive, defamatory, or misleading content. WedMeGood reserves the right to remove any review that violates these guidelines.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">7. Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of WedMeGood and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">8. Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  In no event shall WedMeGood, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">9. Governing Law</h3>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">10. Changes to Terms</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">11. Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us at legal@wedmegood.com.
                </p>
              </TabsContent>
              
              <TabsContent value="privacy" className="bg-white p-8 rounded-lg shadow-md prose prose-lg max-w-none">
                <h2 className="text-3xl font-semibold mb-6 text-wedding-navy">Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  Last Updated: May 1, 2025
                </p>
                
                <p className="text-gray-700 mb-4">
                  This Privacy Policy describes how WedMeGood ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website, mobile applications, or services (collectively, the "Service").
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">1. Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                  We collect several types of information from and about users of our Service, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Personal Information:</strong> This includes your name, email address, phone number, wedding date, and location.</li>
                  <li><strong>Profile Information:</strong> Information you provide when creating a profile, such as your photo, wedding details, and preferences.</li>
                  <li><strong>Vendor Information:</strong> If you register as a vendor, we collect business information, service details, pricing, and portfolio content.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our Service, including the pages you visit, features you use, and time spent on the platform.</li>
                  <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">2. How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide, maintain, and improve our Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Connect couples with relevant vendors based on their preferences</li>
                  <li>Send notifications, updates, and marketing communications</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and fraudulent activities</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">3. Information Sharing and Disclosure</h3>
                <p className="text-gray-700 mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>With Vendors:</strong> If you are a couple, we may share your contact information with vendors you express interest in.</li>
                  <li><strong>With Couples:</strong> If you are a vendor, your business information and portfolio will be visible to couples using our platform.</li>
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf, such as payment processing and analytics.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">4. Data Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">5. Your Choices</h3>
                <p className="text-gray-700 mb-4">
                  You may update, correct, or delete your account information at any time by accessing your account settings. You can also opt-out of marketing communications by following the unsubscribe instructions in our emails.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">6. Cookies and Similar Technologies</h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">7. Children's Privacy</h3>
                <p className="text-gray-700 mb-4">
                  Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">8. Changes to this Privacy Policy</h3>
                <p className="text-gray-700 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-8 text-wedding-navy">9. Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at privacy@wedmegood.com.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndPrivacy;
