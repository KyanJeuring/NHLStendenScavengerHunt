import React, { useState } from "react";
import CarouselCard from "../carouselcard/CarouselCard";
import "./carousel.css";

const MAX_VISIBILITY = 3;

export default function Carousel({ items }) {
  const [active, setActive] = useState(2); 
  const count = items.length;

  return (
    <div className="carousel-3d">
      {active > 0 && (
        <button
          className="nav-3d nav-3d-left"
          onClick={() => setActive((i) => i - 1)}
        >
          <span>&lt;</span>
        </button>
      )}

      {items.map((item, i) => {
        const offset = active - i;
        const absOffset = Math.abs(offset);

        if (absOffset > MAX_VISIBILITY) {return null;}

        return (
          <div
            key={i}
            className="card-3d-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": offset,
              "--abs-offset": absOffset,
            }}
          >
            <CarouselCard title={item.title} description={item.description} />
          </div>
        );
      })}

      {active < count - 1 && (
        <button
          className="nav-3d nav-3d-right"
          onClick={() => setActive((i) => i + 1)}
        >
          <span>&gt;</span>
        </button>
      )}
    </div>
  );
}
