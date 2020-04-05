import React, { useState } from "react";
import axios from "axios";
import "../requests.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RequestsDisplay = () => {
  const [request, setRequest] = useState([]);
  const [zip, setzip] = useState([]);
  const [modal, setModal] = useState(false);
  const [requestInModal, setRequestInModal] = useState(null);
  const handleChange = e => setzip(e.target.value);
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const url = `${ backendURL }/api/requests/all/${ zip }/25`;
  const searchRequests = () => (
    axios.get(url)
      .then(res => {
        console.log("res.data", res.data)
        setRequest(res.data)
      })
      .catch(err => console.log("my error:" + err))
  );
  const toggle = () => setModal(!modal);
  const handleClick = requestItem => {
    setRequestInModal(requestItem);
    toggle();
  };
  return (
    <div className = "requestContainer">
      <input
        type="text"
        placeholder="Zip Code"
        value={zip}
        onChange={handleChange}
      />
      <button onClick = { searchRequests }>Submit</button>
      { request.length ?
        <div>
          {request.map((r, i) => (
            <div key = { i } className = "mycontainer">
              <h1 onClick = { () => handleClick(r) }>{r.title}</h1>
            </div>
          ))}
        </div>
        :
        <p>No requests found.</p>
      }
      { requestInModal &&
        <Modal isOpen={modal} toggler={toggle} className="danger">
          <ModalHeader toggle={toggle}>{requestInModal.title}</ModalHeader>
          <ModalBody>
          {requestInModal.description || 'No description provided.'}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      }
    </div>
  );
};

export default RequestsDisplay;
