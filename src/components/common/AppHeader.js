import React from 'react';
import '../../style/common/AppHeader.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
// import {Link} from "react-router-dom";
import Cart from "../cart/Cart";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import {faLaptop} from "@fortawesome/free-solid-svg-icons/faLaptop";
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";
import {faDoorClosed} from "@fortawesome/free-solid-svg-icons/faDoorClosed";
import {faBlender} from "@fortawesome/free-solid-svg-icons/faBlender";
import {faTableTennis} from "@fortawesome/free-solid-svg-icons/faTableTennis";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import SubMenu from "../navigation/SubMenu";
import MenuNavigation from "../navigation/MenuNavigation";


class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuAccessible: false
        }
        this.updateMenuAccessible = this.updateMenuAccessible.bind(this);

    }


    updateMenuAccessible(newState) {
        this.setState({isMenuAccessible: newState})
    }


    handleNavMenuMouseOver(event) {
        this.setState({isMenuAccessible: true})
    }

    handleNavMenuMouseOut() {
        this.setState({isMenuAccessible: false})
    }

    showMenu() {
        if (this.state.isMenuAccessible) {
            return (<MenuNavigation
                menuAccess={this.updateMenuAccessible}
                />)
        }
    }

    render() {
        return (
            <div id="header-container">
                <div id="drop-down-menu">
                <div className="wrapper" onMouseOver={this.handleNavMenuMouseOver.bind(this)}
                    // onMouseOut={this.handleNavMenuMouseOut.bind(this)}
                >
                    <FontAwesomeIcon className="icon" icon={faBars} size="2x"/>
                </div>
                <div id="header-nav-menu" onMouseOut={this.handleNavMenuMouseOut.bind(this)}>
                    {this.showMenu()}
                </div>
                </div>
                {/*<Link to="/">*/}
                    <div id="logo" className="wrapper">
                    </div>
                {/*</Link>*/}
                <div id="form-wrapper" className="wrapper">
                    <form className="form">
                        <input type="text" id="search-input" placeholder="Търсене" name="searchingWord"/>
                        <button type="button" id="search-button">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>
                </div>
                <div id="account-wrapper" className="wrapper">
                    <FontAwesomeIcon className="icon-user" icon={faUser} size="2x"/>
                    <div className="text">Моят акаунт</div>
                </div>

                <div id="cart-wrapper" className="wrapper">
                    {/*<Link to="/cart">*/}
                        <FontAwesomeIcon className="icon-user" icon={faShoppingCart}/>
                        <div className="text">Моята количка</div>
                    {/*</Link>*/}
                </div>
                {/*{this.renderSubMenu()}*/}
            </div>

        )
    }
}
export default AppHeader;