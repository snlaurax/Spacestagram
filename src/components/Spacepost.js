import React, { useState } from "react";
import "./Spacepost.css";
import { FaHeart } from 'react-icons/fa';

export default function Spacepost({ camera, id, date, img }) {

  const [liked, setLiked] =  useState({
    liked: false
  })

  const toggleLike = () => {
    setLiked(!liked);
    console.log (liked)
  }

  const changeColor= liked ? "#D3D3D3" : "red" 

  return (
    <div className="post">
      <div className="image">
        <img src={img} alt="something here" />
      </div>

      <div className="text">
        <div className="posttitle">
          {camera} {id}
        </div>

        <div className="date">{date}</div>
      </div>

      <button className="likeBtn" onClick= {toggleLike}>
          <FaHeart style = {{color: changeColor}}/>
      </button>
    </div>
  );
}
