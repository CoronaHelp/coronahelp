import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import styled from "styled-components";

const StyledListGroupItem = styled(ListGroupItem)`
  border-left: ${({fulfilled}) => fulfilled  ? "3px solid goldenrod" : "3px solid #2C88D9"};
`

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
    <StyledListGroupItem fulfilled={fulfilled} style={{ marginBottom: 10 }}>
      <ListGroupItemHeading>{itemName}</ListGroupItemHeading>
      <CreatedText>
        <span>Created: </span> {createdTimestamp}
      </CreatedText>
      {fulfilled && (
        <FulfilledText>
          <span>⭐ Fulfilled!</span> {fulfilledTimestamp}
        </FulfilledText>
      )}
    </StyledListGroupItem>
  );
};

export default ProfileRequestCard;
