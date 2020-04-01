import React,{ useState } from "react";
import { ListGroup } from "reactstrap";

import ProfileRequestCard from "./ProfileRequestCard";
import Paginator from "./Paginator";

const ProfileRequestsList = ({ requests }) => {

  const [ pages, setPages ] = useState({ start: 0, end: 5 })
  console.log(pages)
  return (
    <ListGroup>
      {requests.slice(pages.start, pages.end).map((request, i) => (
        <ProfileRequestCard key={i} {...request} />
      ))}
      <Paginator itemsLength={requests.length} itemsPerPage={5} setPages={setPages} pages={pages} />
    </ListGroup>
  );
};

export default ProfileRequestsList;
