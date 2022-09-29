import React, { useEffect, useState } from 'react';
import Health from '../health/Health';
import './card.css';

const Card = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])


    return (
        <div className='card-container'>
            <div className="exercise-container container">
                <h2 className='text-primary'>All Exercise Activities Here ...</h2>
                <h5>Select today’s exercise</h5>

                <div className='activities-container'>
                    {
                        cards.map(card => <Health health={card}></Health>)
                    }
                </div>
                {/* {
                    cards.map(card => <Health name={card.name} img={card.img} key={card.id}></Health>)
                } */}
            </div>

            <div className="activities-details">
                <h3>this is details card</h3>
            </div>
        </div>
    );
};

export default Card;