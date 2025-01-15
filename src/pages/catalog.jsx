
import Product from "../components/product";
import  "./styles/catalog.css";
import { useState } from 'react';

const dummyData = [
    {
        "title": "Sun Glasses",
        "category": "Accessory",
        "price": 149.99,
        "image": "/images/sunglasses.jpeg",
        "_id": "123oasfhjkl"
    },
    {
        "title": "Swim Trunks",
        "category": "Apparel",
        "price": 69.99,
        "image": "/images/trunks.jpeg",
        "_id": "123oasfhukl"
    },
    {
        "title": "Slides",
        "category": "Footwear",
        "price": 59.99,
        "image": "/images/slides.jpeg",
        "_id": "123obsfhjkl"
    },
    {
        "title": "Cap",
        "category": "Hats",
        "price": 29.99,
        "image": "/images/cap.jpeg",
        "_id": "123obngfhjkl"
    },
    {
        "title": "Hoodie",
        "category": "Apparel",
        "price": 39.99,
        "image": "/images/Hoodie.jpeg",
        "_id": "123obngfhj2l"
    },
    {
        "title": "Shoes",
        "category": "Footwear",
        "price": 129.99,
        "image": "/images/shoes.webp",
        "_id": "123obngfhj4l"
    },
    {
        "title": "Shoes",
        "category": "Footwear",
        "price": 850.00,
        "image": "/images/pShoes.webp",
        "_id": "123obngfhj8l"
    },
    {
        "title": "Under Wear",
        "category": "underwear",
        "price": 95.00,
        "image": "/images/underwear.webp",
        "_id": "123obngfhj2l"
    },
    {
        "title": "Belt",
        "category": "Accessories",
        "price": 495.00,
        "image": "/images/belt.webp",
        "_id": "123obngfhj2b"
    },
    {
        "title": "Eye Glasses",
        "category": "Eye Wear",
        "price": 275.00,
        "image": "/images/eyeglasses.webp",
        "_id": "123obngfhjub"
    },

];

const dummyCategories =["Accessory", "Apparel", "Footwear", "Shirts", "Hats"];

function Catalog(){
    const [catalog, setCatalog] = useState(dummyData);
    const [categories, setCategories] =useState(dummyCategories);
    return(
       < div className="catalog page">
        <h1>Stylish Summer Trends!!</h1>

        <div className="filter">
            {categories.map ( cat => <button className="btn btn-sm btn-primary">{cat}</button>)
        }
        </div>

        {
            catalog.map( prod => <Product data={prod} /> )
        }

        </div>
    );
}

export default Catalog;