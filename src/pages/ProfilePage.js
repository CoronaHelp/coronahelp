import React from "react";
import { UncontrolledCollapse, Button, ListGroup } from "reactstrap";
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

const ProfilePage = () => {
  return (
    <Container>
      <ProfileImageCard />
      <PostsContainer>
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
        <hr/>
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
