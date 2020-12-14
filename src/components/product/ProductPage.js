import React from 'react';
import '../../style/product/ProductPage.css'

export default class ProductPage extends React.Component {

    createProductMainBox(images, name, price,description) {
        return <div id="selected-product-main-box">
            <div className="selected-product-box-element" id="selected-product-image-box">
                <img id="showed-image" src={images[0]}/>
                <div id="additional-images-box">
                    {images.map((e, index) => {
                            return (
                                <img key={index} className="other-images" src={images[0]}/>
                            )
                        }
                    )}

                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}
                    {/*<img className="other-images" src={images[0]}/>*/}

                </div>
            </div>

            <div className="selected-product-box-element" id="selected-product-info">
                <h2>{name}</h2>
                <div>
                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Марка:</p>
                        <p className="pr-info-p-a">Huawei</p>
                    </div>

                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Категория:</p>
                        <p className="pr-info-p-a">Смартфони и таблети</p>
                    </div>
                    <hr/>

                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Доставка:</p>
                        <p className="pr-info-p-a">Безплатна</p>
                    </div>

                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Ползи:</p>
                        <p className="pr-info-p-a">Със този продукт печелите 8 eStore точки</p>
                    </div>
                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Гаранция:</p>
                        <p className="pr-info-p-a">Включена гаранция за 24 месеца</p>
                    </div>

                    <hr/>

                    <div className="pr-info-box">
                        <p className="pr-info-p-q">Описание на продукта:</p>
                        <p className="pr-info-p-a">{description}</p>
                    </div>
                </div>
            </div>
            <div className="selected-product-box-element" id="selected-product-price-add-button">
                <div id="selected-price-box">
                    <p>{price}
                        <sup>99</sup><span>лв</span></p>
                </div>
                <div id="selected-button-box">
                    <form>
                        <button>Добави в количка</button>
                    </form>

                </div>
            </div>
        </div>;
    }

    createProductSpecifications(specifications) {
        const whiteBoxClassName = "specifications-item-w";
        const greyBoxClassName = "specifications-item-g";
        return <div id="product-specifications-container">
            <p id="specifications-header">Характеристики</p>
            <hr/>
            <div id="specifications-box">

                {specifications.map((e, index) => {
                        return (
                            <div key={index} className={index%2===0?greyBoxClassName:whiteBoxClassName}>
                                <p className="specifications-item-k">{e.key}: </p>
                                <p className="specifications-item-v">{e.value}</p>
                            </div>
                        )
                    }
                )}

            </div>
        <hr/>
        </div>
    }

    createProductReviews(reviews) {
        return undefined;
    }

    render() {

        const index = this.props.selectedItem;
        const product = this.props.products[index];
        const productMainBox = this.createProductMainBox(product.images, product.name, product.price, product.description);
        const spec = product.specifications;
        const productSpecifications = this.createProductSpecifications(spec);
        // const productReviews = createProductReviews(props.product.reviews);

        return (
            <div id="selected-product-container">
                {productMainBox}
                {productSpecifications}
                {/*{productReviews}*/}
            </div>);
    }
}