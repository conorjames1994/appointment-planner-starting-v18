import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title" value={props.name}>{props.name}</p>
      {Object.values(props.description).map((value, index) =>
      {
        return (
          <p className="tile" key={index} value={value}>{value}</p>
        )

      }
      )}
      
     
      
    </div>
  );
};
