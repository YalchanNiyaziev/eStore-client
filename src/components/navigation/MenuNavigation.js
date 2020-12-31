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
import {Link} from "react-router-dom";


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
                    {
                        name: "smart-phones",
                        text: "Мобилни телефони"
                    },
                    {
                        name: "smart-phone-cases",
                        text: "Кълъфи"
                    },
                    {
                        name: "smart-phone-protectors",
                        text: "Протектори"
                    },
                    {
                        name: "smart-phone-chargers",
                        text: "Зарядни"
                    },
                    {
                        name: "smart-phone-cables",
                        text: "Кабели"
                    },
                    {
                        name: "smart-phone-powerbank",
                        text: "Външни батерии"
                    },
                    {
                        name: "smart-phone-powerbank",
                        text: "Външни батерии"
                    },
                    {
                        name: "smart-phone-other-accessories",
                        text: "Други аксесоари"
                    }
                ]
            },
            {
                title: "Таблети и аксесоари",
                elements: [
                    {
                        name: "tablets",
                        text: "Таблети"
                    },
                    {
                        name: "tablet-cases",
                        text: "Кълъфи"
                    },
                    {
                        name: "tablet-charges",
                        text: "Зарядни"
                    },
                    {
                        name: "tablet-charges",
                        text: "Зарядни"
                    },
                    {
                        name: "tablet-cables",
                        text: "Кабели"
                    },
                    {
                        name: "tablet-other-accessories",
                        text: "Други аксесоари"
                    }
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
                    {
                        name: "laptops",
                        text: "Лаптопи"
                    },
                    {
                        name: "laptop-bags",
                        text: "Чанти"
                    },
                    {
                        name: "laptop-backpacks",
                        text: "Раници"
                    },
                    {
                        name: "laptop-cables",
                        text: "Кабели"
                    },
                    {
                        name: "laptop-battery",
                        text: "Батерия"
                    },
                    {
                        name: "laptop-other-accessories",
                        text: "Батерия"
                    }
                ]
            },
            {
                title: "Компютри и компоненти",
                elements: [
                    {
                        name: "computers",
                        text: "Настолни компютри"
                    },
                    {
                        name: "processors",
                        text: "Процесори"
                    },
                    {
                        name: "video-cards",
                        text: "Видео карти"
                    },
                    {
                        name: "motherboards",
                        text: "Дънни платки"
                    },
                    {
                        name: "ram",
                        text: "Оперативна памет"
                    },
                    {
                        name: "hdd",
                        text: "Хард дискове"
                    },
                    {
                        name: "computer-cases",
                        text: "Компютърни кутии"
                    },
                    {
                        name: "power-supplies",
                        text: "Захранващи блокове"
                    },
                    {
                        name: "ssd",
                        text: "Solid-state drives (SSD)"
                    },
                    {
                        name: "sound-cards",
                        text: "Звукови платки"
                    },
                    {
                        name: "pc-other-components",
                        text: "Други компоненти"
                    }
                ]
            }, {
                title: "Монитори и аксесоари",
                elements: [
                    {
                        name: "monitors",
                        text: "Монитори"
                    },
                    {
                        name: "monitor-accessories",
                        text: "Аксесоари за монитори"
                    }
                ]
            }, {
                title: "Софтуер",
                elements: [
                    {
                        name: "software-office",
                        text: "Офис приложения"
                    },
                    {
                        name: "software-desktop",
                        text: "Настолни приложения"
                    },
                    {
                        name: "software-os",
                        text: "Операционни системи"
                    },
                    {
                        name: "software-os",
                        text: "Операционни системи"
                    },
                    {
                        name: "software-antivirus",
                        text: "Антивирусни приложения"
                    },
                    {
                        name: "software-others",
                        text: "Други приложения"
                    }
                ]
            }, {
                title: "Принтери и скенери",
                elements: [
                    {
                        name: "laser-printers",
                        text: "Лазерни принтери"
                    },
                    {
                        name: "inject-printers",
                        text: "Мастиленоструйни принтери"
                    },
                    {
                        name: "scanners",
                        text: "Скенери"
                    },
                    {
                        name: "printer-consumables",
                        text: "Касети тонери и други консумативи"
                    }
                ]
            }, {
                title: "Периферия",
                elements: [
                    {
                        name: "printer-consumables",
                        text: "Мишки"
                    },
                    {
                        name: "printer-consumables",
                        text: "Клавиатури"
                    },
                    {
                        name: "printer-consumables",
                        text: "Рутери"
                    },
                    {
                        name: "printer-consumables",
                        text: "Суичове"
                    },
                    {
                        name: "printer-consumables",
                        text: "USB памет"
                    },
                    {
                        name: "printer-consumables",
                        text: "Външчни хард дискове"
                    },
                    {
                        name: "printer-consumables",
                        text: "Външни SSD"
                    },
                    {
                        name: "pc-speakers",
                        text: "Тонколони"
                    },
                    {
                        name: "headphones",
                        text: "Слушалки"
                    },
                    {
                        name: "web-camera",
                        text: "Уеб камери"
                    }
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
                elements: [
                    {
                        name: "tv",
                        text: "Телевизори"
                    },
                    {
                        name: "tv-accessories",
                        text: "Аксесоари"
                    }
                ]
            },
            {
                title: "Аудио",
                elements: [
                    {
                        name: "home-cinema",
                        text: "Системи за домашно кино"
                    },
                    {
                        name: "audio-systems",
                        text: "Аудио системи"
                    },
                    {
                        name: "multimedia-systems",
                        text: "Мултимедийни системи"
                    },
                    {
                        name: "speakers",
                        text: "Тонколони"
                    },
                    {
                        name: "audio-others",
                        text: "Други"
                    }
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
                elements: [
                    {
                        name: "refrigerators",
                        text: "Хладилници"
                    },
                    {
                        name: "cooler-showcase",
                        text: "Хладилни витрини"
                    },
                    {
                        name: "freezers",
                        text: "Фризери"
                    },
                    {
                        name: "freezer-chests",
                        text: "Фризерни ракли"
                    }
                ]
            },
            {
                title: "Пералня техника",
                elements: [
                    {
                        name: "laundry",
                        text: "Перални"
                    },
                    {
                        name: "dryers",
                        text: "Сушилни"
                    }
                ]
            },
            {
                title: "Съдомиялна техника",
                elements: [
                    {
                        name: "dishwashers",
                        text: "Съдомиялни машини"
                    }
                ]
            },
            {
                title: "Готварски печки",
                elements: [
                    {
                        name: "cookers",
                        text: "Готварска печка"
                    },
                    {
                        name: "hobs",
                        text: "Котлони"
                    },
                    {
                        name: "electric-ovens",
                        text: "Електрически фурни"
                    },
                    {
                        name: "microwave-ovens",
                        text: "Микровълнови фурни"
                    },
                    {
                        name: "hoods",
                        text: "Абсорбатори"
                    }
                ]
            },
            {
                title: "Бойлери, климатици и уреди за отопление",
                elements: [
                    {
                        name: "air-conditioners",
                        text: "Климатици"
                    },
                    {
                        name: "electric-converters",
                        text: "Електрически конвертори"
                    },
                    {
                        name: "fan-stoves",
                        text: "Вентилаторни печки"
                    },
                    {
                        name: "boilers",
                        text: "Бойлери"
                    },
                    {
                        name: "electric-fireplaces",
                        text: "Електрически камини"
                    },
                    {
                        name: "electric-radiators",
                        text: "Електрически радиатори"
                    }
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
                    {
                        name: "vacuum-cleaners",
                        text: "Прахосмукачки"
                    },
                    {
                        name: "Финанси и счетоводство",
                        text: "Ютии"
                    },
                    {
                        name: "sewing-machines",
                        text: "Шевни машини"
                    },
                    {
                        name: "ironing-boards",
                        text: "Дъски за гладене"
                    }
                ]
            },
            {
                title: "Машини за напитки",
                elements: [
                    {
                        name: "espresso-machines",
                        text: "Кафе автомати и еспресо машини"
                    },
                    {
                        name: "coffee-machines",
                        text: "Кафемашини"
                    },
                    {
                        name: "coffee-grinders",
                        text: "Кафемелачки"
                    },
                    {
                        name: "juicers",
                        text: "Сокоизтисквачки"
                    }
                ]
            },
            {
                title: "Кухненски уреди",
                elements: [
                    {
                        name: "electric-grills",
                        text: "Електрически скари"
                    },
                    {
                        name: "deep-fryers",
                        text: "Фритюрници"
                    },
                    {
                        name: "bakeries",
                        text: "Хлебопекарни"
                    },
                    {
                        name: "mixers",
                        text: "Миксери"
                    },
                    {
                        name: "blenders",
                        text: "Блендери"
                    },
                    {
                        name: "toasters",
                        text: "Тостери"
                    }
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
                    {
                        name: "playstation",
                        text: "Playstation"
                    },
                    {
                        name: "nintendo",
                        text: "Nintendo"
                    },
                    {
                        name: "xbox",
                        text: "Xbox"
                    }
                ]
            },
            {
                title: "Игри",
                elements: [
                    {
                        name: "games-console",
                        text: "Конзолни"
                    },
                    {
                        name: "games-board",
                        text: "Настолни"
                    },
                    {
                        name: "games-pc",
                        text: "Компютърни"
                    }
                ]
            },
            {
                title: "Фитнес",
                elements: [
                    {
                        name: "fitness-ergometers",
                        text: "Велоергометри"
                    },
                    {
                        name: "fitness-treadmills",
                        text: "Бягащи пътеки"
                    },
                    {
                        name: "fitness-rowing-machines",
                        text: "Гребни тренажори"
                    },
                    {
                        name: "fitness-weights",
                        text: "Тежести"
                    },
                    {
                        name: "fitness-dumbbells",
                        text: "Гири и дъмбели"
                    },
                    {
                        name: "fitness-equipment",
                        text: "Фитнес уреди"
                    }
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
                    {
                        name: "dslr",
                        text: "DSLR фотоапарати"
                    },
                    {
                        name: "mirrorless",
                        text: "Mirrorless фотоапарати"
                    },
                    {
                        name: "compact-cameras",
                        text: "Компактни фотоапарати"
                    },
                    {
                        name: "instant-cameras",
                        text: "Фотоапарати за моментни снимки"
                    },
                    {
                        name: "lenses",
                        text: "Обективи"
                    }
                ]
            },
            {
                title: "Видеокамери и аксесоари",
                elements: [
                    {
                        name: "video-cameras",
                        text: "Видеокамери"
                    },
                    {
                        name: "drones",
                        text: "Дронове"
                    },
                    {
                        name: "sport-cameras",
                        text: "Спортни видеокамери"
                    },
                    {
                        name: "video-others",
                        text: "Други аксесоари"
                    }
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
                    {
                        name: "home-sofas",
                        text: "Дивани"
                    },
                    {
                        name: "home-bedding",
                        text: "Спални комплекти"
                    },
                    {
                        name: "home-wardrobes",
                        text: "Гардероби"
                    },
                    {
                        name: "home-tables",
                        text: "Маси"
                    },
                    {
                        name: "home-armchairs",
                        text: "Фотьоли"
                    },
                    {
                        name: "home-chairs",
                        text: "Столове"
                    },
                    {
                        name: "home-carpets",
                        text: "Килими"
                    },
                    {
                        name: "home-curtains",
                        text: "Пердета"
                    },
                    {
                        name: "home-pillows",
                        text: "Възглавници"
                    },
                    {
                        name: "home-blankets",
                        text: "Одеяла"
                    },
                    {
                        name: "home-sleepwear",
                        text: "Спално бельо"
                    }
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
                {
                    name: "auto-gps",
                    text: "Навигационни системи"
                },
                {
                    name: "auto-audio",
                    text: "CD и DVD плейъри"
                },
                {
                    name: "auto-speakers",
                    text: "Субуфери и тонколони"
                },
                {
                    name: "auto-videorecorder",
                    text: "Видеорегистратори"
                },
                {
                    name: "auto-tyres",
                    text: "Автомобилни гуми"
                }
            ]
        }]
    };
    const booksElement = {
        icon: faBook,
        text: "Книги",
        subCategories: [{
            title: "Книги",
            elements: [
                {
                    name: "books-astrology",
                    text: "Астрология"
                },
                {
                    name: "books-architecture",
                    text: "Архитектура"
                },
                {
                    name: "books-kids",
                    text: "Детски книги"
                },
                {
                    name: "books-design",
                    text: "Дизайн"
                },
                {
                    name: "books-art",
                    text: "Изкуство"
                },
                {
                    name: "books-history",
                    text: "История"
                },
                {
                    name: "books-it",
                    text: "IT и информатика"
                },
                {
                    name: "books-criminal",
                    text: "Криминални романи"
                },
                {
                    name: "books-marketing",
                    text: "Маркетинг"
                },
                {
                    name: "books-math",
                    text: "Математика"
                },
                {
                    name: "books-medicine",
                    text: "Медицина и фармация"
                },
                {
                    name: "books-management",
                    text: "Мениджмънт"
                },
                {
                    name: "books-science",
                    text: "Наука и технология"
                },
                {
                    name: "books-psychology",
                    text: "Психология"
                },
                {
                    name: "books-classics",
                    text: "Световни романи и повести"
                },
                {
                    name: "books-fantasy",
                    text: "Фантастика и фентъзи"
                },
                {
                    name: "books-finance",
                    text: "Финанси и счетоводство"
                }
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
        if (selectedCategory.length !== 1) {
            return;
        }
        const selectedSubCategories = selectedCategory[0].subCategories;
        this.setState({subCategories: selectedSubCategories});
        this.updateSubMenuAccessible(true);
    }

    handleOnMouseOut(event) {
        // console.log(" Menu Mouse out event"+event);
        event.stopPropagation();
    }

    handleOnMouseLeave(event) {
        // event.stopPropagation();
        // console.log("Menu Mouse leave event"+event);
        if (this.props.menuAccess) {
            this.props.menuAccess(false);
        }
        this.updateSubMenuAccessible(false);
    }

    updateSubMenuAccessible(newState) {
        this.setState({isSubmenuAccessible: newState})
    }

    renderSubMenu() {
        if (this.state.isSubmenuAccessible) {
            return <SubMenu
                subCategories={this.state.subCategories}
                updateSubMenuStatus={this.updateSubMenuAccessible}
            />
        }
    }

    render() {

        return (

            <div id="nav-main-container-box"
                 onMouseOut={this.handleOnMouseOut}
                 onMouseLeave={this.handleOnMouseLeave}

            >
                <div id="navigation-container"
                    // onMouseLeave={this.handleOnMouseLeave}
                    // onMouseOut={this.handleOnMouseOut}
                >
                    <ul>
                        {this.state.menuElements.map((e, index) => {
                            return (
                                // <Link to={'/products/'+this.state.menuElements.text} >
                                <li className="nav-element" key={index} onMouseOver={this.handleOnMouseOver}
                                    // onMouseOut={this.handleOnMouseOut}
                                >
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