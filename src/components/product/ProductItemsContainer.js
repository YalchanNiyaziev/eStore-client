import React from 'react';
import '../../style/product/ProductItemsContainer.css'
import ProductItem from "./ProductItem";

export default class ProductItemsContainer extends React.Component {
    render() {
        return (
            <div id="products-items-container">
                {this.props.products.map((e, index) => {
                    return <div className="pr-card" key={index}>
                        <ProductItem
                            id={index}
                            product={e}
                            selectProduct={this.props.selectProduct}/>
                    </div>
                })};
            </div>
        );
    }

}