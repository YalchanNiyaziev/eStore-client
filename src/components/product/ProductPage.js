import React from 'react';
import '../../style/product/ProductPage.css'

export default function ProductPage(props) {

    function createProductMainBox(images, name, price) {
        return <div id="selected-product-main-box">
            <div className="selected-product-box-element" id="selected-product-image-box">
                <img id="showed-image" src={images[0]}/>
                <div id="additional-images-box">
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>

                </div>
            </div>
            <div className="selected-product-box-element" id="selected-product-info">
                <p>Redmi Note 9 Pro</p>
            </div>

        </div>;
    }

    function createProductSpecifications(specifications) {
        return <div>

        </div>
    }

    function createProductReviews(reviews) {
        return undefined;
    }

    const product = props.products[props.selected];
    const productMainBox = createProductMainBox(product.images, product.name, product.price)
    // const productSpecifications = createProductSpecifications(props.product.specifications);
    // const productReviews = createProductReviews(props.product.reviews);

    return (
        <div id="selected-product-container">
            {productMainBox}
            {/*{productSpecifications}*/}
            {/*{productReviews}*/}
        </div>);
}