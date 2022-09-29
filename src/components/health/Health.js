
import Card from '../card/card';
import './Health.css'
const Health = (props) => {
    const { img, name, text, time, age } = props.health
    const { handelAddToCard } = props

    return (
        <div className='health-container'>

            <img className='w-100' src={img} alt="" />

            <div className='card-info'>
                <h4>{name}</h4>
                <p>{text}</p>
                <h5>For Age:{age}</h5>
                <h5>Time Required:{time} Min</h5>
            </div>

            <button onClick={() => handelAddToCard(time)} className='btn-handler w-100'>Add to list</button>

        </div>
    );
};

export default Health;
