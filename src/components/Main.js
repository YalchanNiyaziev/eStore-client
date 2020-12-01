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
            isSubmenuAccessible: false,
            pictureId: [1, 2, 3, 4],
            homePictures: [
                {
                    url: "https://www.w3schools.com/howto/img_nature_wide.jpg",
                    alt: "phone image"
                },
                {
                    url: "https://www.w3schools.com/howto/img_snow_wide.jpg",
                    alt: "phone image"
                },
                {
                    url: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
                    alt: "phone image"
                },
                {
                    url: "https://mnlopsample.files.wordpress.com/2019/08/winter-at-kifune-shrine.jpg",
                    alt: "phone image"
                },
                {
                    url: "https://www.nippon.com/en/ncommon/contents/japan-glances/187089/187089.jpg",
                    alt: "phone image"
                }
            ],
            displayPictureIndex: 0
        }
        this.updateSubMenuAccessible = this.updateSubMenuAccessible.bind(this);
        this.handleOnClickPrevImage = this.handleOnClickPrevImage.bind(this);
        this.handleOnClickNextImage = this.handleOnClickNextImage.bind(this);
    }

    renderSubMenu() {
        if (this.state.isSubmenuAccessible) {
            return <SubMenu/>
        }
    }

    updateSubMenuAccessible(newState) {
        this.setState({isSubmenuAccessible: newState})
    }

    handleOnClickPrevImage(event) {
        this.setState(prevState => {
            if (prevState.displayPictureIndex === 0) {
                return {
                    displayPictureIndex: 0
                }
            }
            return {
                displayPictureIndex: prevState.displayPictureIndex - 1
            }
        });

    }

    handleOnClickNextImage(event) {
        this.setState(prevState => {
            if (prevState.displayPictureIndex === prevState.homePictures.length - 1) {
                return {
                    displayPictureIndex: 0
                }
            }
            return {
                displayPictureIndex: prevState.displayPictureIndex + 1
            }
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.displayPictureIndex === prevState.homePictures.length - 1) {
                    return {
                        displayPictureIndex: 0
                    }
                }
                return {
                    displayPictureIndex: prevState.displayPictureIndex + 1
                }
            });
        }, 5000);
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const menuNavElements = createMenuElements();
        console.log("render main")
        return (
            <div id="main-container">
                <div id="main-top-container">
                    <div id="main-menu-nav-text">Категории продукти</div>
                    <div id="picture-menu-nav-container">
                        <div id="main-top-nav-container">
                            <MenuNavigation subMenuAccess={this.updateSubMenuAccessible}
                                            menuElements={menuNavElements}/>
                        </div>
                        <div id="main-pictures-container"  onClick={()=>{
                            console.log("Image selected")
                        }}>

                            <div className="slideshow-container">
                                <a href="https://www.qries.com/">
                                <img key={this.state.pictureId[this.state.displayPictureIndex]}
                                     src={this.state.homePictures[this.state.displayPictureIndex].url}
                                     className="image fade"/>
                                </a>
                            </div>

                                    <button id="image-button-prev"
                                            onClick={this.handleOnClickPrevImage}>&#10094;</button>
                                    <button id="image-button-next"
                                            onClick={this.handleOnClickNextImage}>&#10095;</button>


                            {this.renderSubMenu()}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
