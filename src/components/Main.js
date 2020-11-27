import React from 'react';
import '../style/HomeMain.css'
import MenuNavigation from "./MenuNavigation";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";
import {faLaptop} from "@fortawesome/free-solid-svg-icons/faLaptop";
import {faDoorClosed} from "@fortawesome/free-solid-svg-icons/faDoorClosed";
import {faBlender} from "@fortawesome/free-solid-svg-icons/faBlender";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import {faTableTennis} from "@fortawesome/free-solid-svg-icons/faTableTennis";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";

function createMenuElements() {
    const menuNavElements = [];
    const phoneAndTabletsElement = {
        icon: faMobileAlt,
        text: "Телефони и таблети"
    };
    const laptopsAndPcElement = {
        icon: faLaptop,
        text: "Лаптопи, компютри и периферия"
    };
    const tvAudioAndElectronicsElement = {
        icon: faTv,
        text: "ТВ, аудио и електроника"
    };
    const appliancesElement = {
        icon: faDoorClosed,
        text: "Големи електроуреди"
    };
    const smallAppliancesElement = {
        icon: faBlender,
        text: "Малки електроуреди"
    };

    const sportElement = {
        icon: faTableTennis,
        text: "Спорт и хоби"
    };
    const photoAndVideoElement = {
        icon: faCamera,
        text: "Фото и видео"
    };
    const homeElement = {
        icon: faHome,
        text: "Дом и градина"
    }
    const automativeElement = {
        icon: faCar,
        text: "Ауто"
    };
    const booksElement = {
        icon: faBook,
        text: "Книги"
    }
    menuNavElements.push(phoneAndTabletsElement);
    menuNavElements.push(laptopsAndPcElement);
    menuNavElements.push(tvAudioAndElectronicsElement);
    menuNavElements.push(appliancesElement);
    menuNavElements.push(smallAppliancesElement);
    menuNavElements.push(sportElement);
    menuNavElements.push(photoAndVideoElement);
    menuNavElements.push(homeElement);
    menuNavElements.push(automativeElement);
    menuNavElements.push(booksElement);

    return menuNavElements;
}

function Main() {
    const menuNavElements = createMenuElements();
    return (
        <div id="main-container">
            <div id="main-top-container">
                <div id="main-menu-nav-text">Категории продукти</div>
                <div id="picture-menu-nav-container">
                    <div id="main-top-nav-container">
                        <MenuNavigation menuElements={menuNavElements}/>
                    </div>
                    <div id="main-pictures-container">
                        <img></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;