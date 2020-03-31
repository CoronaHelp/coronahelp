import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import styled from "styled-components";

const LocationNameText = styled(ListGroupItemText)`
  margin-bottom: 0px;
`;

const LocationAddressText = styled(ListGroupItemText)`
  color: gray;
`;

const ProfileTipsCard = ({ itemName, name, address }) => {
  return (
    <ListGroupItem style={{ marginBottom: 10 }}>
      <ListGroupItemHeading>{itemName}</ListGroupItemHeading>
      <LocationNameText>{name}</LocationNameText>
      <LocationAddressText>{address}</LocationAddressText>
    </ListGroupItem>
  );
};

export default ProfileTipsCard;
