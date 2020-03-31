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

import { dummyRequests, dummyTips } from "../dummyData/dummyData";
import ProfileImageCard from "../components/ProfileImageCard";
import ProfileRequestCard from "../components/ProfileRequestCard";
import ProfileTipsCard from "../components/ProfileTipsCard";

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

const profileInfo = {
  userName: "thom!",
  firstName: "Thomas",
  lastName: "Huynh",
  address: "Sunny Socal"
}
const ProfilePage = () => {
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
              Number of Requests <Badge>24</Badge>
            </CardText>
            <CardText>
              Number of Tips <Badge>5</Badge>
            </CardText>
          </CardBody>
        </UserInfoCard>
        <div>
          <Button
            outline
            color="secondary"
            id="toggleRequests"
            style={{ marginBottom: "1rem" }}
          >
            Requests
          </Button>
          <UncontrolledCollapse toggler="#toggleRequests">
            <ListGroup>
              {dummyRequests.map((request, i) => (
                <ProfileRequestCard key={i} {...request} />
              ))}
            </ListGroup>
          </UncontrolledCollapse>
        </div>
        <div>
          <Button
            outline
            color="secondary"
            id="toggleTips"
            style={{ marginBottom: "1rem" }}
          >
            Tips
          </Button>
          <UncontrolledCollapse toggler="#toggleTips">
            <ListGroup>
              {dummyTips.map((tip, i) => (
                <ProfileTipsCard key={i} {...tip} />
              ))}
            </ListGroup>
          </UncontrolledCollapse>
        </div>
      </PostsContainer>
    </Container>
  );
};

export default ProfilePage;
