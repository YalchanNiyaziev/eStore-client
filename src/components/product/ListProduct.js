import React from 'react';
import ProductFilters from "./ProductFilters";
import '../../style/product/ListProduct.css'
import ProductItemsHeader from "./ProductItemsHeader";
import ProductItemsContainer from "./ProductItemsContainer";

export default class ListProduct extends React.Component {

    render() {
        return (
            <div id="products-page-container">
                <div id="filters-container">
                    <ProductFilters
                        updatePrice={this.props.updatePrice}
                        priceMin={this.props.priceMin}
                        priceMax={this.props.priceMax}
                        priceRangeStart={this.props.priceRangeStart}
                        priceRangeEnd={this.props.priceRangeEnd}
                        brands={this.props.brands}
                        />
                </div>
                <div id="products-list-container">
                    <ProductItemsHeader categoryName={this.props.categoryName}/>
                    <ProductItemsContainer
                        selectProduct={this.props.selectProduct}
                        products={this.props.products}/>
                </div>

            </div>
        );
    }
}