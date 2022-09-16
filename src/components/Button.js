import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    // let error =true;
    // const errorHandler =() =>{
    //     error = false;
    //     console.log('test')
    //     props.onSaveError(error);
    // }
        const classes= `${props.className} ${styles.button}`;
return <button type='submit' className={classes} onClick={props.onClick}>{props.children}</button>
}

export default Button;