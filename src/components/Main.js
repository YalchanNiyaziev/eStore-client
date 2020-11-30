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
import SubMenu from "./SubMenu";

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

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmenuAccessible: false
        }
        this.updateSubMenuAccessible = this.updateSubMenuAccessible.bind(this);
    }

    renderSubMenu() {
        if (this.state.isSubmenuAccessible) {
            return <SubMenu/>
        }
    }

    updateSubMenuAccessible(newState) {
        this.setState({isSubmenuAccessible: newState})
    }
    componentDidMount() {
    //     var i;
    //     var slides = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("dot");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) {slideIndex = 1}
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex-1].style.display = "block";
    //     dots[slideIndex-1].className += " active";
    //     setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }
    }

    render() {

        const menuNavElements = createMenuElements();
        return (
            <div id="main-container">
                <div id="main-top-container">
                    <div id="main-menu-nav-text">Категории продукти</div>
                    <div id="picture-menu-nav-container">
                        <div id="main-top-nav-container">
                            <MenuNavigation subMenuAccess={this.updateSubMenuAccessible}
                                            menuElements={menuNavElements}/>
                        </div>
                        <div id="main-pictures-container">
                            {/*<div className="slideshow-container">*/}

                            {/*    <div className="mySlides fade">*/}
                            {/*        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" className="image"/>*/}
                            {/*    </div>*/}

                            {/*    <div classname="mySlides fade">*/}
                            {/*        <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" className="image"/>*/}
                            {/*    </div>*/}

                            {/*    <div class="mySlides fade">*/}
                            {/*        <img src="https://www.w3schools.com/howto/img_mountains_wide.jpg" className="image"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="mySlides fade">*/}
                            {/*        <img src="https://mnlopsample.files.wordpress.com/2019/08/winter-at-kifune-shrine.jpg" className="image"/>*/}
                            {/*    </div>*/}

                            {/*    <div className="mySlides fade">*/}
                            {/*        <img src="https://www.nippon.com/en/ncommon/contents/japan-glances/187089/187089.jpg" className="image"/>*/}
                            {/*    </div>*/}

                            {/*</div>*/}
                            {/*<br/>*/}

                            {/*    <div className="picture-dots" >*/}
                            {/*        <span className="dot"></span>*/}
                            {/*        <span className="dot"></span>*/}
                            {/*        <span className="dot"></span>*/}
                            {/*        <span className="dot"></span>*/}
                            {/*        <span className="dot"></span>*/}
                            {/*    </div>*/}
                            {this.renderSubMenu()}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
