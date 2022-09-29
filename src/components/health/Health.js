
import Card from '../card/card';
import './Health.css'
const Health = (props) => {
    const { img, name, text, time, age, id } = props.health

    return (
        <div className='health-container'>
            <div className='card-img'>
                <img className='w-100' src={img} alt="" />

                <div className='card-info'>
                    <h4>{name}</h4>
                    <p>{text}</p>
                    <h5>For Age:{age}</h5>
                    <h5>Time Required:{time} Min</h5>

                    <div className='btn-div'>
                        <button className='btn-hanler'>Add to list</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Health;


// import { useEffect, useState } from "react";
// import Card from "../card/card";


// const Health = () => {

//     const [healths, setHealths] = useState([]);

//     useEffect(() => {
//         fetch('health.json')
//             .then(res => res.json())
//             .then(data => setHealths(data))
//     }, [])


//     return (
//         <div>
//             <h3>anther components</h3>
//             {
//                 healths.map(health => <card health={health}></card>)
//             }
//         </div>
//     );
// };

// export default Health;