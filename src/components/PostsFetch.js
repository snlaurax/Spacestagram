import React, { useState, useEffect } from "react";
import PostsDisplay from "./PostsDisplay";

function PostsFetch() {
console.log ("postsfetch")
  const [photoData, setPhotoData] = useState(null);
  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=5B6oJsSCQyekXZvNOKpsUhRPl1e7FHqjIAyHpybk"
      );
      const data = await res.json();
      setPhotoData(data.photos);
      console.log(data.photos);
    }
  }, []);

  if (!photoData) return <div />;

 let bigarr = []
  //so this is javascript and return is jsx 
  for (const photo of Object.entries(photoData)) {
    let arr = []
    //console.log(photo[1].camera.name)
    //console.log(typeof photo[1].camera.name)
    //console.log(photo[1].id)
    //console.log(photo[1].img_src)
    //console.log(photo[1].earth_date)
    arr.push (photo[1].camera.name)
    arr.push (photo[1].id)
    arr.push (photo[1].img_src)
    arr.push (photo[1].earth_date)
    bigarr.push (arr)
  }

 return ((
  <div>
    {<PostsDisplay content = {bigarr} />}
  </div>
));

}
export default PostsFetch;

