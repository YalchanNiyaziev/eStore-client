import React from 'react';
import '../style/AppHeader.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

function AppHeader() {
    return (
        <div id="container">
            <div className="wrapper">
                <FontAwesomeIcon className="icon" icon={faBars} size="2x"/>
            </div>
            <div id="logo" className="wrapper">
            </div>

            <div id="form-wrapper" className="wrapper">
                <form className="form">
                    <input type="text" placeholder="Търсене" name="searchingWord"/>
                    <button type="button">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>

            <div id="account-wrapper"className="wrapper">
                <FontAwesomeIcon className="icon" icon={faUser} size="2x"/>
                <div className="text">Моят акаунт</div>
            </div>

            <div id="cart-wrapper" className="wrapper">
                <FontAwesomeIcon className="icon" icon={faShoppingCart}/>
                <div className="text">Моята количка</div>
            </div>
        </div>
    )
}

export default AppHeader;