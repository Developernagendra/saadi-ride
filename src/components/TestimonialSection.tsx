
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rohit",
      location: "Delhi",
      quote: "WedMeGood made our wedding planning journey so easy! We found our dream venue and photographer through the platform, and the checklist tool kept us on track throughout the process.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Ananya & Vikram",
      location: "Mumbai",
      quote: "I can't thank WedMeGood enough for helping us find incredible vendors within our budget. The platform has everything couples need to plan their wedding from start to finish!",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      name: "Meera & Arjun",
      location: "Bangalore",
      quote: "From finding our perfect venues to discovering talented photographers and makeup artists, WedMeGood was our wedding planning companion every step of the way!",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <section className="py-16 bg-wedding-cream">
      <div className="wedding-container">
        <h2 className="section-title">Happy Couples</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from couples who found their perfect wedding vendors through our platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{testimonial.location}</p>
                
                <svg className="w-10 h-10 mx-auto mb-4 text-wedding-pink opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
