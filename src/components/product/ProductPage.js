import React from 'react';

export default function ProductPage(props) {

    function createProductMainBox(images, name, price) {
        return undefined;
    }
    function createProductSpecifications(specifications) {
        return <div>

        </div>
    }

    function createProductReviews(reviews) {
        return undefined;
    }

    const productMainBox = createProductMainBox(props.product.images,props.product.name,props.product.price)
    const productSpecifications = createProductSpecifications(props.product.specifications);
    const productReviews = createProductReviews(props.product.reviews);

    return (
        <>
            {productMainBox}
            {productSpecifications}
            {productReviews}
        </>);
}