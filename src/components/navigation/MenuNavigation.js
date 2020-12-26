import React from 'react';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import '../../style/navigation/MenuNavigatin.css'
import {faLaptop} from "@fortawesome/free-solid-svg-icons/faLaptop";
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv";
import {faDoorClosed} from "@fortawesome/free-solid-svg-icons/faDoorClosed";
import {faBlender} from "@fortawesome/free-solid-svg-icons/faBlender";
import {faTableTennis} from "@fortawesome/free-solid-svg-icons/faTableTennis";
import {faCamera} from "@fortawesome/free-solid-svg-icons/faCamera";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faCar} from "@fortawesome/free-solid-svg-icons/faCar";
import {faBook} from "@fortawesome/free-solid-svg-icons/faBook";
import SubMenu from "./SubMenu";
import '../../style/navigation/SubMenu.css';


// import {Link} from "react-router-dom";


function createMenuElements() {
    const menuNavElements = [];
    const phoneAndTabletsElement = {
        icon: faMobileAlt,
        text: "Телефони и таблети",
        subCategories: [
            {
                title: "Мобилни телефони и аксесоари",
                elements: [
                    "Мобилни телефони",
                    "Кълъфи",
                    "Протектори",
                    "Зарядни",
                    "Кабели",
                    "Външни батерии",
                    "Други аксесоари"
                ]
            },
            {
                title: "Таблети и аксесоари",
                elements: [
                    "Таблети",
                    "Кълъфи",
                    "Зарядни",
                    "Кабели",
                    "Други аксесоари"
                ]
            }
        ]
    };
    const laptopsAndPcElement = {
        icon: faLaptop,
        text: "Лаптопи, компютри и периферия",
        subCategories: [
            {
                title: "Лаптопи и аксесоари",
                elements: [
                    "Лаптопи",
                    "Чанти",
                    "Раници",
                    "Кабели",
                    "Батерия",
                    "Други аксесоари"
                ]
            },
            {
                title: "Компютри и компоненти",
                elements: [
                    "Настолни компютри",
                    "Процесори",
                    "Видео карти",
                    "Дънни платки",
                    "Оперативна памет",
                    "Хард дискове",
                    "Компютърни кутии",
                    "Захранващи блокове",
                    "Solid-state drives (SSD)",
                    "Звукови платки",
                    "Други компоненти"
                ]
            }, {
                title: "Монитори и аксесоари",
                elements: [
                    "Монитори",
                    "Аксесоари за монитори"
                ]
            }, {
                title: "Софтуер",
                elements: [
                    "Офис приложения",
                    "Настолни приложения",
                    "Операционни системи",
                    "Антивирусни приложения",
                    "Други приложения"
                ]
            }, {
                title: "Принтери и скенери",
                elements: [
                    "Лазерни принтери",
                    "Мастиленоструйни принтери",
                    "Скенери",
                    "Касети тонери и други консумативи"
                ]
            }, {
                title: "Периферия",
                elements: [
                    "Мишки",
                    "Клавиатури",
                    "Рутери",
                    "Суичове",
                    "USB памет",
                    "Външчни хард дискове",
                    "Външни SSD",
                    "Тонколони",
                    "Слушалки",
                    "Уеб камери"
                ]
            }
        ]
    };
    const tvAudioAndElectronicsElement = {
        icon: faTv,
        text: "ТВ, аудио и електроника",
        subCategories: [
            {
                title: "Телевизори и аксесоари",
                elements: ["Телевизори", "Аксесоари"]
            }, {
                title: "Аудио",
                elements: [
                    "Системи за домашно кино",
                    "Аудио системи",
                    "Мултимедийни системи",
                    "Тонколони",
                    "Плейъри",
                    "Други"
                ]
            }
        ]
    };
    const appliancesElement = {
        icon: faDoorClosed,
        text: "Големи електроуреди",
        subCategories: [
            {
                title: "Хладилна техника",
                elements: ["Хладилници", "Халдилни витрини", "Фризери", "Фризерни ракли"]
            },
            {
                title: "Пералня техника",
                elements: ["Перални", "Сушилни"]
            },
            {
                title: "Съдомиялна техника",
                elements: ["Съдомиялни машини"]
            },
            {
                title: "Готварски печки",
                elements: ["Готварска печка", "Котлони", "Електрически фурни", "Миктовълнови фурни", "Абсорматори"]
            },
            {
                title: "Бойлери, климатици и уреди за отопление",
                elements: [
                    "Климатици",
                    "Електрически конвертори",
                    "Вентилаторни Печки",
                    "Бойлери",
                    "Електрически камини",
                    "Електрически радиатори"
                ]
            },
        ]
    };
    const smallAppliancesElement = {
        icon: faBlender,
        text: "Малки електроуреди",
        subCategories: [
            {
                title: "Прахосмукачки и ютии",
                elements: [
                    "Прахосмукачки",
                    "Ютии",
                    "Шевни машини",
                    "Дъски за гладене"
                ]
            },
            {
                title: "Машини за напитки",
                elements: [
                    "Кафе автомати и еспресо машини",
                    "Кафемашини",
                    "Кафемелачки",
                    "Сокоизтисквачки"
                ]
            },
            {
                title: "Кухненски уреди",
                elements: [
                    "Електрически скари",
                    "Фритюрници",
                    "Хлебопекарни",
                    "Миксери",
                    "Пасатори",
                    "Блендери",
                    "Тостери"
                ]
            }
        ]
    };

    const sportElement = {
        icon: faTableTennis,
        text: "Спорт и хоби",
        subCategories: [
            {
                title: "Конзоли",
                elements: [
                    "Playstation",
                    "Nintendo",
                    "Xbox"
                ]
            },
            {
                title: "Игри",
                elements: [
                    "Конзолни",
                    "Настолни",
                    "Компютърни"
                ]
            },
            {
                title: "Фитнес",
                elements: [
                    "Велоергометри",
                    "Бягащи пътеки",
                    "Гребни тренажори",
                    "Тежести",
                    "Гири и дъмбели",
                    "Фитнес уреди"
                ]
            }
        ]
    };
    const photoAndVideoElement = {
        icon: faCamera,
        text: "Фото и видео",
        subCategories: [
            {
                title: "Фотоапарати и аксесоари",
                elements: [
                    "DSLR фотоапарати",
                    "Mirrorless фотоапарати",
                    "Компактни фотоапарати",
                    "Фотоапарати за моментни снимки",
                    "Обективи"
                ]
            },
            {
                title: "Видеокамери и аксесоари",
                elements: [
                    "Видеокамери",
                    "Дронове",
                    "Спортни видеокамери",
                    "Други аксесоари"
                ]
            }
        ]
    };
    const homeElement = {
        icon: faHome,
        text: "Дом и градина",
        subCategories: [
            {
                title: "Мебели и декорации",
                elements: [
                    "Дивани",
                    "Соални комплекти",
                    "Гардероби",
                    "Маси",
                    "Фотьоли",
                    "Столове",
                    "Килими",
                    "Пердета",
                    "Възглавници",
                    "Одеяла",
                    "Спално бельо"
                ]
            }
        ]
    }
    const automativeElement = {
        icon: faCar,
        text: "Ауто",
        subCategories: [{
            title: "Авто техника",
            elements: [
                "Навигационни системи",
                "CD и DVD плейъри",
                "Субуфери и тонколони",
                "Видеорегистратори",
                "Автомобилни гуми"
            ]
        }]
    };
    const booksElement = {
        icon: faBook,
        text: "Книги",
        subCategories: [{
            title: "Книги",
            elements: [
                "Астрология",
                "Архитектура",
                "Детски книги",
                "Дизайн",
                "Изкуство",
                "История",
                "IT и информатика",
                "Криминални романи",
                "Маркетинг",
                "Математика",
                "Медицина и фармация",
                "Мениджмънт",
                "Наука и технология",
                "Психология",
                "Световни романи и повести",
                "Фантастика и фентъзи",
                "Финанси и счетоводство",
            ]
        },]
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

export default class MenuNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuElements: [],
            isSubmenuAccessible: false,
            subCategories: [{
                title: "sss",
                elements: []
            }]
        };
        this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
        this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
        this.updateSubMenuAccessible = this.updateSubMenuAccessible.bind(this);
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
        this.renderSubMenu = this.renderSubMenu.bind(this);
    }

    componentDidMount() {
        this.setState({menuElements: createMenuElements()});
    }

    handleOnMouseOver(event) {
        const selectedCategoryText = event.target.innerText;
        const selectedCategory = this.state.menuElements.filter(e => e.text === selectedCategoryText);
        if(selectedCategory.length !== 1 ){
            return;
        }
        const selectedSubCategories = selectedCategory[0].subCategories;
        this.setState({subCategories:selectedSubCategories});
        this.updateSubMenuAccessible(true);
    }

    handleOnMouseOut(event) {
        event.stopPropagation();
        console.log(event);
        this.updateSubMenuAccessible(false);
    }

    handleOnMouseLeave(event) {
        if (this.props.menuAccess) {
            this.props.menuAccess(false);
        }
    }

    updateSubMenuAccessible(newState) {
        this.setState({isSubmenuAccessible: newState})
    }

    renderSubMenu() {
        if (this.state.isSubmenuAccessible) {
            return <SubMenu subCategories={this.state.subCategories}/>
        }
    }

    render() {

        return (

            <div id="nav-main-container-box">
                <div id="navigation-container" onMouseLeave={this.handleOnMouseLeave}>
                    <ul>
                        {this.state.menuElements.map((e, index) => {
                            return (
                                // <Link to="/product">
                                <li className="nav-element" key={index} onMouseOver={this.handleOnMouseOver}
                                    onMouseOut={this.handleOnMouseOut}>
                                    <div className="menu-nav-icon">
                                        <FontAwesomeIcon icon={e.icon}/>
                                    </div>
                                    <div className="menu-nav-text">{e.text}</div>
                                </li>
                                // </Link>
                            )
                        })}
                    </ul>
                </div>
                {this.renderSubMenu()}
            </div>
        );
    }
}