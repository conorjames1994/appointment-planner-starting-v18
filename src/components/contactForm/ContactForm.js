import React from "react";

export const ContactForm = (props, {
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleChangeName  = (e) => {
props.setName(e.target.value)
  }

  const handleChangePhone  = ({target}) => {
    props.setPhone(target.value)
      }

      const handleChangeEmail  = ({target}) => {
        props.setEmail(target.value)
          }

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <label for="name">Insert Name</label><br/>
      <input id="name" value={props.name} type="text" onChange={handleChangeName}/>
     
      <label for="phone">Insert phone number (+44 10 digits)</label><br/>
      <input id="phone"value={props.phone} type="tel" required pattern='^\+44[0-9]{10}$' onChange={handleChangePhone}/>
      
      <label for="email">Insert Email</label><br/>
      <input id="email" value={props.email} type="email" onChange={handleChangeEmail}/>
        
        <button type="submit" value="send">Submit</button>

      </form>
    </div>
  );
};

