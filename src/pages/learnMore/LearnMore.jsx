import React from 'react';
import './learnMore.css';
import LetsgoNav from '../../components/letsgonav/LetsgoNav';

export default function LearnMore() {
    return (
        <section className='learn-more-container'>
            <header className="learn-more-page">
                <div className="learn-more-header">
                    <h2 className="tagline">Learn more about...</h2>
                    <img src="/pixels/learn-more-svg-combination.svg" alt="NHL Stenden pixels combination" className="white-waves"/>
                </div>
            </header>
            <main className='learn-more-links'>
                <LetsgoNav  
                    src="/icons/games-logo.svg" 
                    location="Give your mind a break" 
                    description="Play chess, ping pong or table football." 
                    link="/timeToRelax"
                />

                <LetsgoNav  
                    src="/icons/camera-equipment.svg" 
                    location="Need technical equipment?" 
                    description="Cameras, microphones, tripods & more." 
                    link="/studentInfoEquipment"
                />

                <LetsgoNav  
                    src="/icons/emergency-icon.svg" 
                    location="🚨Emergency🚨" 
                    description="What to do when you hear a slow whoop sound?" 
                    link="/emergencyProcedures"
                />

                <LetsgoNav  
                    src="/icons/store-icon.svg" 
                    location="Campus Store" 
                    description="You can buy some office supplies without leaving the building." 
                    link="/silentPhoneBooths"
                />

                <LetsgoNav  
                    src="/icons/rules-icon.svg" 
                    location="Rules" 
                    description="Read more about the rules on campus." 
                    link="/rules"
                />

                <LetsgoNav  
                    src="/icons/studying-abroad-icon.svg" 
                    location="Studying Abroad" 
                    description="Discover opportunities to study in different countries." 
                    link="/studyingAbroad"
                />

                <LetsgoNav  
                    src="/icons/restaurant-icon.svg" 
                    location="Stones Restaurant" 
                    description="Visit a restaurant which is ran by students." 
                    link="/stonesRestaurant"
                />

                <LetsgoNav  
                    src="/icons/lockers-icon.svg" 
                    location="Lockers" 
                    description="Leave your staff in a secure place." 
                    link="/lockers"
                />

                <LetsgoNav  
                    src="/icons/studying-icon.svg" 
                    location="Overview of all courses" 
                    description="Discover all the courses offered at NHL Stenden." 
                    link="/coursesOverview"
                />
            </main>
        </section>
    );
}