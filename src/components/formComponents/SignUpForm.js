import React, { useState, useEffect }from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { Button, FormSection, Form, Label, Input, Error } from './styledFormComponents';

const SignUpForm = () => {

    const [submitDisabled, setSubmitDisabled] = useState(true)

    const [post, setPost] = useState([])

    const [formState, setFormState] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        zipcode: "",
        password: "",
        passwordConfirmation: "",
    })

    const [formErrors, setFormErrors] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        zipcode: "",
        password: "",
        passwordConfirmation: "",
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
        email: yup.string()
            .email("This needs to be a valid email address.")
            .required("Please input a valid email address."),
        firstName: yup.string()
            .required("Please input your first name."),
        lastName: yup.string()
            .required("Please input your last name."),
        zipcode: yup.string()
            .test("5-char-length", "Please enter a 5 digit zipcode", val => val.length === 5)
            .test("is-number", "Please enter a 5 digit zipcode", val => Number(val))
            .required("Please input your 5 digit zipcode."),
        password: yup.string()
            .min(6, "This password must be at least 6 characters long")
            .required("Please input a password of at least 6 characters"),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password'), null], "Passwords must match")
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
                email: "",
                firstName: "",
                lastName: "",
                zipcode: "",
                password: "",
                passwordConfirmation: "",
            })
          })
          .catch(error => console.log("Post was not successful: ", error.response))
    }

    return (
        <Form onSubmit={submitForm}>
            <FormSection>
                <Label htmlFor="username"> * Username</Label>
                <Input id="username" name="username" type="text" placeholder="username" value={formState.name}  onChange={updateForm}/>
                {formErrors.username ? <Error>{formErrors.username}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="email"> * Email</Label>
                <Input id="email" name="email" type="text" placeholder="email" value={formState.email} onChange={updateForm}/>
                {formErrors.email ? <Error>{formErrors.email}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="firstName"> * First Name</Label>
                <Input id="firstName" name="firstName" type="text" placeholder="first name" value={formState.name}  onChange={updateForm}/>
                {formErrors.firstName ? <Error>{formErrors.firstName}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="lastName"> * Last Name</Label>
                <Input id="lastName" name="lastName" type="text" placeholder="last name" value={formState.name}  onChange={updateForm}/>
                {formErrors.lastName ? <Error>{formErrors.lastName}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="zipcode"> * Zipcode</Label>
                <Input id="zipcode" name="zipcode" type="text" placeholder="5 digit zipcode" value={formState.zipcode} onChange={updateForm}/>
                {formErrors.zipcode ? <Error>{formErrors.zipcode}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="password"> * Passwords</Label>
                <Input id="password" name="password" type="password" placeholder="password" value={formState.password} onChange={updateForm}/>
                {formErrors.password ? <Error>{formErrors.password}</Error> : null} 
            </FormSection> 
            <FormSection>
                <Label htmlFor="passwordConfirmation"> * Confirm Password</Label>
                <Input id="passwordConfirmation" name="passwordConfirmation" type="password" placeholder="confirm password" value={formState.passwordConfirmation} onChange={updateForm}/>
                {formState.password === formState.passwordConfirmation ? null : <Error>{formErrors.passwordConfirmation} </Error>}
            </FormSection>
            <Button disabled={submitDisabled}>Create Account</Button>
        </Form>
    )
}

export default SignUpForm