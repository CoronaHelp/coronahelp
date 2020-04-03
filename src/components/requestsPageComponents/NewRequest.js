import React, { useState }from 'react'
import { v4 as uuid } from 'uuid'
import { RequestButton, RequestCard } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input, TextArea } from '../formComponents/styledFormComponents'
const NewRequest = (props) => {

    const [formData, setFormData] = useState({
        title: '',
        text: '',
        status: 'pending'
    })

    const updateForm = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
        // console.log(formData)
    }

    const addToList = event => {
        event.preventDefault()
        const newRequest = {
            id: uuid(),
            title: formData.title,
            text: formData.text,
            status: 'pending',
            isUpdating: false
        }
        props.setPostList([newRequest, ...props.postList])
        props.setMakingNewRequest(false)
        setFormData({
            title: '',
            text: '',
            status: 'pending'
        })

    }

    return (
        <RequestCard>
        <FormTitle style={{marginTop: "10px"}}>New Request</FormTitle>
            <Form onSubmit={addToList}
            // onSubmit={submitForm}
            >
                <FormSection>
                    <Label htmlFor="newRequestTitle">Title
                        <Input id="newRequestTitle" name="title" type="text" value={formData.title} placeholder="Title" onChange={updateForm}/>
                    </Label>
                </FormSection>
                <FormSection style={{marginBottom: '15px'}}>
                    <Label htmlFor="newRequestText">Message</Label>
                    <TextArea id="newRequestText" name="text" value={formData.text} placeholder="Hello everyone, I'm looking for ..." onChange={updateForm}/>
                </FormSection>
                <RequestButton>Post Request</RequestButton>
            </Form>
        </RequestCard>
    );
};

export default NewRequest;