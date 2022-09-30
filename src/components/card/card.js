import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Health from '../health/Health';
import './card.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {

    const [cards, setCards] = useState([]);

    const [healths, setHealths] = useState([]);

    const [breaks, setBreaks] = useState([]);


    let total = 0;
    for (const health of healths) {
        total = total + health.time;
    }


    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    // exercise time handler -------
    const handelAddToCard = (health) => {
        const newHealth = [...healths, health];
        setHealths(newHealth)

    }

    // break time handler -------
    const handleBreakTime = (event) => {

        const time = event.target.innerText;
        setBreaks(time);
    }
    const notify = () => toast("Wow So Easy! and, i can do this");


    return (
        <div className='card-container'>
            <div className="exercise-container container">
                <h2 className='text-primary'> <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> All Exercise Activities Here ...</h2>
                <h5>Select today’s exercise</h5>


                <div className='activities-container'>
                    {
                        cards.map(card => <Health health={card} key={card.id} handelAddToCard={handelAddToCard}></Health>)
                    }
                </div>

            </div>

            <div className="activities-details  ">
                <div className='container'>
                    <ToastContainer></ToastContainer>
                    <div>
                        {/* <img src={require('../card../')}> */}
                        {/* <img src="../card../src/" alt="" /> */}
                        <h4>Aminul Haque </h4>
                        <p>Nabiganj,Habiganj,Sylhet</p>
                    </div>
                    <div className='personal-info '>
                        <div>
                            <strong className='sizing-info'>70</strong><small>kg</small>
                            <p>weight</p>
                        </div>
                        <div>
                            <strong className='sizing-info'>5.7</strong>
                            <p>height</p>
                        </div>
                        <div>
                            <strong className='sizing-info'>24</strong><span>yrs</span>
                            <p>age</p>
                        </div>
                    </div>

                    <div>
                        <h5>Add A Break</h5>
                        <div className='btn-secDiv'>
                            <button className='btn-secHandler bg-primary '><span onClick={(event) => handleBreakTime(event)} className='sizing-scnd'>10</span>m</button>

                            <button className='btn-secHandler bg-primary'><span onClick={(event) => handleBreakTime(event)} className='sizing-scnd'>20</span>m</button>

                            <button className='btn-secHandler bg-primary'><span onClick={(event) => handleBreakTime(event)} className='sizing-scnd'>30</span>m</button>

                            <button className='btn-secHandler bg-primary'><span onClick={(event) => handleBreakTime(event)} className='sizing-scnd'>40</span>m</button>

                            {/* <button className='btn-secHandler'>50s</button> */}
                        </div>
                    </div>

                    <div>
                        <h4>Exercise Details</h4>
                        <div className='details'>
                            <h5>Exercise time:</h5>
                            <strong>{total} <span>Minutes</span></strong>

                        </div>
                        <div className='details'>
                            <h5 >Break time:</h5>
                            <strong>{breaks} <span>Minutes</span></strong>

                        </div>
                    </div>

                    <button onClick={notify} className='btn-toast w-100 bg-primary'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Card;