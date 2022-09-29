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
                <h2>Outdoors Morning Exercises ...</h2>
                <p>Select today’s exercise</p>

                {
                    cards.map(card => <Health name={card.name} img={card.img}></Health>)
                }




            </div>

            <div className="activities-details">
                <h3>this is details card</h3>
            </div>
        </div>
    );
};

export default Card;