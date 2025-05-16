
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    {
      id: 4,
      name: "Divya & Karan",
      location: "Jaipur",
      quote: "The budget planner saved us so much stress! We were able to track our expenses and make informed decisions. Our dream wedding came to life thanks to WedMeGood!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 5,
      name: "Shreya & Nikhil",
      location: "Chennai",
      quote: "We found our photographer through WedMeGood and couldn't be happier with the results. The platform made it easy to compare options and find vendors that matched our style.",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 6,
      name: "Aditi & Rajan",
      location: "Kolkata",
      quote: "The wedding planning tools helped us stay organized from day one. The guest list manager was particularly helpful for our large wedding. Thank you WedMeGood!",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 7,
      name: "Sonia & Varun",
      location: "Hyderabad",
      quote: "We were able to plan our destination wedding with such ease thanks to WedMeGood. The vendor recommendations were spot on for our budget and preferences.",
      image: "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <section className="py-16 bg-wedding-cream">
      <div className="wedding-container">
        <h2 className="section-title">Happy Couples</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from couples who found their perfect wedding vendors through our platform
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto px-4"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/3 lg:basis-1/3">
                <Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
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
                    
                    <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
