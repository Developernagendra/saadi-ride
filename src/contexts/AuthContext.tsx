
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

// Define user interface
interface User {
  id: string;
  email: string;
  name: string;
}

// Define context interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("shaadiSaathi_user");
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log("Found stored user:", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem("shaadiSaathi_user");
      }
    }
    
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      console.log("Attempting login for:", email);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        return false;
      }
      
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
      }
      
      // Create a mock user (in a real app, this would come from the backend)
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
      };
      
      // Save user to localStorage with app-specific key
      localStorage.setItem("shaadiSaathi_user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      console.log("Login successful:", mockUser);
      toast.success("Welcome back to ShaadiSaathi!");
      return true;
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Signup function
  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      console.log("Attempting signup for:", email);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Validation
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        return false;
      }
      
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
      }
      
      if (name.length < 2) {
        toast.error("Please enter your name");
        return false;
      }
      
      // Create a new user
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name
      };
      
      // Save user to localStorage with app-specific key
      localStorage.setItem("shaadiSaathi_user", JSON.stringify(newUser));
      setUser(newUser);
      
      console.log("Signup successful:", newUser);
      toast.success("Welcome to ShaadiSaathi! Your account has been created.");
      return true;
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Signup error:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    console.log("Logging out user:", user?.email);
    localStorage.removeItem("shaadiSaathi_user");
    setUser(null);
    toast.success("You've been logged out successfully");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
