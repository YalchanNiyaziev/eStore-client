import React from 'react';
import ProductFilters from "./ProductFilters";
import '../style/ProductPage.css'

export default class ProductPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brands: [],
            priceMin: 0,
            priceMax: 1,
            priceRangeStart: 0,
            priceRangeEnd: 0,
            specificFilters: [],
            pages: 0,
            category: '',
        }
    }

    componentDidMount() {
        console.log('make ajax and update state');
        this.setState({
                brands: ['LG', 'Samsung', 'Sony', 'AEG', 'Panasonic', 'Arcelik', 'kjbfnkjdfbvdfkvb', 'hsd       dddddssasdasdadzxzzhsgshs jagssgs lllk'],
                priceMin: 900,
                priceMax: 1500,
                priceRangeStart: 900,
                priceRangeEnd: 1500
            }
        )
    }

    updatePriceRange(newRangeStartPrice, newRangeEndPrice) {
        this.setState({priceRangeStart: newRangeStartPrice, priceRangeEnd: newRangeEndPrice})
    }

    updateOnlyOnePriceRange(newPriceRange) {
        console.log(newPriceRange);
        this.setState(newPriceRange);
    }

    render() {
        return (
            <div id="products-page-container">
                <div id="filters-container">
                    <ProductFilters
                        updatePrice={this.updatePriceRange.bind(this)}
                        priceMin={this.state.priceMin}
                        priceMax={this.state.priceMax}
                        priceRangeStart={this.state.priceRangeStart}
                        priceRangeEnd={this.state.priceRangeEnd}
                        brands={this.state.brands}/>
                </div>
            </div>
        );
    }
}