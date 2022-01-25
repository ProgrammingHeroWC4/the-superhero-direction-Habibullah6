import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';


const Cart = props => {
    const icon = <FontAwesomeIcon icon={faUser} />
    const iconTwo = <FontAwesomeIcon icon={faArrowRight} />
    let totalSalary = 0;
    let leaderNames  = [];

    for (const giant of props.carts) {
        const {salary, name} = giant;
        totalSalary = totalSalary + salary;
        leaderNames.push(name)
    }

    console.log(leaderNames);
    return (
        <div className='cart-details'>
            <h3>{icon}Tech_Giant added: {props.carts.length}</h3>
            <ul className='leaders-list'>
                {
                    leaderNames.map(leaderName => <li key={leaderName}>Name: {leaderName}</li>)
                }
            </ul>
            <h3>Total_Cost: ${totalSalary}</h3>
            <button className='ok-btn'>{iconTwo} JOIN NOW</button>
        </div>
    );
};

export default Cart;