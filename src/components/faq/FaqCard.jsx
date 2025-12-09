import React from 'react'
import './faqCard.css'

export default function FaqCard({ question, answer }) {
    const [showAnswer, setShowAnswer] = React.useState(false)
    const answerId = React.useId()

    const toggle = () => setShowAnswer((current) => !current)

    return (
        <div className='faq-card'>
            <p className='faq-question'>{question}</p>
            <div
                className={`faq-answer${showAnswer ? ' open' : ''}`}
                id={answerId}
                aria-hidden={!showAnswer}
            >
                <div className='faq-answer-inner'>
                    <p>{answer}</p>
                </div>
            </div>
            <button type='button' className='faq-toggle' aria-expanded={showAnswer} aria-controls={answerId} onClick={toggle}>
                {showAnswer ? 'Hide answer' : 'View answer'}
            </button>
        </div>
    )
}