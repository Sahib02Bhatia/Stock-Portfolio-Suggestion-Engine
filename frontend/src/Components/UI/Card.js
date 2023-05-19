import React from "react";
import classes from './Card.module.css'

const Scard = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Scard;