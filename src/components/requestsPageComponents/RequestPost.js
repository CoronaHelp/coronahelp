import React from 'react';
import { RequestCard, RequestButton, RequestText, RequestStatus, RequestTitle } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input } from '../formComponents/styledFormComponents'

const RequestPost = (props) => {
  if (props.isUpdating) {
    return (
      <RequestCard>
        <div style={{margin: '15px'}}>
          <FormTitle>Form Update</FormTitle>
          <Form 
          // onSubmit={submitForm}
          >
              <FormSection>
                  <Label htmlFor={`${props.post.id}RequestTitle`}>Title</Label>
                  <Input id={`${props.post.id}RequestTitle`} name={`${props.post.id}RequestTitle`} type="text" placeholder="Title" 
                  // value={formState.name} onChange={updateForm}
                  />
              </FormSection>
              <FormSection style={{marginBottom: '15px'}}>
                  <Label htmlFor={`${props.post.id}RequestText`}>Request</Label>
                  <textarea id={`${props.post.id}RequestText`} name={`${props.post.id}RequestText`} placeholder="Hello everyone, I'm looking for ..." 
                  // value={formState.password} onChange={updateForm}
                  />
              </FormSection>
              <FormSection>
                <Label htmlFor={`${props.post.id}RequestStatus`}>
                    <input style={{display: 'inline-block'}} id={`${props.post.id}RequestStatus`} name={`${props.post.id}RequestStatus`} type='checkbox' 
                    // checked={formState.pineapple} onChange={updateOrder}
                    />
                    <p style={{display: 'inline-block', marginLeft: '10px', fontFamily: 'times-new-roman'}}>Resolved</p>
                </Label>
              </FormSection>
              <RequestButton onClick={() => props.isUpdating ? props.setPostToEdit({}): props.setPostToEdit(props.post)}>Done</RequestButton>
          </Form>
        </div>
      </RequestCard>
    )
  }
  
  return (
    <RequestCard>
        <RequestTitle>{props.post.title}</RequestTitle>
        <RequestText>{props.post.text}</RequestText>
        <RequestButton>Edit Request</RequestButton>
        <RequestStatus status={props.post.status}>{props.post.status === 'pending' ? "Pending" : "Resolved"}</RequestStatus>
    </RequestCard>
  );
};

export default RequestPost;