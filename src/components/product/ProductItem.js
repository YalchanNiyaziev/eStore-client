import React from 'react';
import '../../style/product/ProductItem.css';

export default function ProductItem(props) {
    return (
        <div key={props.key} className="product-card" onClick={()=>{props.selectProduct(props.id)}}>
            <div className="product-card-top">
                <div className="product-card-img">
                    <img src={props.product.images[0]} alt={props.product.alt}/>
                </div>
            </div>
            <div className="product-card-mid">
                <p className="product-card-name">
                    {props.product.name}
                </p>
            </div>
            <div className="product-card-btn">
                <p className="product-card-btn-price">
                    {props.product.price}лв
                </p>
                <div className="product-card-btn-button">
                    <form className="add-to-cart-form">
                        <button className="add-to-cart-button" type="button">Добави в количка</button>
                    </form>
                </div>
            </div>
        </div>
    );
}