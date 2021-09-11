import React from 'react'
import styles from './InputStyles'

const Input = (props) => {

    //make the password field type "password" so its contents are hidden
    let type;
    if (props.type === 'password') { type = 'password' } else { type = '"text"' }

    return (
        <div style={styles.constainer}>
            <p style={styles.label}>{props.label} </p>
            <p style={styles.error}>{props.error} </p>
            <input
                type={type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                style={styles.textinput}
            />
        </div>
    );
}

export default Input;