import React, { useState, useEffect } from "react";
import Spacepost from "./Spacepost";
const axios = require('axios');

//u got this (y) 

function PostsDisplay() {

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk"
      );
      const data = await res.json();
      setPhotoData(data.photos);
      console.log(typeof data.photos);
    }
  }, []);

  if (!photoData) return <div />;

const itemRows = [];
 for (let item of photoData) {
   const row = (
     <tr key={item.id}>
       <td key={2}>{item.img_src}</td>
     </tr>
   );
   itemRows.push(row);
 }

  return (
    <div>
       {itemRows}
    </div>
)
}

export default PostsDisplay;

