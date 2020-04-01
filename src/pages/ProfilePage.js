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

import { dummyRequests, dummyTips } from "../dummyData/dummyData";
import ProfileImageCard from "../components/ProfileImageCard";
import ProfileRequestsList from "../components/ProfileRequestList"
import ProfileTipsList from "../components/ProfileTipsList";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostsContainer = styled.div`
  width: 65%;
`;

const UserInfoCard = styled(Card)`
  margin-bottom: 20px;
`;

const UserInfoCardTitle = styled(CardTitle)`
  font-size: 20px;
  font-weight: 500;
`;

const LinksDiv = styled.div`
  a {
    margin-right: 20px;
  }
`


const RequestBadge = styled(Badge)`
  background: #2C88D9;
`

const TipsBadge = styled(Badge)`
  background: green;
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
            <Button color={currentSubRoute('requests') ? 'primary' : 'secondary'} style={{ marginBottom: "1rem" }}>
              Requests
            </Button>
          </Link>
          <Link to={currentSubRoute('tips') ? `/profile/27` : `/profile/27/tips` }>
            <Button color={currentSubRoute('tips') ? 'primary' : 'secondary'} style={{ marginBottom: "1rem" }}>
              Tips
            </Button>
          </Link>
        </LinksDiv>
        <Route
          path="/profile/:id/requests"
          component={() => <ProfileRequestsList requests={dummyRequests}/>}
        />
        <Route
          path="/profile/:id/tips"
          component={() => <ProfileTipsList tips={dummyTips}/> }
        />
      </PostsContainer>
    </Container>
  );
};

export default ProfilePage;
