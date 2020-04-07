import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import styled from "styled-components";


const StyledListGroupItem = styled(ListGroupItem)`
  border-left: 3px solid green;
`

const StyledListGroupItemHeading = styled(ListGroupItemHeading)`
  font-size: 1.8rem;
`

const LocationNameText = styled(ListGroupItemText)`
  margin-bottom: 0px;
`;

const LocationAddressText = styled(ListGroupItemText)`
  color: gray;
`;

const ProfileTipsCard = ({ tip, name, address }) => {
  return (
    <StyledListGroupItem style={{ marginBottom: 10 }}>
      <StyledListGroupItemHeading>{tip}</StyledListGroupItemHeading>
      <LocationNameText>{name}</LocationNameText>
      <LocationAddressText>{address}</LocationAddressText>
    </StyledListGroupItem>
  );
};

export default ProfileTipsCard;
