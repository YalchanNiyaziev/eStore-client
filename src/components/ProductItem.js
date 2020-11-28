import React from 'react'

export default function ProductItem(props) {
    return (
        <div className="product-card">
            <div className="product-card-top">
                <div className="product-card-img">
                    <img src={props.product.imgUrl} alt={props.product.alt}/>
                </div>
            </div>
            <div className="product-card-mid">
                <div className="product-card-name">
                    {props.product.name}
                </div>
            </div>
            <div className="product-card-btn">
                <div className="product-card-btn-price">
                    {props.product.price}
                </div>
                <div className="product-card-btn-button">
                    <form className="add-to-cart-form">
                        <button className="add-to-cart-button" type="button">Добави в количка</button>
                    </form>
                </div>
            </div>
        </div>
    );
}