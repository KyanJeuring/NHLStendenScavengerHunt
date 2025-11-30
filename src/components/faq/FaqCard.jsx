import React from 'react'
import './faqCard.css'

export default function FaqCard({ question, answer }) {
    return (
        <div className='faq-card'>
            <p>{question}</p>
            <p>{answer}</p>
        </div>
    )
}