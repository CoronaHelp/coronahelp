import React, { useState } from "react";
import { ListGroup } from "reactstrap";
import ProfileTipsCard from "./ProfileTipsCard";
import Paginator from "./Paginator";

const ProfileTipsList = ({ tips }) => {

  const [ pages, setPages ] = useState({ start: 0, end: 5 })

  return (
    <ListGroup>
      {tips.map((tip, i) => (
        <ProfileTipsCard key={i} {...tip} />
      ))}
      <Paginator itemsLength={tips.length} itemsPerPage={5} setPages={setPages} pages={pages} />
    </ListGroup>
  );
};

export default ProfileTipsList;
