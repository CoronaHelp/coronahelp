import React, { useState, useEffect }from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { FormButton, FormSection, Form, Label, Input, Error, FormContainer, FormTitle} from './styledFormComponents';

const LoginForm = () => {

    const [submitDisabled, setSubmitDisabled] = useState(true)

    const [post, setPost] = useState([])

    const [formState, setFormState] = useState({
        username: "",
        password: "",
    })

    const [formErrors, setFormErrors] = useState({
        username: "",
        password: "",
    })

    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setSubmitDisabled(!valid)
                
            })
    }, [formState, submitDisabled])

    const formSchema = yup.object().shape({
        username: yup.string()
            .required("Please input your username."),
        password: yup.string()
            .min(6, "This password must be at least 6 characters long")
            .required("Please input a password of at least 6 characters"),
    })

    const validateData = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                console.log(valid)
                
                setFormErrors({
                    ...formErrors,
                    [event.target.name]: ""
                })
            })
            .catch(error => {
                console.log(error)
                setFormErrors({
                  ...formErrors,
                  [event.target.name]: error.errors[0]
                })
            })
    }

    const updateForm = event => {
        event.persist()
        validateData(event)
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value
        })
        console.log(formErrors)
      }

    const submitForm = event => {
        event.preventDefault()
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => {
            console.log("Posted successfully: ", post)
            setPost(response.data)
            setFormState({
                username: "",
                password: "",
            })
          })
          .catch(error => console.log("Post was not successful: ", error.response))
    }

    return (
        <FormContainer form="login">
            <div>
                <FormTitle>Welcome Back!</FormTitle>
                <Form onSubmit={submitForm}>
                    <FormSection>
                        <Label htmlFor="username"> * Username</Label>
                        <Input id="username" name="username" type="text" placeholder="username" value={formState.name}  onChange={updateForm}/>
                        {formErrors.username ? <Error>{formErrors.username}</Error> : null}
                    </FormSection>
                    <FormSection>
                        <Label htmlFor="password"> * Password</Label>
                        <Input id="password" name="password" type="password" placeholder="password" value={formState.password} onChange={updateForm}/>
                        {formErrors.password ? <Error>{formErrors.password}</Error> : null} 
                    </FormSection> 
                    <FormButton disabled={submitDisabled}>Login</FormButton>
                </Form>
            </div>
        </FormContainer>
    )
}
export default LoginForm