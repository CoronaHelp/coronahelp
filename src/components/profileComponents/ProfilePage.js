import React from "react";
import {
  UncontrolledCollapse,
  Button,
  ListGroup,
  Card,
  CardTitle,
  CardText,
  CardBody,
  ListGroupItem,
  Badge
} from "reactstrap";
import styled from "styled-components";
import { Route, Link, useLocation } from "react-router-dom";

import { dummyRequests, dummyTips } from "./dummyData";
import ProfileImageCard from "./ProfileImageCard";
import ProfileList from "./ProfileList";
import ProfileRequestCard from "./ProfileRequestCard";
import ProfileTipsCard from "./ProfileTipsCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10rem auto;
  font-size: 1.6rem;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    flex-direction: row;
    width: 800px;
    align-items: flex-start;
  }
`;

const PostsContainer = styled.div`
  width: 70%;
  @media (min-width: 800px) {
    width: 60%;
  }
`;

const UserInfoCard = styled(Card)`
  margin-bottom: 2rem;
`;

const UserInfoCardTitle = styled(CardTitle)`
  font-size: 2rem;
  font-weight: 500;
`;

const LinksDiv = styled.div`
  a {
    margin-right: 2rem;
  }
`
const RequestBadge = styled(Badge)`
  background: #2C88D9;
`

const TipsBadge = styled(Badge)`
  background: green;
`

const StyledButton = styled(Button)`
  font-size: 1.6rem;
`
const profileInfo = {
  userName: "thom!",
  firstName: "Thomas",
  lastName: "Huynh",
  address: "Sunny Socal"
};


const ProfilePage = () => {
  let subRoutelocation = useLocation().pathname.split("/")[3]
  const currentSubRoute = (routeName) => {
    return routeName === subRoutelocation
  }
  return (

    <Container>
      <ProfileImageCard profileInfo={profileInfo} />
      <PostsContainer>
        <UserInfoCard>
          <CardBody>
            <UserInfoCardTitle>User Info</UserInfoCardTitle>
            <CardText>
              Within Radius? <span style={{ color: "green" }}>Yes!</span>
            </CardText>
            <CardText>
              Number of Requests <RequestBadge>24</RequestBadge>
            </CardText>
            <CardText>
              Number of Tips <TipsBadge>5</TipsBadge>
            </CardText>
          </CardBody>
        </UserInfoCard>
        <LinksDiv> 
          <Link to={currentSubRoute('requests') ? `/profile/27` : `/profile/27/requests` }>
            <StyledButton outline={!currentSubRoute('requests')} color="primary" style={{ marginBottom: "1rem" }}>
              Requests
            </StyledButton>
          </Link>
          <Link to={currentSubRoute('tips') ? `/profile/27` : `/profile/27/tips` }>
            <StyledButton outline={!currentSubRoute('tips')} color="primary" style={{ marginBottom: "1rem" }}>
              Tips
            </StyledButton>
          </Link>
        </LinksDiv>
        <Route
          path="/profile/:id/requests"
          component={() => <ProfileList array={dummyRequests} Card={ProfileRequestCard}/>}
        />
        <Route
          path="/profile/:id/tips"
          component={() => <ProfileList array={dummyTips} Card={ProfileTipsCard}/> }
        />
      </PostsContainer>
    </Container>

  );
};

export default ProfilePage;
