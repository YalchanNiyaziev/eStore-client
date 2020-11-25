import React from 'react';
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Main from "./Main";

export default class Home extends React.Component {
    render() {
        return (
            <>
                <AppHeader/>
                <Main/>
                <AppFooter/>
            </>
        );
    }

}