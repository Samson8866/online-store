import { useState } from "react";
import "./styles/quantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function increase(){
        let value =quantity + 1;
        setQuantity(value);
        //NOTE: the set quantity does not change immediately    
    }

    function decrease(){
        if(quantity >1){

        let value = quantity - 1;
        setQuantity(value);
        }
    }

    return(
        <div className="qt-picker">
            <button className='btn btn-sm btn-outline-primary' disabled={quantity==1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;