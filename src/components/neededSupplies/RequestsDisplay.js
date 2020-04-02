import React, { useEffect, useState } from "react";
import Requests from "./Request"
import "../requests.css"
import axios from "axios"

const RequestsDisplay = () => {
  const [request, setRequest] = useState([]);
  const [zip, setzip] = useState([])
  const [search, setSearch] = useState([])

  const [modal, setModal] = useState(false);
  const handleChange = e => {
    setzip(e.target.value);
  };
  useEffect( ()=>{
    const fetch = async ()=>{
    const result = await axios.get(`https://supplyhelper-be-staging.herokuapp.com/api/requests/all/${search}/25`)
    .then((res)=>{
      console.log("My Res : ",res)
      setRequest(res.data)
    })
    .catch((err)=>console.log("my error : " + err))
    }
    fetch()
  },[search])
  const toggle = () => setModal(!modal);
 
  return (
    <div className = "requestContainer">
      <input
        type="text"
        placeholder="Zip Code"
        value={zip}
        onChange={handleChange}
      />
      <button onClick = {()=>setSearch(zip)} > Submit</button>
      
      {request.map(t => {
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
