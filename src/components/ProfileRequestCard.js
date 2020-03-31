import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import styled from "styled-components";

const CreatedText = styled(ListGroupItemText)`
    margin-bottom: 0px;
    span {
        color: green;
    }
`;

const FulfilledText = styled(ListGroupItemText)`
    span {
        color: goldenrod;
    }
`;

const ProfileRequestCard = ({
  itemName,
  createdTimestamp,
  fulfilled,
  fulfilledTimestamp
}) => {
  return (
    <ListGroupItem style={{ marginBottom: 10 }}>
      <ListGroupItemHeading>{itemName}</ListGroupItemHeading>
      <CreatedText>
        <span>Created: </span> {createdTimestamp}
      </CreatedText>
      {fulfilled && (
        <FulfilledText>
          <span>⭐ Fulfilled!</span> {fulfilledTimestamp}
        </FulfilledText>
      )}
    </ListGroupItem>
  );
};

export default ProfileRequestCard;
