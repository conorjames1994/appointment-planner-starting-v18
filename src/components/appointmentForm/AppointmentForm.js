import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = (props, {
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleNameChange = ({target}) => {
    props.setName(target.value)
  }

  const handleDateChange = ({target}) => {
    props.setDate(target.value)
  }

  const handleTimeChange = ({target}) => {
    props.setTime(target.value)
  }

  const handleContactPicker = ({target}) => {
    props.setContact(target.value)
  }

  const contactName = useMemo(() => {
    return props.contacts.map((contact) => {
      return contact.name
    })
  }, [contacts])

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label for="name">Insert name</label>
        <input type="text" id="name" value={props.name} onChange={handleNameChange}/>
        
        <ContactPicker  onChange={handleContactPicker} contactName={contactName} value={props.contact} name="contact"/>
        
        <label for="date">Insert date</label>
      <input min={getTodayString} type="date" id="date" value={props.date} onChange={handleDateChange}/>
        
        <label for="time">Insert time</label>
        <input type="time" id="time" value={props.time} onChange={handleTimeChange}/>
        
        <button value="send" type="submit">Submit appointment</button>

      </form>
    </div>
  );
};
