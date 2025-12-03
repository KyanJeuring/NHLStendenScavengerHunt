import React from "react";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

import CarouselCard from "../carouselcard/CarouselCard";
import "./carousel.css";

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 2,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 3,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
    {
      id: 4,
      title: "Need a break? Clear your head in our legendary Disco Toilet!",
      description:
        "Step into a flash of lights, colors, and music - because even your bathroom break should be an experience at NHL Stenden.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="carousel-container">
  <button className="side-btn left" onClick={prev}>‹</button>

  <div className="carousel-window">
    <AnimatePresence mode="wait">
      <motion.div
        key={items[index].id}
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -120 }}
        transition={{ duration: 0.35 }}
      >
        <CarouselCard
          title={items[index].title}
          description={items[index].description}
        />
      </motion.div>
    </AnimatePresence>
  </div>

  <button className="side-btn right" onClick={next}>›</button>
</div>

  );
}
