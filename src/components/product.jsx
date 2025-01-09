import QuantityPicker from "./quantityPicker";
import "./styles/product.css";

function Product(props){
    return(
        <div className="product">
            <img src={props.data.image} alt='' />
            <h3>{props.data.title}</h3>

            <label></label>
            <label>${props.data.price}</label>

            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;