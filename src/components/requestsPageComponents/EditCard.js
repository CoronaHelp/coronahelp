import React from 'react';
import { RequestCard, RequestButton, RequestText, RequestStatus, RequestTitle, RequestContainer } from './styledRequestComponents'
import RequestPost from './RequestPost'
const EditCard = (props) => {
  return (
    <RequestContainer>
      <RequestPost />
    </RequestContainer>
  );
};

export default EditCard;