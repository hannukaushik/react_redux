import React from "react";

function Home(props) {
    console.warn("Home", props.data)
    return (
        <div>
            
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
                    <button onClick={() =>
                        props.addToCartHandler({ price: 1000,name:"iphone 11" })}>
                        Add To Cart</button>
                    <button className="remove-cart-btn" onClick={() =>
                        props.removeToCartHandler({ price: 1000,name:"iphone 11" })}>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;