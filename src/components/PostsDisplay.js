import React from "react";
import Spacepost from "./Spacepost";
import "./PostsDisplay.css";

function PostsDisplay({ content }) {
  let projectItems;
  console.log (content)

  projectItems = content.map((cont) => {
    return (
      <div>
          <Spacepost camera = {cont[0]} id = {cont[1]} img = {cont[2]} date = {cont[3]}/>
      </div>
    );
  });

  return <div id="projectsList">
      <div className = "title">
        Spacestagram
      </div>

      <div className = "subtitle">
        Brought to you by NASA's Mars Rover API
      </div>
    
        {projectItems}

    </div>;
}
export default PostsDisplay;
