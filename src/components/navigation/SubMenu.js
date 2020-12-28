import React from 'react';
import '../../style/navigation/SubMenu.css';

export default function SubMenu(props) {
    function handleMouseLeave(event) {
        console.log("handle Sub menu Mouse Leave");
        props.updateSubMenuStatus(false);
    }
    const  s = props.subCategories;
    return (
        <div id="sub-menu-container" onMouseLeave={handleMouseLeave}>
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