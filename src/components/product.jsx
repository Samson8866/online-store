import QuantityPicker from "./quantityPicker";
import "./styles/product.css";
import { useContext, useState } from "react";
import GlobalContext from "../state/globalContext";

function Product(props){
    const[quantity, setQuantity] = useState(1);
    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd(){
        let fixedProduct = {...props.data};
        fixedProduct.quantity = quantity;
        globalAdd(props.data);
    }

    function handleQuantity(qty){
        setQuantity(qty);
    }

    return(
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

            <div className="parent">
            <label>${props.data.price * quantity .toFixed(2)}</label>
            <label>${props.data.price.toFixed(2)}</label>

            </div>



            <div className="parent">
            <QuantityPicker onChange={handleQuantity}></QuantityPicker>
            <button className="btn btn-sm btn-primary" onClick={onAdd}>Add</button>
            </div>
        </div>

    

    );
}

export default Product;