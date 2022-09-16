import React, {useState} from 'react';
import Button from './Button';
import styles from './UserInput.module.css'

const UserInput = (props) => {
    const [enteredName, setName] = useState('')
    const [enteredAge, setAge] = useState('')
    const [error, setError ] = useState(false);

    const nameHandler = (event) =>{
        setName(event.target.value)
    }
    const ageHandler = (event) =>{
        setAge(event.target.value)
    }
    const clickHandler =(event) => {
        event.preventDefault()
        
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            setError(true)
            props.onError(error)           
            return;
        }
        else {
            setError(false)            
        }
        
        const inputUser = {
            name:enteredName,
            age: enteredAge,
        }
        props.onSaveUser(inputUser)
        setName('');
        setAge('');
    }

    console.log(error)
      return (
            <div>
                <form className={styles.form} onSubmit={clickHandler}>
                    <label>Username</label>
                    <input type='text' value ={enteredName} onChange={nameHandler}></input>
                    <label>Age</label>
                    <input type='number' value ={enteredAge} onChange={ageHandler}></input>
                    <Button >Add User</Button>
                </form>
            </div>
      )      
}

export default UserInput ;