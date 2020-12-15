import React from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import '../../style/navigation/MenuNavigatin.css'
import {Link} from "react-router-dom";


export default function MenuNavigation(props) {

    function handleOnMouseOver(event) {
        console.log(event);
        props.subMenuAccess(true);
    }

    function handleOnMouseOut(event) {
        event.stopPropagation();
        console.log(event);
        props.subMenuAccess(false);

    }

    return (
        <div id="navigation-container" onMouseLeave={() => {
            if (props.menuAccess) {
                console.log("aaaaaaaaaaaaaa")
                props.menuAccess(false);
            }
        }}>
            <ul>
                {props.menuElements.map((e, index) => {
                    return (
                        <Link to="/product">
                            <li className="nav-element" key={index} onMouseOver={handleOnMouseOver}
                                onMouseOut={handleOnMouseOut}>
                                <div className="menu-nav-icon">
                                    <FontAwesomeIcon icon={e.icon}/>
                                </div>
                                <div className="menu-nav-text">{e.text}</div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
}
