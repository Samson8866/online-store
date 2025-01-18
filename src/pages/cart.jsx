import {useContext} from 'react';
import "./styles/cart.css";
import GlobalContext from '../state/globalContext';


function Cart(){

    const cart = useContext(GlobalContext).cart
    return(
        <div className="cart page">
            <h1>Ready to complete your purchase?</h1>
            <h2>You have {cart.length} in your cart</h2>

            <div className="list">
                <ul>
                    {cart.map(prod => 
                        <li className='cart-prod'>
                            <img src={prod.image} alt =""></img>
                            <h6>{prod.title}</h6>
                            <label>#{prod.quantity}</label>
                            <label>${prod.price.toFixed(2)}</label>
                            <label>${(prod.price * prod.quantity).toFixed(2)}</label>
                            <button className='btn btn-sm btn-outline-danger'>Remove</button>
                        </li>

                    )}
                </ul>

            </div>
        </div>
    );
}

export default Cart;