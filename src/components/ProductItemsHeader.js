import React from 'react';
import '../style/ProductItemsHeader.css';

export default class ProductItemsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderCriteria: '',
            maxElementCount: 30,
            isGridView: true
        }
    }

    render() {
        return (
            <div id="products-list-header-container">
                <p>{this.props.categoryName}</p>
                <hr/>
                <div id="select-form-container">
                <form className="form-select">
                    <label htmlFor="order-select">Подредба</label>
                    <select name="orderingCriteria" id="order-select">
                        <option value="asc" selected="selected">Цена възходящо</option>
                        <option value="desc">Цена низходяшо</option>
                        <option value="date">Най-нови</option>
                    </select>
                </form>

                <form className="form-select">
                    <label htmlFor="page-count-items">Резултати на старница</label>
                    <select name="countProductsPerPage" id="page-count-items">
                        <option value="24" selected="selected">24 продукта</option>
                        <option value="60">60 продукта</option>
                        <option value="80">80 продукта</option>
                    </select>
                </form>
                </div>
            </div>
        )
    }
}