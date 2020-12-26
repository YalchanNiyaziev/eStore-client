import React from 'react';
import '../../style/navigation/SubMenu.css';

export default function SubMenu(props) {
    const  s = props.subCategories;
    return (
        <div id="sub-menu-container">
            {props.subCategories.map((s, index) => {
                return (
                    <div className="sub-category-box" key={index}>
                    <p className="sub-category-title">{s.title}</p>
                        {s.elements.map((e,i) =>{
                            return(
                                <p key={i} className="sub-category-name">{e}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}