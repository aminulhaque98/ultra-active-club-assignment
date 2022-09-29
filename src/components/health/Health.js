import React, { useEffect, useState } from 'react';
import Card from '../card/card';

const Health = () => {
    const [healths, setHealths] = useState([]);

    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setHealths(data))
    }, [])

    return (
        <div>
            <h5>another components</h5>

            {
                healths.map(health => <Card name={health.name} img={health.img}></Card>)
            }
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