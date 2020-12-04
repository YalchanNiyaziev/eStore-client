import React from 'react';
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import Main from "./Main";
import ListProduct from "./product/ListProduct";


export default class Home extends React.Component {
    render() {
        return (
            <>
                <AppHeader/>
                {/*<Main/>*/}
                <ProductPage/>
                {/*<ListProduct/>*/}
                {/*<TodoList/>*/}
                <AppFooter/>
            </>
        );
    }

}