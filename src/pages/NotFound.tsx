
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-wedding-pink/5 to-wedding-navy/5 px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Wedding-themed icon */}
        <div className="mb-8">
          <Heart className="h-16 w-16 sm:h-20 sm:w-20 text-wedding-pink mx-auto mb-4" />
          <div className="text-6xl sm:text-8xl font-heading font-bold text-wedding-navy mb-2">404</div>
        </div>
        
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-wedding-navy mb-3">
          Oops! This page got lost at the wedding
        </h1>
        
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
          The page you're looking for might have been moved, deleted, or doesn't exist. 
          Let's get you back to planning your perfect wedding!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            asChild
            className="bg-wedding-pink hover:bg-wedding-pink/90 text-white px-6 py-3"
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10 px-6 py-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 mb-3">
            Need help? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
            <Link to="/vendors" className="text-wedding-pink hover:underline">
              Find Vendors
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/ideas" className="text-wedding-pink hover:underline">
              Wedding Ideas
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/blog" className="text-wedding-pink hover:underline">
              Wedding Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/planning-tools" className="text-wedding-pink hover:underline">
              Planning Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
