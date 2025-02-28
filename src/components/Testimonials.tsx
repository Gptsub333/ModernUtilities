import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import user1 from '../assets/user1.jpeg';
import user2 from '../assets/user2.jpeg';
import user3 from '../assets/user3.jpeg';
import user4 from '../assets/user4.jpeg';
import user5 from '../assets/user5.jpeg';
import user6 from '../assets/user6.jpeg';
import user7 from '../assets/user7.jpeg';
import user8 from '../assets/user8.jpeg';
import user9 from '../assets/user9.jpeg';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: user1,
    name: "Brite Ang3l",
    userName: "customer",
    comment:
      "Best place in Las Vegas to get Internet phone or cable TV service. I highly recommend speaking with Milan or Tom. Veteran-owned and operated small business, so I love supporting our soldiers.",
  },
  {
    image: user2,
    name: "Preston Howard",
    userName: "customer",
    comment:
      "Milan is a great employee and very helpful. He was able to assist me with everything I needed. Also, the lady that also assisted was an amazing service provider. Thank you so much, and I highly recommend their service.",
  },
  {
    image: user3,
    name: "Harland Lee",
    userName: "customer",
    comment:
      "These guys are the best in the business, I promise you. They have ALL providers at the same location. Ask for Milan or Thom. They have been in the business since the internet was invented. They know so much, it is unreal.",
  },
  {
    image: user4,
    name: "Tae Wells",
    userName: "customer",
    comment:
      "Milan is the Best. He’s the 3Cs and the 3Ts: cool, calm, collective and on time, task, and target. He gets the job done. I never really experienced GREAT CUSTOMER SERVICE until I met him. Highly recommended.",
  },
  {
    image: user8,
    name: "Scotavo Agostino",
    userName: "customer",
    comment:
      "I lost my internet service due to a thunderstorm. I called Modern Utilities, and they were very helpful, especially Milan. I was up and running with a new system in no time. Excellent customer service.",
  },
  {
    image: user9,
    name: "Marcos Delucas",
    userName: "customer",
    comment:
      "I live in Maryland and needed an internet service solution for my home and my business. I know this company is based in Las Vegas, but they are licensed in all 50 states. I saw their YouTube videos and was inclined to try.",
  },
  {
    image: user5,
    name: "Albert Avila",
    userName: "customer",
    comment:
      "Modern Utilities is where you want to bring your business. Nothing but professionalism and dedication from Milan. I came with questions, and he provided excellent service that exceeded expectations.",
  },
  {
    image: user6,
    name: "S C",
    userName: "customer",
    comment:
      "Milan is amazing! He did an excellent job explaining everything to my elderly mother, who is not tech-savvy. I would not hesitate to recommend this place to anyone.",
  },
  {
    image: user7,
    name: "Ryn",
    userName: "customer",
    comment:
      "Milan was awesome. I had a situation, and he took care of it in minutes. The modem I got worked perfectly. I will go through him from now on for all my CenturyLink needs and issues.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
  <h2 className="text-3xl md:text-4xl font-bold text-center">
    Discover Why
    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
      {" "}
      People Love{" "}
    </span>
    Us
  </h2>

  <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
    Don't take our word for it. Google Modern Utilities in Las Vegas and see
    almost 20 years of 5-star reviews.
  </p>

  {/* Swiper Carousel */}
  <div className="relative">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full px-6"
    >
      {testimonials.map(({ image, name, userName, comment }, index) => (
        <SwiperSlide key={index} className="h-full">
          <Card className="h-full flex flex-col justify-between max-w-md mx-auto overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt={name} src={image} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            {/* Ensuring uniform height and preventing long content from breaking layout */}
            <CardContent className="flex-grow min-h-[150px] max-h-[200px] overflow-auto text-gray-700 dark:text-gray-300">
              {comment}
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination */}
    <div className="swiper-pagination mt-12"></div>
  </div>
</section>

  );
};
