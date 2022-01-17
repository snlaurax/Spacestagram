import React, { useState } from "react";
import "./Spacepost.css";
import { FaHeart } from 'react-icons/fa';
import Comment from "./Comment";

export default function Spacepost({ camera, id, date, img }) {

  /* LIKES */
  const [liked, setLiked] =  useState({
    liked: false
  })

  const toggleLike = () => {
    setLiked(!liked);
    console.log (liked)
  }

  const changeColor= liked ? "#D3D3D3" : "red" 

  /* COMMENTS */
  const [ inputText, setInputText ] = useState('');
 const [ comments, setComments ] = useState([]);

  const updateInputBox = (event) => {
      setInputText(event.target.value)
  }

  const addComment = () => {

    if (inputText !== '')
    {
      setComments([...comments, <Comment key={inputText} text={inputText} />]);
      setInputText('');
    }
}

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

      <div className='comments'>
          {comments}
      </div>

        <input className = "input" type='text' value={inputText} onChange={updateInputBox}/>
        <button onClick={addComment} className = "commentBtn"> Post </button>

    </div>
  );
}
