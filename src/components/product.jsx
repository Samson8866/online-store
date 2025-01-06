import QuantityPicker from "./quantityPicker";
import "./styles/product.css";

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/600" />
            <h3>Products</h3>

            <label>$99.99</label>
            <label>$99.99</label>

            <QuantityPicker></QuantityPicker>
        </div>
    );
}

export default Product;