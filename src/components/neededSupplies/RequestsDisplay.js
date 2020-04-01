import React, { useEffect, useState } from "react";
import Requests from "./Request"
import "../requests.css"
const needs = [
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    zip : "12345",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    zip: "12345",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need ",
    fullfilled: false,
    item: "diapers",
    zip : "12345",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "I need help",
    fullfilled: false,
    item: "diapers",
    zip : "12345",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  },
  {
    createdTimestamp: "10/24/81",
    title: "help",
    fullfilled: false,
    item: "diapers",
    zip : "99999",
    message:
      "Spicy jalapeno bacon ipsum dolor amet doner tri-tip shankle hamburger tail leberkas meatball t-bone turkey. Pastrami jowl filet mignon tongue tail, ribeye rump. T-bone pork loin turducken pork chop. Capicola brisket pork porchetta flank jowl. Short loin leberkas kielbasa capicola chislic ground round. Short loin leberkas kevin, brisket beef pork loin ground round salami tri-tip venison andouille ham hock. Corned beef meatball short ribs alcatra chicken burgdoggen andouille pastrami prosciutto beef beef ribs frankfurter sausage salami meatloaf."
  }
];
const RequestsDisplay = () => {
  const [request, setRequest] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  const toggle = () => setModal(!modal);
  useEffect(() => {
    setRequest(needs);
  },[]);
  useEffect(() => {
    const results = request.filter(req =>
     
        req.zip.startsWith(searchTerm)
      
      // req.zip.includes(searchTerm)
    
  );
  setSearchResults(results);
}, [searchTerm]);
  
  return (
    <div className = "requestContainer">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.map(t => {
        return(
        <div  className = "mycontainer">
        <h1 onClick = {()=>toggle()}>{t.title}</h1>
        <Requests toggler ={toggle} title = {t.title} description = {t.message} modal={modal}/>
        </div>
      )})}
    </div>
  );
}

export default RequestsDisplay;
