import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {


    const [formState, setformState] = useState({
        username: 'strider',
        email: 'felix@google-com'
    });

    // Destructurar el objeto que recibe useState
    const {username, email} = formState;

    // Constante para cambiar los imput en el form
    const onInputChange = ({target}) => {
        const {name, value} = target; 
        setformState({
            ...formState,
            [name] : value
        });
    }

    // Efectos secundarios
/*     useEffect(()=> {
        console.log('useEffect called')
    }, [] )

    useEffect(()=> {
        console.log('FormState changed')
    }, [formState] )

    useEffect( () => {
        console.log('email changed')
    }, [email] ) */
    

    return (

    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Username'
            name='username' 
            value={username}
            onChange= {onInputChange}
        />

        <input 
            type="email"
            className='form-control mt-2'
            placeholder='felix@google.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {/* Condicional */}
        {
            (username === 'strider2') && <Message />
        }
    </>
    
    
  )
}
