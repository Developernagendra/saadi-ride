
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Rohit",
      location: "Delhi",
      quote: "ShaadiShaati made our wedding planning journey so easy! We found our dream venue and photographer through the platform, and the checklist tool kept us on track throughout the process.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      name: "Ananya & Vikram",
      location: "Mumbai",
      quote: "I can't thank ShaadiShaati enough for helping us find incredible vendors within our budget. The platform has everything couples need to plan their wedding from start to finish!",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      name: "Meera & Arjun",
      location: "Bangalore",
      quote: "From finding our perfect venues to discovering talented photographers and makeup artists, ShaadiShaati was our wedding planning companion every step of the way!",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 4,
      name: "Divya & Karan",
      location: "Jaipur",
      quote: "The budget planner saved us so much stress! We were able to track our expenses and make informed decisions. Our dream wedding came to life thanks to ShaadiShaati!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 5,
      name: "Shreya & Nikhil",
      location: "Chennai",
      quote: "We found our photographer through ShaadiShaati and couldn't be happier with the results. The platform made it easy to compare options and find vendors that matched our style.",
      image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 6,
      name: "Aditi & Rajan",
      location: "Kolkata",
      quote: "The wedding planning tools helped us stay organized from day one. The guest list manager was particularly helpful for our large wedding. Thank you ShaadiShaati!",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 7,
      name: "Sonia & Varun",
      location: "Hyderabad",
      quote: "We were able to plan our destination wedding with such ease thanks to ShaadiShaati. The vendor recommendations were spot on for our budget and preferences.",
      image: "https://images.unsplash.com/photo-1520473378652-85d9c4aee6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <section className="py-8 xs:py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      <div className="wedding-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Happy Couples</h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto px-4 text-sm xs:text-base sm:text-lg">
            Hear from couples who found their perfect wedding vendors through our platform
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full max-w-5xl mx-auto px-2 xs:px-4"
        >
          <CarouselContent className="-ml-2 xs:-ml-3 sm:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 xs:pl-3 sm:pl-4 basis-[85%] xs:basis-[75%] sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-md hover:shadow-xl active:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-[0.98] h-full border border-gray-100 touch-manipulation">
                    <CardContent className="p-4 xs:p-5 sm:p-6 text-center h-full flex flex-col">
                      <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden ring-4 ring-wedding-pink/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm xs:text-base sm:text-xl font-semibold mb-1 text-wedding-navy">{testimonial.name}</h3>
                      <p className="text-gray-500 text-xs xs:text-sm mb-2 sm:mb-4">{testimonial.location}</p>
                      
                      <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-4 text-wedding-pink opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <p className="text-gray-700 italic flex-grow text-xs xs:text-sm sm:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 sm:mt-8 gap-3">
            <CarouselPrevious className="static transform-none h-10 w-10 sm:h-12 sm:w-12 touch-target" />
            <CarouselNext className="static transform-none h-10 w-10 sm:h-12 sm:w-12 touch-target" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
