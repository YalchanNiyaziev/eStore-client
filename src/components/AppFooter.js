import React from 'react';
import '../style/AppFooter.css';
import FooterElement from "./FooterElement";

function createFooterElementsArray(){
    const elements = [];

    const aboutUs ={
        title: "eStore",
        subItems: [
            "За нас",
            "Начин на плащане",
            "Доставка",
            "Контакти"
        ],
        isStandardElement: true
    }
    const services = {
        title: "Услуги",
        subItems: [
            "Проверка на пратка",
            "История на поръчките",
            "Гаранция и сервиз",
            "30 дни право на връщане"
        ],
        isStandardElement: true
    }
    const knowFirst = {
        title:"Бюлетин",
        subTitle:"Запиши се за нашия онлайн бюлетин и научи първи за промоционални и нови продукти.",
        isStandardElement: false

}
    elements.push(services);
    elements.push(aboutUs);
    elements.push(knowFirst);

    return elements;
}
function AppFooter() {
    const footerElements = createFooterElementsArray();
    return (
        <div id="footer-container">

            {footerElements.map( (e, index) => <FooterElement key={index} footerElement = {e}/>)}
        </div>
    )

}

export default AppFooter;