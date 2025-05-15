
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "@/components/ui/sonner";

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
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
    
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, this would make an API call
      // For now, we'll simulate a successful login if the email contains "@"
      // and the password is at least 6 characters
      
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        setIsLoading(false);
        return false;
      }
      
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        setIsLoading(false);
        return false;
      }
      
      // Create a mock user (in a real app, this would come from the backend)
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name: email.split("@")[0]
      };
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      toast.success("Login successful!");
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
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Validation
      if (!email.includes("@")) {
        toast.error("Please enter a valid email address");
        setIsLoading(false);
        return false;
      }
      
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        setIsLoading(false);
        return false;
      }
      
      if (name.length < 2) {
        toast.error("Please enter your name");
        setIsLoading(false);
        return false;
      }
      
      // Create a new user
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name
      };
      
      // Save user to localStorage
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      
      toast.success("Account created successfully!");
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
    localStorage.removeItem("user");
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
