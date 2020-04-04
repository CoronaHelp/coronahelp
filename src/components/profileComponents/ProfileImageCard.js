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
  max-width: 70%;
  @media (min-width: 800px) {
    max-width: 30%;
  }
`

const StyledCardTitle = styled(CardTitle)`
    font-size: 2.5rem;
    font-weight: 700;
`


const ProfileImageCard = ({ profileInfo }) => {
  const { userName, firstName, lastName, address } = profileInfo
  return (
    <StyledCard>
      <CardBody>
        <StyledCardTitle>{userName}</StyledCardTitle>
        <CardSubtitle>{firstName} {lastName}</CardSubtitle>
      </CardBody>
      <CardImg
        src="https://www.aalforum.eu/wp-content/uploads/2016/04/profile-placeholder.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardText>
          {address}
        </CardText>
      </CardBody>
    </StyledCard>
  );
};


export default ProfileImageCard;
