"use client";

import { useState, useEffect } from "react";
import { Music, Users, Headphones } from "lucide-react";

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    { icon: Music, text: "Create your own music room" },
    { icon: Users, text: "Join friends in their rooms" },
    { icon: Headphones, text: "Listen together in real-time" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8 -mt-28">
      <div className="relative size-52 mb-8">
        <div className="absolute inset-0 bg-primary opacity-20 rounded-full animate-pulse-custom"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {features.map((feature, index) => (
            <feature.icon
              key={index}
              className={`absolute size-24 transition-all duration-500 ease-in-out ${
                index === currentFeature
                  ? "opacity-100 scale-100 animate-float"
                  : "opacity-0 scale-75"
              }`}
              stroke="rgb(var(--color-primary))"
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4 text-foreground animate-slide-in">
        Welcome to SyncPlay
      </h1>
      <p
        key={currentFeature}
        className="text-lg text-center mb-8 text-muted max-w-md animate-fade-in-blur"
      >
        {features[currentFeature].text}
      </p>
      <div
        className="flex flex-col gap-4 w-full max-w-xs animate-slide-in"
        style={{ animationDelay: "0.4s" }}
      >
        <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Create a room
        </button>
        <button className="bg-background hover:bg-accent hover:bg-black/10 text-primary font-semibold py-3 px-6 border border-primary rounded-full transition-all duration-300 hover:scale-105">
          Join a room
        </button>
      </div>
    </section>
  );
};

export default Hero;
