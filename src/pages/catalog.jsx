
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
    }
];

const dummyCategories =["Accessory", "Apparel", "Footwear", "Shirts", "Hats"];

function Catalog(){
    const [catalog, setCatalog] = useState(dummyData);
    const [categories, setCategories] =useState(dummyCategories);
    return(
       < div className="catalog page">
        <h1>Get Stupid Fresh This Summer!!</h1>

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