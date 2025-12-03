import React from "react";
import "./letsgonav.css";
import { useNavigate } from 'react-router-dom';

export default function LetsgoNav({ src, location, description, link }) {
    const navigate = useNavigate();

    return (
        <article className="letsgonav-container">
            <div 
                className="letsgonav-block" 
                onClick={() => navigate(link)}
            > 
                <section className="letsgonav-info">
                    <figure className="letsgonav-icon-wrapper">
                        <div className="letsgonav-icon-bg">
                            <img 
                                src={src}
                                alt={location}
                                className="letsgonav-icon"
                            />  
                        </div>
                    </figure>

                    <header className="letsgonav-text">
                        <h3>{location}</h3>
                        <p>{description}</p>
                    </header>
                </section>

                <img 
                    src="/icons/nextPageArrow.svg" 
                    alt="Navigate"
                    className="letsgonav-arrow" 
                />
            </div>
        </article>
    );
}
