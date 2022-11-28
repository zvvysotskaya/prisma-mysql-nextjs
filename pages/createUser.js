import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function CreateUser(){

const [name, setName]=useState('')

    const handleCreateUser=(e)=>{

        e.preventDefault()

        let data={
            name:name           
        }

        fetch('/api/insertUsers', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'          
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
    }    
        
    return(<>
    <main className={styles.main}>
        <h1>Create a New User</h1>        
        <input 
        tytpe='text' 
        name='name'
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <button onClick={handleCreateUser}>Create User</button><br/><br/>
        <Link href='/'className={styles.linkColor}>Go Home to check your work!</Link>
    </main>    
    </>)
}