import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 
 useEffect(() => {
  props.contacts.forEach((contact) =>
  {
    if(name === contact.name){
      setDuplicate(true)
    }
  }
  )
 }, [name]);

 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);;

  const handleSubmit = (e) => {
    e.preventDefault();

    props.contacts.forEach((contact) => {
      if(duplicate === false){
        props.addContact(name, phone, email);
        setEmail('');
        setName('');
        setPhone('');
      } else {
        alert('Name already added')
      }
    });
    
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm handleSubmit={handleSubmit} name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={props.contacts}/>
      </section>
    </div>
  );
};
