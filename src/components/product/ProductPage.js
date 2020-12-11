import React from 'react';
import '../../style/product/ProductPage.css'

export default class ProductPage extends React.Component {

    createProductMainBox(images, name, price) {
        return <div id="selected-product-main-box">
            <div className="selected-product-box-element" id="selected-product-image-box">
                <img id="showed-image" src={images[0]}/>
                <div id="additional-images-box">
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    <img className="other-images" src={images[0]}/>
                    {/*<img className="other-images" src={images[0]}/>*/}

                </div>
            </div>

            <div className="selected-product-box-element" id="selected-product-info">
                <h2>Redmi Note 9 Pro</h2>
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
                        <p className="pr-info-p-a">Lorem Ipsumo the leap into electronic typ60s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.ions of Lorem Ipsum.t of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="selected-product-box-element" id="selected-product-price-add-button">
                <div id="selected-price-box">
                    <p>389
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
        return <div id="product-specifications-container">
            <p id="specifications-header">Характеристики</p>
            <hr/>
            <div id="specifications-box">

                <div className="specifications-item-g">
                    <p className="specifications-item-k">Цвят: </p>
                    <p className="specifications-item-v">Сив</p>
                </div>
                
                <div className="specifications-item-w">
                    <p className="specifications-item-k">Бранд:</p>
                    <p className="specifications-item-v">Huawei</p>
                </div>

                <div className="specifications-item-g">
                    <p className="specifications-item-k">Цвят: </p>
                    <p className="specifications-item-v">Сив</p>
                </div>

                <div className="specifications-item-w">
                    <p className="specifications-item-k">БАТЕРИЯ:</p>
                    <p className="specifications-item-v">4300 mAh</p>
                </div>

                <div className="specifications-item-g">
                    <p className="specifications-item-k">КАМЕРА: </p>
                    <p className="specifications-item-v">64 mp</p>
                </div>

                <div className="specifications-item-w">
                    <p className="specifications-item-k">Тип на дисплея::</p>
                    <p className="specifications-item-v">Super Amoled</p>
                </div>

                <div className="specifications-item-g">
                    <p className="specifications-item-k">Допълнителна памет MicroSD:</p>
                    <p className="specifications-item-v">Не</p>
                </div>

                <div className="specifications-item-w">
                    <p className="specifications-item-k">RAM:</p>
                    <p className="specifications-item-v">8 gb</p>
                </div>

                <div className="specifications-item-g">
                    <p className="specifications-item-k">ВОДОУСТОЙЧИВ: </p>
                    <p className="specifications-item-v">Да</p>
                </div>
            </div>

        </div>
    }

    createProductReviews(reviews) {
        return undefined;
    }

    render() {


        const product = this.props.products[this.props.selected];
        const productMainBox = this.createProductMainBox(product.images, product.name, product.price)
        const productSpecifications = this.createProductSpecifications(product.specifications);
        // const productReviews = createProductReviews(props.product.reviews);

        return (
            <div id="selected-product-container">
                {productMainBox}
                {productSpecifications}
                {/*{productReviews}*/}
            </div>);
    }
}