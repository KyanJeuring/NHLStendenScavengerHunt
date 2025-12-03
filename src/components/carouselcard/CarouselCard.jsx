import React from "react"
import { useState } from "react"
import './carouselcard.css'


export default function CarouselCard({title, description}){
    return(
        <section className="carousel-card">
            <section className="carousel-top-descption">
                <p>{title}</p>
            </section>
            <section className="carousel-main-information">
                <p>{description}</p>
            </section>
        </section>
    )
}