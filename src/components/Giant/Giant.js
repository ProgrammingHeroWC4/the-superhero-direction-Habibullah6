import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Giant.css';


const Giant = props => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    
    const {img, name, company, age, salary, country} = props.leader;

    return (
        <div>
           <div className='giant-cards'>
               <img src={img} alt="" />
               <h4>Name:  {name}</h4>
               <h4>Age:  {age}</h4>
               <h4>Company:  {company}</h4>
               <h4>Salary:  ${salary}</h4>
               <h4>Country:  {country}</h4>
               <button onClick={() => props.handleAddToCart(props.leader)} className='add-cart-btn'>{cartIcon} add to cart</button>
           </div>
        </div>
    );
};

export default Giant;