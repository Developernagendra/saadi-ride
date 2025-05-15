
import React, { useState } from "react";
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
}

const AuthDialog: React.FC<AuthDialogProps> = ({ 
  type = "login", 
  trigger, 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState<"login" | "signup">(type);

  const toggleFormType = () => {
    setFormType(formType === "login" ? "signup" : "login");
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset to default form after dialog closes
    setTimeout(() => {
      setFormType(type);
    }, 200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
          <LoginForm onToggleForm={toggleFormType} onCloseDialog={handleClose} />
        ) : (
          <SignupForm onToggleForm={toggleFormType} onCloseDialog={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
