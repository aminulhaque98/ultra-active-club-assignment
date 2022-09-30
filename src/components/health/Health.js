
import './Health.css'
const Health = (props) => {
    const { handelAddToCard } = props;

    const { img, name, text, time, age } = props.health


    return (
        <div className='health-container'>

            <img className='w-100' src={img} alt="" />

            <div className='card-info'>
                <h4>{name}</h4>
                <p>{text}</p>
                <h5>For Age:{age}</h5>
                <h5>Time Required:{time} Min</h5>
            </div>

            <button onClick={() => handelAddToCard(props.health)} className='btn-handler w-100'>Add to list</button>

        </div>
    );
};

export default Health;
