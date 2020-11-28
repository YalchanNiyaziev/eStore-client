import React from 'react';
import '../style/ProductFilters.css';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";


export default class ProductFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: this.props.priceMin,
            priceMax: this.props.priceMax
        }
    }
    handleInputChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        this.setState({
                [fieldName]:fieldValue
            }
        )
        console.log(event)
    }

    handleSlide = (event) => {
        console.log(event)

        this.setState({
                priceMin: event[0],
                priceMax: event[1]
            }
        )
    };
    createSlider = (minPrice, maxPrice) => {
        return (
            <Nouislider onSlide={this.handleSlide} range={{min: minPrice, max: maxPrice}} start={[minPrice, maxPrice]}
                        connect/>
        );
    }

    render() {
        return (
            <div id="product-filters-container">
                <div id="brands-container">
                    <form id="product-brands-form">
                        {this.props.brands.map((e, index) => (
                                <div key={index} className="brand-container-elem">
                                    <input type="checkbox" id={"brand" + index} className="brand-checkbox" value={e}/>
                                    <label htmlFor={"brand" + index}>{e}</label>
                                </div>
                            )
                        )}
                    </form>
                </div>

                <div id="price-container">
                    {this.createSlider(this.props.priceMin, this.props.priceMax)}
                    <div>
                        <form>
                            <input onChange={this.handleInputChange} type="text" name="priceMin" value={this.state.priceMin}/>
                            <input onChange={this.handleInputChange} type="text" name="priceMax"  value={this.state.priceMax}/>
                            <button type="button">&gt;</button>
                        </form>
                    </div>
                </div>


            </div>
        );
    }

}