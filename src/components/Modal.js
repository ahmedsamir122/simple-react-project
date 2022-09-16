import React, {  useState } from 'react';
import ReactDom from "react-dom";
import Button from './Button';
import styles from './Modal.module.css';

const BackDrop =(props) => {
    return       <div className={styles.overlay}></div>

}

const ModalError = (props) => {
    return  <div className={styles['card-error']}>
                <h2>Invalid Input</h2>
                <p>please enter valid number!!!!</p>
                <div className={styles.button}>
                    <Button onClick={props.onSaveError}>Okay</Button>
                </div>
            </div>
}
const Modal = (props) => {
    const [valid, setInvalid]= useState(false)
    const errorHandler =(error) =>{
        setInvalid(false) ;
        props.onHideModal(valid) 
    }
    return (
            <React.Fragment>
                {ReactDom.createPortal(<BackDrop/>,document.getElementById('backdrop-root'))}
                {ReactDom.createPortal(<ModalError onSaveError={errorHandler}/>,document.getElementById('modal'))}
            </React.Fragment>       
    );
}

export default Modal ;