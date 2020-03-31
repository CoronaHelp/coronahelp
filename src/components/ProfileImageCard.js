import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";


const StyledCard = styled(Card)`
    max-width: 30%;
    height: 40%;
`

const StyledCardTitle = styled(CardTitle)`
    font-size: 25px;
    font-weight: 700;
`


const ProfileImageCard = () => {
  return (
    <StyledCard>
      <CardBody>
        <StyledCardTitle>Username</StyledCardTitle>
        <CardSubtitle>First Last</CardSubtitle>
      </CardBody>
      <CardImg
        src="https://www.aalforum.eu/wp-content/uploads/2016/04/profile-placeholder.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardText>
          Location
        </CardText>
      </CardBody>
    </StyledCard>
  );
};


export default ProfileImageCard;
