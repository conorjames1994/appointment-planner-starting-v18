import React from "react";


export const ContactPicker = (props) => {
  return (
    <div>

      <p>Pick a Contact</p>
      <select  id="contactPicker" value={props.value} name={props.name} onChange={props.onChange}>
      <option value={""} key={-1}>Choose a contact</option>
       {props.contactName.map((contact) => {

        return (
          
          
          <option  value={contact} key={contact}>{contact}</option>
        )
       })}
      </select>
    </div>
  );
};
