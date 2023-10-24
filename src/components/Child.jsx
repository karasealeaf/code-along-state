import HB1 from "../assets/HB1.jpg";
import { useState } from "react";

export default function Child({ name }) {
  //console.log(useState(0))
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>{name} is the Child</p>
      <img src={HB1} onClick={handleLikes} />
      <span>❤️{likes}</span>
    </div>
  );
}
