import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Home = (props) => {

    return (
        <div id="main">
            <h1>Home</h1>
            <Button label="Sign Out" onClick={() => props.setLogin(false)} />
        </div>
    )
}

export default Home