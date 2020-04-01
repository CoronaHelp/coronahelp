import React, { useEffect, useState } from "react";
import Requests from "./Request"
import "../requests.css"
import axios from "axios"

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
