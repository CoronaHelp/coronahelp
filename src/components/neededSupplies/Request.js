import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Requests = (props) => {

 

  

  return (
    <div >
      
      <Modal isOpen={props.modal} toggler={props.toggle} className="danger">
        <ModalHeader toggle={props.toggler}>{props.title}</ModalHeader>
        <ModalBody>
         {props.description}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggler}>Do Something</Button>{' '}
          <Button color="secondary" onClick={props.toggler}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Requests;