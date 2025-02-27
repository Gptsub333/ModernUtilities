"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contactus() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!");
    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contactus" className="container py-24 sm:py-32 space-y-8">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl space-y-10"> {/* Increased width here */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
              Contact <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Us</span>
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
              Get in touch with us. We'll get back to you as soon as possible.
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                required
                className="bg-muted/50 dark:bg-muted/80"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-muted/50 dark:bg-muted/80"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Subject"
                required
                className="bg-muted/50 dark:bg-muted/80"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                required
                className="min-h-[120px] bg-muted/50 dark:bg-muted/80"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
