import React from "react";
import "../style/BrandsFilter.css"

export default function BrandsFilter(props) {
    return(
        <div id="brands-container">
            <form id="product-brands-form">
                {props.brands.map((e, index) => (
                        <div key={index} className="brand-container-elem">
                            <input type="checkbox" id={"brand" + index} className="brand-checkbox" value={e}/>
                            <label htmlFor={"brand" + index}>{e}</label>
                        </div>
                    )
                )}
            </form>
        </div>
    );
}