import React, { useState }from 'react'
import { v4 as uuid } from 'uuid'
import { RequestButton, RequestCard } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input, TextArea } from '../formComponents/styledFormComponents'
import AxiosWithAuth from '../../utils/AxiosWithAuth'

const NewRequest = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'pending',
        userID: 1,
        itemID: 1,
    })

    const updateForm = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const addToList = event => {
        event.preventDefault()
        const newRequest = {
            id: uuid(),
            title: formData.title,
            description: formData.description,
            userID: 9,
	        itemID: 1,
            status: 'pending',
            isUpdating: false
        }
        props.setPostList([newRequest, ...props.postList])        // props.setMakingNewRequest(false)
        setFormData({
            title: '',
            description: '',
            userID: 9,
	        itemID: 1,
            status: 'pending'
        })

    }


    const submitForm= (e)=>{
        e.preventDefault();
    
        const keys = Object.keys(formData)
console.log(keys, 'Object keys')
keys.map(item=> {
    if(item !== 'title' && item !== 'description' &&  item !== 'id' && item !== 'userID' &&  item !== 'itemID'){
delete formData[item]
  }
}
  )
        console.log(formData, '<---FORM TO ADD')
    
        AxiosWithAuth()
        .post(`/api/requests`, formData)
        .then(res=>{
          console.log(res, 'res in new request')
          setFormData([res.data, formData])
          console.log(res.data.created)
        //   props.setMakingNewRequest(true)
        props.setDep(true);

        })
        // .then(props.toggle(props.post.id))
        .catch(err=>console.log(err, "error"))
        console.log('Hi I submitted--allegedly')
      }

    return (
   
        <RequestCard style={{marginTop: "40px"}}>
        <FormTitle style={{marginTop: "10px"}}>New Request</FormTitle>
            <Form onSubmit={submitForm} >
                <FormSection>
                    <Label htmlFor="newRequestTitle">Title
                        <Input 
                        id="newRequestTitle" 
                        name="title" 
                        type="text" 
                        value={formData.title || ''} 
                        placeholder="Title" 
                        onChange={updateForm}/>
                    </Label>
                </FormSection>
                <FormSection style={{marginBottom: '15px'}}>
                    <Label htmlFor="newRequestText">Message</Label>
                    <TextArea 
                    id="newRequestText" 
                    name="description" 
                    type="text"
                    value={formData.description || ''} 
                    placeholder="Hello everyone, I'm looking for ..." 
                    onChange={updateForm}/>

                </FormSection>
                <RequestButton>Post Request</RequestButton>
            </Form>
        </RequestCard>
    );
};

export default NewRequest;