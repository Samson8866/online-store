import QuantityPicker from "./quantityPicker";
import "./styles/product.css";
import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Product(props){

    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd(){
        console.log("Test");
        globalAdd(props.data);
    }

    return(
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

            <div>
            <label>15.99 </label>
            <label>${props.data.price.toFixed(2)}</label>
            </div>

            <QuantityPicker></QuantityPicker>
            <div className="parent">
            <button className="btn btn-sm btn-primary" onClick={onAdd}>Add</button>
            </div>
        </div>

    

    );
}

export default Product;