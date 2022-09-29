
import './card.css';

const Card = (props) => {

    return (
        <div className='card-container'>
            <div className="exercise-container container">
                <h2>Outdoors Morning Exercises ...</h2>
                <p>Select today’s exercise</p>

                <h4>Name:{props.name}</h4>
                <img src={props.img} alt="" />
            </div>

            <div className="activities-details">
                <h3>this is details card</h3>
            </div>
        </div>
    );
};

export default Card;