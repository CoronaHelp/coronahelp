import React, { useState, useEffect }from 'react'
import * as yup from 'yup'
import axios from 'axios'
import { FormButton, FormSection, Form, Label, Input, Error } from './styledFormComponents';

const QuickSearchForm = () => {

    const [submitDisabled, setSubmitDisabled] = useState(true)

    const [post, setPost] = useState([])

    const [formState, setFormState] = useState({
        zipcode: "",
        item: ""
    })

    const [formErrors, setFormErrors] = useState({
        zipcode: "",
        item: ""
    })

    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setSubmitDisabled(!valid)
                
            })
    }, [formState, submitDisabled])

    const formSchema = yup.object().shape({
        zipcode: yup.string()
            .test("5-char-length", "Please enter a 5 digit zipcode", val => val.length === 5)
            .test("is-number", "Please enter a 5 digit zipcode", val => Number(val))
            .required("Please input your 5 digit zipcode."),
        item: yup.string()
            .required("Please input your last name."),
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
                zipcode: "",
                item: ""
            })
          })
          .catch(error => console.log("Post was not successful: ", error.response))
    }

    return (
        <Form onSubmit={submitForm}>
            <FormSection>
                <Label htmlFor="zipcode"> * Zip Code</Label>
                <Input id="zipcode" name="zipcode" type="text" placeholder="5 digit zipcode" value={formState.zipcode} onChange={updateForm}/>
                {formErrors.zipcode ? <Error>{formErrors.zipcode}</Error> : null}
            </FormSection>
            <FormSection>
                <Label htmlFor="item"> * Item</Label>
                <Input id="item" name="item" type="text" placeholder="item" value={formState.password} onChange={updateForm}/>
                {formErrors.password ? <Error>{formErrors.password}</Error> : null} 
            </FormSection> 
            <FormButton disabled={submitDisabled}>Quick Search</FormButton>
        </Form>
    )
}

export default QuickSearchForm