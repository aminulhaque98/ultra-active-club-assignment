
import Card from '../card/card';

const Health = (props) => {


    return (
        <div>
            <h5>another components</h5>

            <img src={props.img} alt="" />
            <h4>Name:{props.name}</h4>
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