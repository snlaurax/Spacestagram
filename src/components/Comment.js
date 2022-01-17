import React from "react";
import "./Comment.css";

export default function Comment(props) {
    return <div className = "comment">
        <strong>Shoppie </strong>{props.text}
    </div>
}
