import React, { useState,useEffect} from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


export default function App() {
const [todos,setTodo] =useState([]);
useEffect(()=>{
    getData();
},[]);
const getData=async()=>{
    try{
        const incomingData= await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const formattedData= await incomingData.json();
        setTodo(formattedData);
        console.log(formattedData);
    }catch(error){
    console.log(error);
}
    };
    return(
        <div>
            <Container className='my-5'>
                <h1 className='my-5 text-center display-2'> TODO LIST</h1>
                <Table striped bordered haver>
                    <thead> 
                        </thead>
                        <tbody>
                            {todos.map((todo,i)=>(
                             <tr key={ todo.key}>
                                <td>{i+1}
                                </td><td>{todo.title}</td>
                                {/*<td>{todo.completed}</td>*/}
                             </tr>
                            ))}
                        </tbody>

                </Table>

            </Container>
        </div>
    );
}





















  


        