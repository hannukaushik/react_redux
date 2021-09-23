import React from "react";
const User = (props) => {
    console.warn(props.data)
    const{data}=props
    return (
    <div>
        <h2>
            User component
        </h2>
        <h4>
            {data.name}
            {data.age}
        </h4>
    </div>)
}
export default User;