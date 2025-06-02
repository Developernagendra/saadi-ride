
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";

interface AuthDialogProps {
  type?: "login" | "signup";
  trigger?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSuccess?: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ 
  type = "login", 
  trigger, 
  className,
  isOpen: controlledOpen,
  onOpenChange,
  onSuccess
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [formType, setFormType] = useState<"login" | "signup">(type);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
    
    // Reset to default form after dialog closes
    if (!newOpen) {
      setTimeout(() => {
        setFormType(type);
      }, 200);
    }
  };

  const toggleFormType = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  const handleSuccess = () => {
    handleOpenChange(false);
    onSuccess?.();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="outline"
            className={`${className} border-wedding-pink text-wedding-pink hover:bg-wedding-pink/10`}
          >
            {type === "login" ? "Login" : "Sign Up"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {formType === "login" ? (
          <LoginForm 
            onToggleForm={toggleFormType} 
            onCloseDialog={handleSuccess} 
          />
        ) : (
          <SignupForm 
            onToggleForm={toggleFormType} 
            onCloseDialog={handleSuccess} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
