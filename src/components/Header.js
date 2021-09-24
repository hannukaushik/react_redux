import React from "react";

function Header(props) {
    console.warn("Home", props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="https://img.icons8.com/material/100/000000/shopping-cart--v1.png" />
            </div>
            
        </div>
    )
}

export default Header;