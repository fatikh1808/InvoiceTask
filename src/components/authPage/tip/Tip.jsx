import React from "react";

const Tip = (props) => {

    const {disable, text} = props;

    if (disable) {
        return (
            <h5>
                {text}
            </h5>
        )
    } else {
        return null;
    }
}

export default Tip;