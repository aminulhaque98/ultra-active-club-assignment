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
                <div className='container'>
                    <div>
                        <img src="" alt="" />
                        <h4>Aminul Haque </h4>
                        <p>location</p>
                    </div>
                    <div className='personal-info '>
                        <div>
                            <strong>70</strong><small >kg</small>
                            <p>weight</p>
                        </div>
                        <div>
                            <strong>5.7</strong>
                            <p>height</p>
                        </div>
                        <div>
                            <strong>24</strong><span>yrs</span>
                            <p>age</p>
                        </div>
                    </div>

                    <div>
                        <h5>Add A Break</h5>
                        <div className='btn-secDiv'>
                            <button className='btn-secHandler bg-primary '><span>10</span>m</button>
                            <button className='btn-secHandler bg-primary'><span>20</span>m</button>
                            <button className='btn-secHandler bg-primary'><span>30</span>m</button>
                            <button className='btn-secHandler bg-primary'><span>40</span>m</button>
                            {/* <button className='btn-secHandler'>50s</button> */}
                        </div>
                    </div>

                    <div>
                        <h4>Exercise Details</h4>
                        <div className='details'>
                            <h5>Exercise time:</h5>
                            <span>Minutes</span>



                        </div>
                        <div className='details'>
                            <h5 >Break time:</h5>
                            <span>Minutes</span>

                        </div>
                    </div>

                    <button className='btn-toast w-100 bg-primary'>Break time</button>
                </div>
            </div>
        </div>
    );
};

export default Card;