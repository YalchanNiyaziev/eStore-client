import React from 'react';
import '../../style/profile/Profile.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons/faPhoneAlt";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";

export default class Profile extends React.Component {
    render() {
        return <div id="profile-page-main-container">
            <div id="fast-nav-container">
                <ul id="fast-nav-list-box">
                    <li className="fast-nav-elem">
                        Моят акаунт
                    </li>
                    <hr/>
                    <li className="fast-nav-elem">
                        Моите поръчки
                    </li>
                    <hr/>
                    <li className="fast-nav-elem">
                        Любими
                    </li>
                    <hr/>
                    <li className="fast-nav-elem">
                        Моите ревюта
                    </li>
                    <hr/>
                    <li className="fast-nav-elem">
                        Лоялен клиент
                    </li>
                    <hr/>
                    <li className="fast-nav-elem">
                        Върнати продукти
                    </li>
                </ul>
            </div>
            <div id="profile-info-box">
                <div id="profile-main-info-box">
                    <div id="main-info">
                        <p className="profile-box-title">Данни на потребителя</p>
                        <div id="main-info-inner-box">
                            <div id="profile-image-box">
                                <img id="profile-image"
                                     src="https://media13.s-nbcnews.com/i/MSNBC/Components/Video/201911/tdy_sat_baby_yoda_191123_1920x1080.jpg"/>
                            </div>
                            <div id="profile-info-text">
                                <div className="profile-info-row">
                                    <p className="profile-info-key">
                                        <span className="info-icon"><FontAwesomeIcon icon={faUser}/></span>
                                        Име:</p>
                                    <p className="profile-info-value">Николай Малинов</p>
                                </div>
                                <div className="profile-info-row">
                                    <p className="profile-info-key"><span className="info-icon"><FontAwesomeIcon
                                        icon={faAt}/></span>
                                        Имейл:</p>
                                    <p className="profile-info-value">hdhkjdgkdblnkasl@gmail.com</p>
                                </div>
                                <div className="profile-info-row">
                                    <p className="profile-info-key">
                                        <span className="info-icon"><FontAwesomeIcon icon={faPhoneAlt}/></span>
                                        Телефон:</p>
                                    <p className="profile-info-value">0877356464</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="info-edit">
                            <a href="">Редактиране на данните</a>
                        </div>
                    </div>
                </div>
                {/*<div id="profile-main-event-box">*/}
                {/*</div>*/}
                <div id="profile-additional-info-box">
                    <div id="profile-info-address-box" className="additional-info-mini-box">
                        <p className="additional-info-title">Моите адреси</p>
                        <p className="additional-info-text">
                            <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            Еконт Варна Колхозен пазар
                        </p>
                        <p className="additional-info-text">
                            <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            офис на еконт, Омуртаг, Търговище
                        </p>
                        <p className="additional-info-text">
                            <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            офис на еконт, Омуртаг, Търговище
                        </p>
                        <p className="additional-info-text">
                            <span className="info-icon"><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            офис на еконт, Омуртаг, Търговище лдкдлдлл дфсдфс
                        </p>
                        <hr/>
                        <div className="info-edit">
                            <a href="">Редактиране на адрес</a>
                        </div>
                    </div>
                    <div id="profile-info-receiver-box" className="additional-info-mini-box">
                        <p className="additional-info-title">Данни за фактуриран</p>
                    </div>
                    <div id="profile-info-cards-box" className="additional-info-mini-box">
                        <p className="additional-info-title">Моите карти</p>
                    </div>
                </div>
            </div>
        </div>
    }
}