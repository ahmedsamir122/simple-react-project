import React from 'react';
import styles from './UserOut.module.css';
import UserItem from './UserItem';

const UserOut = (props) => {
    return (
        <div>
            <ul className={styles['out-container']}>
                {props.items.map(item => {
                    return<UserItem name={item.name} age={item.age} key={item.id}></UserItem>
                })}
            </ul>
        </div>
    )
}

export default UserOut;