import React from 'react'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
export default function Form() {
    
    const {register,handleSumbit}= useForm();
    const onSumbit =(data)=>{
        console.log(data)
    }
  return (
    <div><Container className='mt-5 pt-5'>
        <h1 className='text-center'>Login Form</h1>
        <Form onSumbit={ handleSumbit(onSumbit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container></div>
  )
}
