import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  

  return (
    <div>
      
      {props.tile.map((contact, index) => {
 const {name, ...rest} = contact;
return (
  <div>
    <br/>
  <Tile key={index} name={name} description={rest}/>
  
  
  <br/>
  </div>

)
})}


    </div>
  );
};
