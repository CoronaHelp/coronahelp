import React from "react";
import { ListGroup } from "reactstrap";

import ProfileRequestCard from "./ProfileRequestCard";
import Paginator from "./Paginator";

const ProfileRequestsList = ({ requests }) => {
  return (
    <ListGroup>
      {requests.map((request, i) => (
        <ProfileRequestCard key={i} {...request} />
      ))}
      <Paginator />
    </ListGroup>
  );
};

export default ProfileRequestsList;
