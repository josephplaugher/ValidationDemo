import React from 'react';
import styles from './InputStyles'

const Button = (props) => {

    return (
        <div style={styles.buttonContainer} >
            <button style={styles.button}
                name={props.name}
                id={props.id}
                onClick={props.onClick}
            >{props.label}</button>
        </div>
    )
}

export default Button;