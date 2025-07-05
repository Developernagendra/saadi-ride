
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendWhatsAppMessage } from "@/utils/whatsappIntegration";
import { MessageCircle, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    
    // Send WhatsApp message with form data
    sendWhatsAppMessage({
      type: 'inquiry',
      customerName: values.name,
      customerEmail: values.email,
      customerPhone: values.phone,
      message: values.message
    });
    
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your message. We'll contact you via WhatsApp shortly.",
    });
    
    form.reset();
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-wedding-pink to-pink-600 rounded-full flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-wedding-navy">Contact Us</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        Get in touch with our wedding experts. We'll respond via WhatsApp within 30 minutes!
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-navy font-semibold">Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    className="border-2 border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink/20 rounded-lg h-12"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wedding-navy font-semibold">Email Address *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="border-2 border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink/20 rounded-lg h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wedding-navy font-semibold">Phone Number *</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="border-2 border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink/20 rounded-lg h-12"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-wedding-navy font-semibold">Your Message *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your wedding plans, preferred dates, budget, or any specific requirements..." 
                    className="min-h-[140px] border-2 border-gray-200 focus:border-wedding-pink focus:ring-wedding-pink/20 rounded-lg resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="bg-gradient-to-r from-wedding-pink to-pink-600 hover:from-wedding-pink/90 hover:to-pink-700 text-white w-full h-12 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message via WhatsApp
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted via WhatsApp for wedding planning assistance.
          </p>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
