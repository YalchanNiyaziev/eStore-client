import React from 'react';
import Nouislider from "nouislider-react";
import '../../style/product/PriceFilter.css'

export default class PriceFilter extends React.Component {

    handleSlide = (event) => {
        console.log("slider event");
        console.log(event)
        this.props.updatePrice(Math.floor(event[0]), Math.floor(event[1]));
    };

    createSlider = () => {
        const start = this.props.priceRangeStart;
        const end = this.props.priceRangeEnd;
        console.log("creating UISlider with");
        console.log(`range min- ${this.props.minPrice} max-${this.props.maxPrice} start ${start} end ${end}`);
        return (
            <Nouislider
                id="slider"
                onSlide={this.handleSlide} range={{min: this.props.minPrice, max: this.props.maxPrice}}
                start={[start, end]}
                connect/>
        );
    }

    render() {
        return (
            <div id="price-container">
                {this.createSlider()}
                <div id="price-range-box-container">
                    <input type="text" name="priceMin" className="price-range-box"
                           value={this.props.priceRangeStart} readOnly={true}/>
                    <input type="text" name="priceMax" className="price-range-box"
                           value={this.props.priceRangeEnd} readOnly={true}/>
                </div>
            </div>
        );
    }
}