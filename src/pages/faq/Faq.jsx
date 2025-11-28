import React from 'react'
import './faq.css'
import FaqCard from '../..//components/faq/FaqCard'

export default function Faq() {
    return (
        <>
            <section className="page-title">
                <h1>Frequently Asked Questions</h1>
                <h2>Search by topic</h2>
            </section>
            <section className="faq-cards">
                <FaqCard question="What is NHL Stenden?" answer="NHL Stenden is a university of applied sciences in the Netherlands." />
                <FaqCard question="How can I apply?" answer="You can apply through our online application portal." />
                <FaqCard question="What courses are offered?" answer="We offer a variety of courses in different fields of study." />
                <FaqCard question="Where is the campus located?" answer="Our main campus is located in Leeuwarden." />
                <FaqCard question="What are the tuition fees?" answer="Tuition fees vary depending on the program." />
                <FaqCard question="Are there scholarships available?" answer="Yes, we offer several scholarships for eligible students." />
            </section>
        </>
    )
}
