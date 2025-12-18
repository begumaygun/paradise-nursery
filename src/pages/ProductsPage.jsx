
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

export const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    description: "Produces oxygen and improves air quality.",
    image: "/SnakePlant.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 2,
    name: "Spider Plant",
    price: 12,
    description: "Filters toxins from the air.",
    image: "/SpiderPlant.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 3,
    name: "Peace Lily",
    price: 18,
    description: "Removes mold spores and prufies air.",
    image: "/PeaceLily.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 4,
    name: "Boston Fern",
    price: 20,
    description: "Adds humidity and cleans air.",
    image: "/BostonFern.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 5,
    name: "Rubber Plant",
    price: 17,
    description: "Easy to care for and effective at removing toxins.",
    image: "/RubberPlant.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 6,
    name: "Aloe Vera",
    price: 14,
    description: "Prufies the air and has healing skin.",
    image: "/AloeVera.jpg",
    category: "Air Purifying",
    sale: true
},
{
    id: 7,
    name: "Lavender",
    price: 20,
    description: "Calming scent,used in aromathreapy.",
    image: "/Lavender.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
{
    id: 8,
    name: "Jasmine",
    price: 18,
    description: "Sweat fragrance,promote relaxation.",
    image: "/Jasmine.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
{
    id: 9,
    name: "Rosemary",
    price: 15,
    description: "Invigorating scent,often used in cooking.",
    image: "/Rosemary.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
{
    id: 10,
    name: "Mint",
    price: 12,
    description: "Fresh scent.",
    image: "/Mint.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
{
    id: 11,
    name: "Lemon Balm",
    price: 14,
    description: "Relieves stress.",
    image: "/LemonBalm.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
{
    id: 12,
    name: "Hycinth",
    price: 22,
    description: "Known as beautiful flower.",
    image: "/Hycinth.jpg",
    category: "Aromatic Fragrant Plants",
    sale: true
},
]

function ProductsPage() {
    const dispatch = useDispatch();
    const airPrufying = products.filter(product => product.category === "Air Purifying");
    const aromaticFragrant = products.filter(product => product.category === "Aromatic Fragrant Plants");
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
    <div className='product-page'>
        
        <div className="section-wrapper">
        <h2 className="section-title">Aromatic Fragrant Plants</h2>
        </div>
        <div className="product-grid">
        {airPrufying.map(product => (
        <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} className="product-image" />
        {product.sale && <span className="sale-badge">Sale</span>}
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    ))}
    </div>

        <div className="section-wrapper">
        <h2 className="section-title">Aromatic Fragrant Plants</h2>
        </div>
    <div className="product-grid">
    {aromaticFragrant.map(product => (
        <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} className="product-image" />
        {product.sale && <span className="sale-badge">Sale</span>}
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={()=> handleAddToCart(product)}>Add to Cart</button>
        </div>
    ))}
    </div>

            
        </div>
    );
    }



export default ProductsPage;