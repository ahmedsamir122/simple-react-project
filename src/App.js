import './App.css';
import React, {useState} from 'react';
import UserInput from './components/UserInput';
import UserOut from './components/UserOut';
import Modal from './components/Modal';


function App() {
  const [enteredList, setList]= useState([])
  const [valid, setValid] =useState(false)
  const saveUserInput =(userinput) => {
    const userInputInfo = {
      ...userinput,
      id:Math.random().toString(),
    }
    setList((prevList) => {
      return [userInputInfo, ...prevList]
    })

    console.log(enteredList)
  }

  const saveUserError = (error) => {
      setValid(error)
      console.log(valid)
  }
  const resetError =(error) => {
    setValid(error);
  }
  return (
    <div className="App">
      {valid && 
      <Modal onHideModal ={resetError}></Modal>
      }
      <UserInput onSaveUser={saveUserInput} onError={saveUserError}></UserInput>
      <UserOut items={enteredList} ></UserOut>
    </div>
  );
}

export default App;
