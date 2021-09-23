import React from "react";

function Home(){
    return(
        <div>
            <div className="add-to-cart">
            <img src="https://img.icons8.com/material/100/000000/shopping-cart--v1.png"/>
            </div>
            <h1>
                Home Component
            </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Iphone</span>
                    <span>Price-$1200.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;