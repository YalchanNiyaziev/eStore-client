import React from 'react';
import '../../style/product/ProductItem.css';
import {NavLink} from "react-router-dom";

export default function ProductItem(props) {
    return (
        <div className="product-card" >
            <div className="product-card-top">
                <div className="product-card-img">
                    <img src={props.product.images[0]} alt={props.product.alt}/>
                </div>
            </div>
            <div className="product-card-mid" onClick={()=>{props.selectProduct(props.id)}}>
                <NavLink activeClassName="product-card-name" to={'/products/category/'+props.id}>
                    {props.product.name}
                </NavLink>
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