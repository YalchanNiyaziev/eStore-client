import React from 'react';
import '../style/ProductFilters.css';
import "nouislider/distribute/nouislider.css";
import BrandsFilter from "./BrandsFilter";
import PriceFilter from "./PriceFilter";


export default class ProductFilters extends React.Component {

    render() {
        return (
            <div id="product-filters-container">
                <div className="filter">
                    <h3>Производител</h3>
                    <BrandsFilter brands={this.props.brands}/>
                </div>
                <div className="filter">
                    <h3>Цена</h3>
                    <PriceFilter
                        minPrice={this.props.priceMin}
                        maxPrice={this.props.priceMax}
                        priceRangeStart={this.props.priceRangeStart}
                        priceRangeEnd={this.props.priceRangeEnd}
                        updatePrice={this.props.updatePrice}/>
                </div>
            </div>
        );
    }


}