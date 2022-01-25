import React from 'react';
import { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Giant from '../Giant/Giant';
import './Giants.css';


const Giants = () => {
    const [leaders, setLeaders] = useState([]);
    const [carts, setCarts] = useState([])

    useEffect(()=> {
    fetch('./tech_giants.JSON')
    .then(res => res.json())
    .then(data => setLeaders(data))
    }, [])
    
    const handleAddToCart = giantInfo => {
        const newGiantInfo = [...carts, giantInfo];
        setCarts(newGiantInfo)
    }
    

    return (
        <div>
           <div className='container'>
                {/* tech leaders container */}
                <div className='giants-container'>
                   {
                       leaders.map(leader => <Giant key={leader.key} leader={leader} handleAddToCart={handleAddToCart}></Giant>)
                   }
                </div>
                {/* tech leaders cart container */}
                <div className='cart-container'>
                   <Cart carts={carts}></Cart>
                </div>
           </div>
        </div>
    );
};

export default Giants;