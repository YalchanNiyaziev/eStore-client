import React from 'react';
import '../../style/navigation/SubMenu.css';
import {NavLink} from "react-router-dom";

export default function SubMenu(props) {
    function handleMouseLeave(event) {
        console.log("handle Sub menu Mouse Leave");
        props.updateSubMenuStatus(false);
    }

    const s = props.subCategories;
    return (
        <div id="sub-menu-container" onMouseLeave={handleMouseLeave}>
            {props.subCategories.map((s, index) => {
                return (
                    <div className="sub-category-box" key={index}>
                        <p className="sub-category-title">{s.title}</p>
                        {s.elements.map((e, i) => {
                            return (
                                <span key={i}>
                                <NavLink to={'/products/'+e.name}
                                         // activeClassName={"sub-category-name"}
                                >
                                    <p  className="sub-category-name">{e.text}</p>
                                </NavLink>
                                </span>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}