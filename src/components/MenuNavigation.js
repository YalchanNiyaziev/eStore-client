import React from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import '../style/MenuNavigatin.css'


export default function MenuNavigation(props) {

    function handleOnMouseOver(event) {
        console.log(event);
        props.subMenuAccess(true);
    }

    function handleOnMouseOut(event) {
        console.log(event);
        props.subMenuAccess(false);
    }

    return (
        <div id="navigation-container">
            <ul>
                {props.menuElements.map((e, index) => {
                    return (
                        <li className="nav-element" key={index} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} >
                            <div className="menu-nav-icon">
                                <FontAwesomeIcon icon={e.icon}/>
                            </div>
                            <div className="menu-nav-text">{e.text}</div>
                        </li>)
                })}
            </ul>
        </div>
    );
}
