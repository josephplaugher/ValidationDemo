import React from 'react'
import { useState } from 'react'
import Home from './Home'
import Login from './Login'

const App = () => {
    const [loggedIn, setLogin] = useState(false)
    return (
        <div>
            {loggedIn ? (<Home setLogin={setLogin} />) : (<Login setLogin={setLogin} />)}
        </div>
    )
}

export default App