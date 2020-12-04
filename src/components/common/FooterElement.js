import React from 'react';

export default function FooterElement(props) {
    if (props.footerElement.isStandardElement) {
        return (
            <div className="footer-element-container">
                <p className="footer-element-title">{props.footerElement.title}</p>
                <ul>
                    {props.footerElement.subItems.map( (e,index) => <li key={index} className="footer-element-subItem">{e}</li>)}

                </ul>
            </div>

        );
    } else {
        return (
            <div className="footer-element-container">
                <p className="footer-element-title">{props.footerElement.title}</p>
                <p id="know-first-info">{props.footerElement.subTitle}</p>
                <form id="know-first-form">
                    <input id="email-box" type="text" placeholder="Твоят e-mail..."/>
                    <button type="button">Изпрати</button>
                </form>
            </div>
        );
    }

}