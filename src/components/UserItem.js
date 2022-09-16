import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
    return <li>
            <p className={styles['item_output']}>{`${props.name} (${props.age} years old)`}</p>
           </li>
}

export default UserItem;