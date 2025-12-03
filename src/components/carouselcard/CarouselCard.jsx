import React from "react";
import "./carouselcard.css";

export default function CarouselCard({ title, description }) {
  return (
    <div className="card-3d">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
