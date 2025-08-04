import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, Globe, CalendarCheck, Wallet, List,
  UserPlus, User, Megaphone, Star, HelpCircle,
  Heart, Image, Book, Lightbulb, TrendingUp, CreditCard, Gift,
  Map, MessageCircle, Headphones, Phone, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";
import { toast } from "sonner";

const Footer = () => {
  const handleWhatsAppSupport = () => {
    sendWhatsAppMessage({
      type: 'support',
      message: 'Hi! I need help with wedding planning services. Please contact me.'
    });
    
    toast.success("Opening WhatsApp...", {
      description: "Connect with our 24/7 support team directly."
    });
  };

  const biharCities = [
    { name: "Patna", link: "/vendors?city=patna" },
    { name: "Gaya", link: "/vendors?city=gaya" },
    { name: "Bhagalpur", link: "/vendors?city=bhagalpur" },
    { name: "Muzaffarpur", link: "/vendors?city=muzaffarpur" },
    { name: "Darbhanga", link: "/vendors?city=darbhanga" },
    { name: "Bihar Sharif", link: "/vendors?city=bihar-sharif" },
    { name: "Arrah", link: "/vendors?city=arrah" },
    { name: "Begusarai", link: "/vendors?city=begusarai" },
    { name: "Katihar", link: "/vendors?city=katihar" },
    { name: "Chapra", link: "/vendors?city=chapra" },
    { name: "Sasaram", link: "/vendors?city=sasaram" },
    { name: "Hajipur", link: "/vendors?city=hajipur" }
  ];

  const footerLinks = [
    {
      title: "For Couples",
      icon: <Users size={16} />,
      description: "Planning your big day? We've got all the tools you need.",
      links: [
        { name: "Find Vendors", icon: <Users size={14} />, url: "/vendors", description: "Discover top-rated wedding vendors in your area" },
        { name: "Wedding Website", icon: <Globe size={14} />, url: "/planning-tools", description: "Create a beautiful custom wedding website for free" },
        { name: "Wedding Checklist", icon: <CalendarCheck size={14} />, url: "/planning-tools", description: "Stay organized with our comprehensive timeline" },
        { name: "Budget Planner", icon: <Wallet size={14} />, url: "/budget-calculator", description: "Track expenses and manage your wedding budget" },
        { name: "Guest List Manager", icon: <List size={14} />, url: "/planning-tools", description: "Organize your guest list and track RSVPs" },
        { name: "Online Payment", icon: <CreditCard size={14} />, url: "/planning-tools", description: "Secure online payments with Razorpay" },
        { name: "Referral & Earn", icon: <Gift size={14} />, url: "/referral-earn", description: "Refer friends and earn rewards" },
        { name: "Location Maps", icon: <Map size={14} />, url: "/planning-tools", description: "Interactive maps for venue locations" },
      ],
    },
    {
      title: "For Vendors",
      icon: <Star size={16} />,
      description: "Grow your wedding business with our platform.",
      links: [
        { name: "Join as Vendor", icon: <UserPlus size={14} />, url: "/vendors/join", description: "List your services and reach engaged couples" },
        { name: "Vendor Login", icon: <User size={14} />, url: "/vendors/login", description: "Access your vendor dashboard and manage bookings" },
        { name: "Advertise with Us", icon: <Megaphone size={14} />, url: "/vendors/advertise", description: "Increase visibility with premium advertising options" },
        { name: "Vendor Success Stories", icon: <Star size={14} />, url: "/vendors/success", description: "Read testimonials from successful wedding vendors" },
        { name: "Vendor FAQ", icon: <HelpCircle size={14} />, url: "/vendors/faq", description: "Find answers to common questions about our platform" },
      ],
    },
    {
      title: "Inspiration",
      icon: <Lightbulb size={16} />,
      description: "Get inspired for your perfect wedding day.",
      links: [
        { name: "Real Weddings", icon: <Heart size={14} />, url: "/real-weddings", description: "Browse real weddings from around the world" },
        { name: "Photos", icon: <Image size={14} />, url: "/photos", description: "Explore thousands of wedding photos for inspiration" },
        { name: "Wedding Blog", icon: <Book size={14} />, url: "/blog", description: "Read the latest wedding trends and tips" },
        { name: "Wedding Ideas", icon: <Lightbulb size={14} />, url: "/ideas", description: "Discover creative ideas for your wedding" },
        { name: "Trending", icon: <TrendingUp size={14} />, url: "/ideas/trending", description: "See what's popular in weddings right now" },
      ],
    },
    {
      title: "About Us",
      icon: <Users size={16} />,
      description: "Learn more about Saadi Ride and our mission.",
      links: [
        { name: "Our Story", url: "/about/our-story", description: "Learn about how Saadi Ride started" },
        { name: "Meet Our Team", url: "/about/our-team", description: "Get to know the people behind Saadi Ride" },
        { name: "Mission & Vision", url: "/about/mission-vision", description: "Our goals and values for transforming weddings" },
        { name: "Contact Us", url: "/about/contact", description: "Get in touch with our team" },
        { name: "Terms & Privacy", url: "/about/terms-privacy", description: "Our policies and terms of service" },
      ],
    },
  ];

  return (
    <footer className="bg-wedding-navy text-white pt-6 sm:pt-8 lg:pt-12 pb-4 sm:pb-6">
      <div className="wedding-container">
        {/* 24/7 Support Section */}
        <div className="bg-gradient-to-r from-wedding-pink/10 to-wedding-navy/20 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-wedding-pink/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <Headphones className="h-5 w-5 sm:h-6 sm:w-6 text-wedding-pink" />
                <h3 className="text-lg sm:text-xl font-semibold">24/7 Support Available</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Need help with your wedding planning? Our support team is available around the clock to assist you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto">
              <Button
                onClick={handleWhatsAppSupport}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 touch-target text-sm sm:text-base"
              >
                <MessageCircle size={16} />
                WhatsApp Support
              </Button>
              <Button
                variant="outline"
                className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink hover:text-white flex items-center gap-2 touch-target text-sm sm:text-base"
                asChild
              >
                <Link to="/about/contact">
                  <Phone size={16} />
                  Call Support
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          <div className="xl:col-span-1">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-4 sm:mb-6">
              <span className="text-wedding-pink">Saadi</span> Ride
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Bihar's favorite wedding transportation and planning platform to help you plan the perfect wedding. Browse thousands of vendors, get inspiration, and plan your dream wedding with reliable transportation services.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8 justify-center md:justify-start">
              <a href="#" className="text-white hover:text-wedding-pink transition-colors touch-target">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-wedding-pink transition-colors touch-target">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-wedding-pink transition-colors touch-target">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-wedding-pink transition-colors touch-target">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-column">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                {column.icon && <span className="text-wedding-pink">{column.icon}</span>}
                <h3 className="text-base sm:text-lg font-semibold">{column.title}</h3>
              </div>
              {column.description && <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{column.description}</p>}
              <ul className="space-y-1 sm:space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.url} 
                      className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-wedding-pink transition-colors group text-xs sm:text-sm touch-target py-1"
                      title={link.description}
                    >
                      {link.icon && <span className="text-gray-400 group-hover:text-wedding-pink flex-shrink-0">{link.icon}</span>}
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bihar Cities Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-wedding-pink" />
            <h3 className="text-base sm:text-lg font-semibold">Popular Cities in Bihar</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3">
            {biharCities.map((city) => (
              <Link
                key={city.name}
                to={city.link}
                className="text-gray-300 hover:text-wedding-pink transition-colors text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 rounded hover:bg-wedding-pink/10 touch-target text-center"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-3 sm:pt-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center lg:text-left">
              © 2025 Saadi Ride. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-3 sm:space-x-4 lg:space-x-6">
              <Link to="/about/terms-privacy" className="text-gray-400 hover:text-wedding-pink text-xs sm:text-sm touch-target py-1">
                Privacy Policy
              </Link>
              <Link to="/about/terms-privacy" className="text-gray-400 hover:text-wedding-pink text-xs sm:text-sm touch-target py-1">
                Terms of Service
              </Link>
              <Link to="/about/terms-privacy" className="text-gray-400 hover:text-wedding-pink text-xs sm:text-sm touch-target py-1">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
