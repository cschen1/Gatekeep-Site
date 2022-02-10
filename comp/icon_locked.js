import React, { useState } from "react";
import Link from "next/link";

//https://stackoverflow.com/questions/64709508/display-text-when-hovering-over-an-icon-using-react-icon-library
// Used to get hover effect

export default function IconLocked({hover_img,image}) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
      tabIndex="-3"
    >
      {hover ? <Link href="/locked"><img className="item_icon_image" src ={hover_img}/></Link> 
        : <img className="item_icon_image" src={image}/>}
    </div>
  );
};
