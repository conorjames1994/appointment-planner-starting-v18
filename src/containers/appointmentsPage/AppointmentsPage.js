import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [name, setName] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const [contact, setContact] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addAppointment(name, date, time, contact);
   setDate('');
   setName('');
   setTime('');
   setContact('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={props.contacts} setContact={setContact} handleSubmit={handleSubmit} name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tile={props.appointments} />
      </section>
    </div>
  );
};