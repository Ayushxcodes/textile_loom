"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/base/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    review:
      "Level Up Labs transformed my career! The structured learning path and hands-on projects helped me land my dream job as a Full Stack Developer. The community support is incredible.",
    studentName: "Sarah Johnson",
    course: "Full Stack Development",
    avatar: "SJ",
    avatarUrl: "https://github.com/sarahjohnson.png",
    rating: 5,
  },
  {
    id: 2,
    review:
      "I've tried many platforms, but Level Up Labs stands out. The AI & ML course was comprehensive and practical. I'm now working on real-world ML projects at my company.",
    studentName: "Michael Chen",
    course: "AI & Machine Learning",
    avatar: "MC",
    avatarUrl: "https://github.com/michaelchen.png",
    rating: 5,
  },
  {
    id: 3,
    review:
      "The DevOps course exceeded my expectations. The instructors are knowledgeable and the curriculum is up-to-date with industry standards. Highly recommended!",
    studentName: "David Rodriguez",
    course: "DevOps",
    avatar: "DR",
    avatarUrl: "https://github.com/davidrodriguez.png",
    rating: 5,
  },
  {
    id: 4,
    review:
      "As a beginner, I was intimidated by web development. Level Up Labs made it accessible and fun. The step-by-step approach and mentor support made all the difference.",
    studentName: "Emily Williams",
    course: "Web Development",
    avatar: "EW",
    avatarUrl: "https://github.com/emilywilliams.png",
    rating: 5,
  },
  {
    id: 5,
    review:
      "The mobile development course is top-notch! I built my first app within weeks and published it to the App Store. The practical approach is what sets Level Up Labs apart.",
    studentName: "James Anderson",
    course: "Mobile Development",
    avatar: "JA",
    avatarUrl: "https://github.com/jamesanderson.png",
    rating: 5,
  },
  {
    id: 6,
    review:
      "Level Up Labs helped me transition from backend to full-stack development seamlessly. The courses are well-structured and the projects are challenging yet achievable.",
    studentName: "Lisa Thompson",
    course: "Full Stack Development",
    avatar: "LT",
    avatarUrl: "https://github.com/lisathompson.png",
    rating: 5,
  },
];

export default function Testimonial() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 md:gap-12"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight">
              What Learners Saying <br />
              About <span className="text-primary">Level Up Labs</span>
            </h2>
          </div>

          {/* Carousel */}
          <div className="w-full max-w-5xl">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <Card
                      className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                      style={{ backgroundColor: "#F8F8F8" }}
                    >
                      <CardContent className="pt-6 pb-6 flex flex-col flex-1">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <QuotesIcon
                            className="size-8 text-primary opacity-50"
                            weight="fill"
                          />
                        </div>

                        {/* Review Text */}
                        <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed flex-1">
                          {testimonial.review}
                        </p>

                        {/* Student Info - at bottom */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                          <Avatar className="size-10">
                            <AvatarImage
                              src={`https://i.pravatar.cc/150?img=${testimonial.id}`}
                              alt={testimonial.studentName}
                            />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold font-space-grotesk text-foreground text-sm md:text-base">
                              {testimonial.studentName}
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground truncate">
                              {testimonial.course}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-3 mt-8">
                <CarouselPrevious
                  variant="outline"
                  className="static translate-x-0 translate-y-0 left-0 top-0 right-0 bottom-0 rounded-full border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40"
                />
                <CarouselNext
                  variant="default"
                  className="static translate-x-0 translate-y-0 left-0 top-0 right-0 bottom-0 rounded-full bg-primary text-primary-foreground border-0 hover:bg-primary/90"
                />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
