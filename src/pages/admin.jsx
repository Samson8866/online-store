import { use, useState } from "react";
import "./styles/admin.css";

function Admin(){

    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:"",
        discount:""
    });

    const [allProducts, setAllProducts] =useState([]);
    const [product, setProduct] = useState({
        title:"",
        image:"",
        price:"",
        category:"",
    })


    function handleProduct(e){
        const text =e.target.value;
        const name =e.target.name;

        const copy = {...product};

        if(name ==="title"){
            copy.title = text;
        }
        else if (name ==="image"){
            copy.image = text;
        }
        else if (name === "price"){
            copy.price = text;
        }

        else if( name === "category"){
            copy.category = text;
        }

        setProduct(copy);
    
    }

    function saveProduct(){
        console.log(product);

        let copy =[...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }



    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        console.log(name, text);

        let copy = {...coupon};
        if(name === "code") {
            copy.code = text;
        }
        else if (name ==="discount"){
            copy.discount = text;
        }
        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon);

        let copy =[...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

   

    return(
    <div className="admin page">
            <h1>IF YOU ARE HERE YOU ARE ADMIN</h1>

            <div className="parent">
            <div className="prod-form nice-form">
                <h3>Register Product</h3>
            
            
            <div>
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" onBlur={handleProduct} name="title"></input>
            </div>

            <div>
            <label className="form-label">Image:</label>
            <input type="text" className="form-control" onBlur={handleProduct} name="image"></input>
            </div>

            <div>
            <label className="form-label">Price:</label>
            <input type="text" className="form-control" onBlur={handleProduct}  name="price"></input>
            </div>

            <div>
            <label className="form-label" >Category:</label>
            <input type="text" className="form-control" onBlur={handleProduct}  name="category"></input>
            </div>

            <div className="controls">
                    <button className="btn btn-sm btn-dark" onClick={saveProduct}>Save Product</button>
                </div>

                <ul>
                    {allProducts.map(prod => <li>{prod.title} - ${prod.price}</li>)}
                </ul>
     </div>



            <div className="coupon-form nice-form">
                <h3>Register Coupon</h3>
                <div>
                    <label className="form-label">Code:</label>
                    <input type="text" className="form-control" onBlur={handleCoupon} name="code" ></input>
                </div>

                <div>
                    <label className="form-label">Discount:</label>
                    <input type="number" className="form-control" onBlur={handleCoupon} name="discount" ></input>
                </div>

                <div className="controls">
                    <button className="btn btn-sm btn-dark" onClick={saveCoupon}>Save Coupon</button>
                </div>

                <ul>
                {allCoupons.map( cp => <li>{cp.code} - {cp.discount}% </li>)}
                </ul>

            </div>
        </div>
    </div>
    );
}

export default Admin;