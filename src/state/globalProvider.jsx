import {useState} from 'react';
import GlobalContext from './globalContext';

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name:"Cart", id:36});

    function addProductToCart(prod) {
        console.log("Global Add", prod);

        let copy = [...cart];
        copy.push(prod);
        setCart (copy);
    }

    function clearCart() {}

    function removeProductFromCart() {}

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart

        }}>
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;