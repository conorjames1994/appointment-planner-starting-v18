import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = useState([
  {name: "conor", number: "07501978187", email: 'conor.james@nhs.net',},
 ])
 const [appointments, setAppointments] = useState([
  {
    name: "Hannah Hirst",
    date: "12/08/2024",
    time: "12:30",
  }
 ])

  /*
  Implement functions to add data to
  contacts and appointments
  */
const makeContact = (name, number, email) =>
{
  return {
    name: name,
    number: number,
    email: email
  }
    };

const addContact = (name, number, email) => {
  const contact = makeContact(name, number, email);
  setContacts((prev) => {
    return [contact, ...prev]
  })
} 

const makeAppointment = (name, date, time, contact) =>
  {
    return {
      name: name,
      date: date,
      time: time,
      contact: contact,
    }
    };
  

  const addAppointment = (name, date, time, contact) => {
    const appointment = makeAppointment(name, date, time, contact);
    setAppointments((prev) => {
      return [appointment, ...prev]
    })
  } 

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} setContacts={setContacts}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
