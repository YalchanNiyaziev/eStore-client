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
                priceMax: 1500
            }
        )
    }

    render() {
        return (
            <div id="products-page-container">
                <ProductFilters id="filters-container" priceMin={this.state.priceMin} priceMax = {this.state.priceMax} brands={this.state.brands}/>
            </div>
        );
    }
}