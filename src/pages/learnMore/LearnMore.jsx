import React from 'react';
import './learnMore.css';
import LetsgoNav from '../../components/letsgonav/LetsgoNav';
import LetsgoFooter from '../../components/letsgofooter/LetsgoFooter';

export default function LearnMore() {
    return (
        <section className='learn-more-container'>
            <header className="learnMorePage">
                <div className="learnMoreHeader">
                    <img src="/logos/NHLStendenLogo_White.svg" alt="NHL Stenden Logo" className="logo_learnMore"/>
                    <h2 className="tagline">Let's go to...</h2>
                </div>
                    <img src="/pixels/learnMoreSvgCombination.svg" alt="" className="whiteWaves"/>
            </header>
            <main className='lets-go-to-links'>
                <LetsgoNav  
                    src="/icons/library_icon.svg" 
                    location="Library" 
                    description="Study resources & a quiet place." 
                    link="/library"
                />

                <LetsgoNav  
                    src="/icons/student_info_icon.svg" 
                    location="Student Info" 
                    description="Help & important information." 
                    link="/student-info"
                />

                <LetsgoNav  
                    src="/icons/canteen_icon.svg" 
                    location="Canteen" 
                    description="Food & beverages." 
                    link="/canteen"
                />

                <LetsgoNav  
                    src="/icons/parking_icon.svg" 
                    location="Parking & Bike Area" 
                    description="Vehicle & bicycle parking." 
                    link="/parking"
                />

                <LetsgoNav  
                    src="/icons/lab_icon.svg" 
                    location="MyConcept Lab" 
                    description="Step in, get hands-on, and explore the future." 
                    link="/myconcept-lab"
                />

                <LetsgoNav  
                    src="/icons/study_landscape_icon.svg" 
                    location="Study Landscape" 
                    description="Time to study!" 
                    link="/study-landscape"
                />

                <LetsgoNav  
                    src="/icons/kennispoort_icon.svg" 
                    location="Kennispoort" 
                    description="Collaboration with real companies." 
                    link="/kennispoort"
                />
            </main>
            <footer>
                  <LetsgoFooter />
            </footer>
        

        </section>
    );
}