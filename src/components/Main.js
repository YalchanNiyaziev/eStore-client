import React from 'react';
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";
import Home from "./Home";
import ListProduct from "./product/ListProduct";
import ProductPage from "./product/ProductPage";
import ProductFilters from "./product/ProductFilters";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";
import {Route, Switch, useRouteMatch} from "react-router-dom";


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemId: 0,
            isSelected: false,
            brands: [],
            priceMin: 0,
            priceMax: 1,
            priceRangeStart: 0,
            priceRangeEnd: 0,
            specificFilters: [],
            pages: 0,
            category: '',
            products: [
                {
                    images: [""],
                    name: "",
                    price: null,
                    specifications: [{key: "", value: ""}],
                    description: "",
                    alt: ""
                }
            ],

        }
    }

    componentDidMount() {
        const p1 = {
            images: ["https://s13emagst.akamaized.net/products/30533/30532919/images/res_7e123177908c5d321974713fa1b6973f.jpg"],
            name: "Смартфон Ulefone Note 9P, 64GB, 4G, Black",
            price: 219.99,
            specifications: [{key: "Brand", value: "Hugfghgfawei"}, {
                key: "Brand",
                value: "Huaghfhfgfjfgjdwei"
            }, {key: "Brand", value: "Huawei"}, {key: "Brand", value: "Hujjkhsssssssssjkhjkhawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a phone "
        }
        const p2 = {
            images: ["https://s13emagst.akamaized.net/products/30533/30532919/images/res_7e123177908c5d321974713fa1b6973f.jpg"],
            name: "Смартфон Xiaomi Redmi Note 9 Pro, Dual SIM, 128GB,",
            price: 475.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a white phone "
        }
        const p3 = {
            images: ["https://s13emagst.akamaized.net/products/33382/33381513/images/res_9c502e664bde724a8f8e180bbe1582c9.jpg"],
            name: "Смартфон Apple iPhone 12, 64GB, 5G, Black",
            price: 1799.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a Iphone "
        }
        const p4 = {
            images: ["https://s13emagst.akamaized.net/products/27773/27772388/images/res_93b93954e4ca32ce8828807d454d1bb4.jpg"],
            name: "Смартфон Samsung Galaxy A51, Dual SIM, 128GB, 4GB",
            price: 568.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a samsung phone "
        }
        const p5 = {
            images: ["https://s13emagst.akamaized.net/products/28810/28809243/images/res_065f2a05d5c0cab29b5b6d8b0d91dee3.jpg"],
            name: "Смартфон Huawei P40 Lite, Dual SIM, 128GB, 6GB RAM,",
            price: 393.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a China phone "
        }
        const p6 = {
            images: ["https://s13emagst.akamaized.net/products/27773/27772388/images/res_93b93954e4ca32ce8828807d454d1bb4.jpg"],
            name: "Смартфон Samsung Galaxy A51, Dual SIM, 128GB, 4GB",
            price: 568.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a samsung phone "
        }
        const p7 = {
            images: ["https://s13emagst.akamaized.net/products/28810/28809243/images/res_065f2a05d5c0cab29b5b6d8b0d91dee3.jpg"],
            name: "Смартфон Huawei P40 Lite, Dual SIM, 128GB, 6GB RAM,",
            price: 393.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a China phone "
        }
        const p8 = {
            images: ["https://s13emagst.akamaized.net/products/27773/27772388/images/res_93b93954e4ca32ce8828807d454d1bb4.jpg"],
            name: "Смартфон Samsung Galaxy A51, Dual SIM, 128GB, 4GB",
            price: 568.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a samsung phone "

        }
        const p9 = {
            images: ["https://s13emagst.akamaized.net/products/28810/28809243/images/res_065f2a05d5c0cab29b5b6d8b0d91dee3.jpg"],
            name: "Смартфон Huawei P40 Lite, Dual SIM, 128GB, 6GB RAM,",
            price: 393.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a China phone "
        }
        const p10 = {
            images: ["https://s13emagst.akamaized.net/products/27773/27772388/images/res_93b93954e4ca32ce8828807d454d1bb4.jpg"],
            name: "Смартфон Samsung Galaxy A51, Dual SIM, 128GB, 4GB",
            price: 568.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a samsung phone "
        }
        const p11 = {
            images: ["https://s13emagst.akamaized.net/products/28810/28809243/images/res_065f2a05d5c0cab29b5b6d8b0d91dee3.jpg"],
            name: "Смартфон Huawei P40 Lite, Dual SIM, 128GB, 6GB RAM,",
            price: 393.99,
            specifications: [{key: "Brand", value: "Huawei"}, {key: "Brand", value: "Huawei"}, {
                key: "Brand",
                value: "Huawei"
            }, {key: "Brand", value: "Huawei"}],
            description: "Lorem Ipsumo the leap into electronic typ60s with the release of\n" +
                "                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n" +
                "                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the\n" +
                "                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n" +
                "                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n" +
                "                            a type specimen book. It has survived not only five centuries, but also the leap into\n" +
                "                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s\n" +
                "                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n" +
                "                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            alt: "a China phone "
        }
        const productCollection = [];
        productCollection.push(p1);
        productCollection.push(p2);
        productCollection.push(p3);
        productCollection.push(p4);
        productCollection.push(p5);
        productCollection.push(p6);
        productCollection.push(p7);
        productCollection.push(p8);
        productCollection.push(p9);
        productCollection.push(p10);
        productCollection.push(p11);

        console.log('make ajax and update state');
        this.setState({
                brands: ['LG', 'Samsung', 'Sony', 'AEG', 'Panasonic', 'Arcelik', 'kjbfnkjdfbvdfkvb', 'hsd       dddddssasdasdadzxzzhsgshs jagssgs lllk'],
                priceMin: 900,
                priceMax: 1500,
                priceRangeStart: 900,
                priceRangeEnd: 1500,
                category: 'Мобилни телефони',
                products: productCollection
            }
        )
    }

    displayAllOrOnlySelected() {
        if (this.state.isSelected) {
            return <>
                <ProductPage
                    products={this.state.products}
                    selectedItem={this.state.selectedItemId}/>
            </>
        } else {
            return <>
                <ListProduct
                    updatePrice={this.updatePriceRange.bind(this)}
                    priceMin={this.state.priceMin}
                    priceMax={this.state.priceMax}
                    priceRangeStart={this.state.priceRangeStart}
                    priceRangeEnd={this.state.priceRangeEnd}
                    brands={this.state.brands}
                    categoryName={this.state.category}
                    products={this.state.products}
                    selectProduct={this.updateSelectedElementId.bind(this)}
                />
            </>
        }

    }

    updatePriceRange(newRangeStartPrice, newRangeEndPrice) {
        this.setState({priceRangeStart: newRangeStartPrice, priceRangeEnd: newRangeEndPrice})
    }

    updateSelectedElementId(newSelectedId) {
        this.setState({
            selectedItemId: newSelectedId,
            isSelected: true
        });
    }

    render() {
        const category = this.props.match.params.category;
        return (
            <>
                {/*<AppHeader/>*/}
                {/*<Home/>*/}
                {/*{this.displayAllOrOnlySelected()}*/}
                {/*<TodoList/>*/}
                {/*<Cart/>*/}
                {/*<Profile/>*/}
                {/*<AppFooter/>*/}

                <Switch>
                    <Route exact path='/products/:category' component={() => <ListProduct
                        updatePrice={this.updatePriceRange.bind(this)}
                        priceMin={this.state.priceMin}
                        priceMax={this.state.priceMax}
                        priceRangeStart={this.state.priceRangeStart}
                        priceRangeEnd={this.state.priceRangeEnd}
                        brands={this.state.brands}
                        categoryName={this.state.category}
                        products={this.state.products}
                        selectProduct={this.updateSelectedElementId.bind(this)}
                    />
                    }
                    />

                    <Route path={
                        // "/" + this.props.match.url +
                        // "/" + category +
                        "/products/:category/:productId"} component={() => <ProductPage
                        products={this.state.products}
                        selectedItem={this.state.selectedItemId}/>
                    }
                    />
                </Switch>
            </>
        );
    }


}