import React, { useState, useEffect } from "react";
import { RequestCard, RequestButton, RequestText, RequestStatus, RequestTitle } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input, TextArea } from '../formComponents/styledFormComponents'
import { ButtonToggle } from "reactstrap";

const initial = { title: '', text: '', status: 'pending', isUpdating: false}

const RequestPost = (props) => {
  // console.log(props, 'props in Request post')

  const [ formData, setFormData ] = useState({})
const [updating, setUpdating] = useState(false);
const [newPost, setNewPost]= useState('')
const [postToUpdate, setPostToUpdate]=useState(initial)

  useEffect(() => {
    if (props.postToEdit === props.post){
        setFormData(props.postToEdit)
    }

  }, [props.post, props.postToEdit])

// const editPost = post =>{
//   setUpdating(true);
//   setPostToUpdate(post);
// }

  const changeHandler =(e)=>{
    console.log(e.target.value)
    setPostToUpdate({...postToUpdate, [e.target.name]: e.target.value})
  };

  const submitForm= (e)=>{
    e.preventDefault();
    setNewPost(e.target.value)
  //   setFormData({
  //     title: '',
  //     text: '',
  //     status: 'pending'
  // })
    console.log('Hi I submitted--allegedly', setFormData)
  }

  


  
  
  return (
    <RequestCard>

{props.post.isUpdating === true ? (
  <>
 <h2>This is working</h2> 
<FormTitle>Form Update</FormTitle>
          <Form onSubmit={submitForm}>
          <FormSection>
                  <Label htmlFor={`${props.post.id}RequestTitle`}>Title</Label>
                  <Input 
                  value={props.post.title} 
                  type="text" 
                  placeholder="Title" 
                  name="title"
                  onChange={changeHandler}

                  // onChange={e=>{setPostToUpdate({...postToUpdate, name: e.target.value})}}
                  />
                  </FormSection>
              {/* <FormSection>
                  <Label htmlFor={`${props.post.id}RequestTitle`}>Title</Label>
                  <Input value={postToUpdate.title} id={`${props.post.id}RequestTitle`} name={`${props.post.id}RequestTitle`} type="text" placeholder="Title" 
                  // value={formState.name} onChange={updateForm}
                  /> 
              </FormSection>*/}
              <FormSection style={{marginBottom: '15px'}}>
                  <Label htmlFor={`${props.post.id}RequestText`}>Request</Label>
                  <TextArea value={props.post.text} name={`${props.post.text}`} placeholder="Hello everyone, I'm looking for ..." 
                  // value={formState.password} onChange={updateForm}
                  />
              </FormSection>
              <FormSection>
                <Label htmlFor={`${props.post.id}RequestStatus`}>
                    <input style={{display: 'inline-block'}} value={props.post.status} id={`${props.post.id}RequestStatus`} name={`${props.post.id}RequestStatus`} type='checkbox' 
                    // checked={formState.something} onChange={updateSomething}
                    />
                    <p style={{display: 'inline-block', marginLeft: '10px', fontFamily: 'times-new-roman'}}>Resolved</p>
                </Label>
              </FormSection>
              <RequestButton onClick={() => props.isUpdating ? props.setPostToEdit({}): props.setPostToEdit(props.post)}>Done</RequestButton>
          </Form>
          </> 
          ):(
            <>
            {/* <h2>This isn't working</h2> */}
            <RequestTitle>{props.post.title}</RequestTitle>
        <RequestText>{props.post.text}</RequestText>
         {/* <RequestButton onClick={props.setPostToEdit(!props.post)}>Edit Request</RequestButton> */}

        {/* <RequestButton onClick={()=>{console.log('i have clicked'); console.log(props.post.isUpdating); console.log(props.data, 'formData'); console.log(props.post, 'this'); console.log(props.toggle(props.post.isUpdating)); console.log(props.post.isUpdating)} }>Edit Request</RequestButton> */}
        <RequestButton onClick={()=>{console.log(props.toggle(props.post.id))}}>Edit Request</RequestButton>
        <RequestStatus status={props.post.status}>{props.post.status === 'pending' ? "Pending" : "Resolved"}</RequestStatus>
</>
) }   

</RequestCard>

  );
};

export default RequestPost;