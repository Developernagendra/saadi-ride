
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Headset, LifeBuoy, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";

const SupportForm = ({ 
  onSubmit 
}: { 
  onSubmit: (e: React.FormEvent) => void 
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form onSubmit={(e) => {
      onSubmit(e);
      setName("");
      setEmail("");
      setMessage("");
    }}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            className="min-h-[100px]"
            required
          />
        </div>
      </div>
      <DialogFooter className="sm:justify-end flex flex-col gap-2">
        <Button type="submit" className="bg-wedding-pink hover:bg-wedding-pink/90 w-full sm:w-auto">
          Send via WhatsApp
        </Button>
      </DialogFooter>
    </form>
  );
};

const SupportButton = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Send support request via WhatsApp
    sendWhatsAppMessage({
      type: 'support',
      customerName: name,
      customerEmail: email,
      message: message
    });
    
    toast({
      title: "Support request sent via WhatsApp!",
      description: "We'll get back to you as soon as possible.",
      duration: 3000,
    });
    
    // Close both dialog and drawer
    setOpen(false);
    setDrawerOpen(false);
  };

  const handleDirectWhatsApp = () => {
    sendWhatsAppMessage({
      type: 'support',
      message: 'Hi! I need help with wedding planning services. Please contact me.'
    });
    
    toast({
      title: "Opening WhatsApp...",
      description: "Connect with our support team directly.",
      duration: 3000,
    });
  };

  return (
    <>
      {isMobile ? (
        // Mobile version - use drawer
        <div className="fixed bottom-4 left-4 flex flex-col gap-2 z-50">
          <Button
            onClick={handleDirectWhatsApp}
            className="rounded-full flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-lg px-4 py-2"
            size="sm"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
          
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                className="rounded-full flex items-center gap-2 bg-wedding-navy hover:bg-wedding-navy/90 shadow-lg px-4 py-2"
                size="sm"
              >
                <Headset className="h-4 w-4" /> Support
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-4 pb-6">
              <DrawerHeader className="text-center pt-4">
                <DrawerTitle className="text-xl font-heading">24/7 Support</DrawerTitle>
                <DrawerDescription>
                  Our support team is available 24/7 to help with any questions or issues.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4">
                <SupportForm onSubmit={handleSubmit} />
              </div>
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      ) : (
        // Desktop version - use dialog
        <div className="fixed bottom-4 left-8 flex gap-3 z-50">
          <Button
            onClick={handleDirectWhatsApp}
            className="rounded-full flex items-center gap-2 bg-green-500 hover:bg-green-600 shadow-lg"
          >
            <MessageCircle size={18} /> WhatsApp Support
          </Button>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="rounded-full flex items-center gap-2 bg-wedding-navy hover:bg-wedding-navy/90 shadow-lg"
              >
                <LifeBuoy size={18} /> 24/7 Support
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>24/7 Support</DialogTitle>
                <DialogDescription>
                  Our support team is available 24/7 to help with any questions or issues.
                </DialogDescription>
              </DialogHeader>
              <SupportForm onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default SupportButton;
