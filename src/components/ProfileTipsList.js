import React from "react";
import { ListGroup } from "reactstrap";
import ProfileTipsCard from "./ProfileTipsCard";

const ProfileTipsList = ({ tips }) => {
  return (
    <ListGroup>
      {tips.map((tip, i) => (
        <ProfileTipsCard key={i} {...tip} />
      ))}
    </ListGroup>
  );
};

export default ProfileTipsList;
