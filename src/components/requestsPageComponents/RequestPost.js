import React, { useState, useEffect } from "react";
import { RequestCard, RequestButton, RequestText, RequestStatus, RequestTitle } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input, TextArea } from '../formComponents/styledFormComponents'
import { ButtonToggle } from "reactstrap";

const RequestPost = (props) => {
  // console.log(props, 'props in Request post')

  const [ formData, setFormData ] = useState({})

  useEffect(() => {
    if (props.postToEdit === props.post){
        setFormData(props.postToEdit)
    }

  }, [props.post, props.postToEdit])

// useEffect(()=>{
// // console.log(props)
// },[props.post.isUpdating])

//   const testing  = (e)=>{
//     e.preventDefault()
//     console.log('this is clickng')
//     // props.post.isUpdating(true)
//     props.setPostToEdit(true)
//     console.log(props.post, 'props.post')
// console.log(props.editThisPost, 'testing is updating')
//     // if (props.post.isUpdating===true){
//     //   return console.log("This is now true")
//     // }
//   }


  // ! props.post.isUpdating ?
  //  (
  //     <RequestCard>
  //       <div style={{margin: '15px'}}>
  //         <FormTitle>Form Update</FormTitle>
  //         <Form 
  //         // onSubmit={submitForm}
  //         >
  //             <FormSection>
  //                 <Label htmlFor={`${props.post.id}RequestTitle`}>Title</Label>
  //                 <Input id={`${props.post.id}RequestTitle`} name={`${props.post.id}RequestTitle`} type="text" placeholder="Title" 
  //                 // value={formState.name} onChange={updateForm}
  //                 />
  //             </FormSection>
  //             <FormSection style={{marginBottom: '15px'}}>
  //                 <Label htmlFor={`${props.post.id}RequestText`}>Request</Label>
  //                 <TextArea id={`${props.post.id}RequestText`} name={`${props.post.id}RequestText`} placeholder="Hello everyone, I'm looking for ..." 
  //                 // value={formState.password} onChange={updateForm}
  //                 />
  //             </FormSection>
  //             <FormSection>
  //               <Label htmlFor={`${props.post.id}RequestStatus`}>
  //                   <input style={{display: 'inline-block'}} id={`${props.post.id}RequestStatus`} name={`${props.post.id}RequestStatus`} type='checkbox' 
  //                   // checked={formState.pineapple} onChange={updateOrder}
  //                   />
  //                   <p style={{display: 'inline-block', marginLeft: '10px', fontFamily: 'times-new-roman'}}>Resolved</p>
  //               </Label>
  //             </FormSection>
  //             <RequestButton onClick={() => props.isUpdating ? props.setPostToEdit({}): props.setPostToEdit(props.post)}>Done</RequestButton>
  //         </Form>
  //       </div>
  //     </RequestCard>
  //   ) : 
  
  
  return (
    <RequestCard>

{props.post.isUpdating === true ? (
  <>
 <h2>This is working</h2> 
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
                  <TextArea id={`${props.post.id}RequestText`} name={`${props.post.id}RequestText`} placeholder="Hello everyone, I'm looking for ..." 
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
          </> 
          ):(
            <>
            {/* <h2>This isn't working</h2> */}
            <RequestTitle>{props.post.title}</RequestTitle>
        <RequestText>{props.post.text}</RequestText>
         <RequestButton onClick={props.setPostToEdit(!props.post)}>Edit Request</RequestButton>


        <RequestStatus status={props.post.status}>{props.post.status === 'pending' ? "Pending" : "Resolved"}</RequestStatus>
</>
) }   

</RequestCard>

  );
};

export default RequestPost;