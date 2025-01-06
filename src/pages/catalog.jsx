
import Product from "../components/product";
import  "./styles/catalog.css";

function Catalog(){
    return(
       < div className="catalog page">
        <h1>Check out our amazing catalog</h1>

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
    );
}

export default Catalog;