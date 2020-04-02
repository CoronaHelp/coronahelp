import React, { useState }from 'react'
import { v4 as uuid } from 'uuid'
import { RequestButton, RequestContainer } from './styledRequestComponents'
import { FormTitle, Form, FormSection, Label, Input } from '../formComponents/styledFormComponents'
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
        props.setPostList([...props.postList, newRequest])
        props.setMakingNewRequest(false)
        setFormData({
            title: '',
            text: '',
            status: 'pending'
        })

    }

    return (
        <>
        <FormTitle>New Request</FormTitle>
            <Form style={{border: "1px solid black", padding: "0px"}} onSubmit={addToList}
            // onSubmit={submitForm}
            >
                <FormSection>
                    <Label htmlFor="newRequestTitle">Title
                        <Input id="newRequestTitle" name="title" type="text" value={formData.title} placeholder="Title" onChange={updateForm}/>
                    </Label>
                </FormSection>
                <FormSection style={{marginBottom: '15px'}}>
                    <Label htmlFor="newRequestText">Message</Label>
                        <textarea id="newRequestText" name="text" value={formData.text} placeholder="Hello everyone, I'm looking for ..." onChange={updateForm}/>
                </FormSection>
                <RequestButton>Post Request</RequestButton>
            </Form>
        </>
    );
};

export default NewRequest;