import React, { useState } from "react"
import Input from './Input'
import Button from './Button'
import Validator from './Validation/Validator'
import ValRules from './Validation/ValRules'

const App = () => {
    const [email, updateEmail] = useState('')
    const [fname, updateFname] = useState('')
    const [password, updatePassword] = useState('')
    const [error, updateError] = useState({ email: '', password: '' })

    const validate = (event) => {
        event.preventDefault()
        // create a new validation object using all the input values as an object with ES6 shorthand, and the valRules object
        const valResult = new Validator({ email, fname, password }, ValRules)
        // checck valResult (this object stores the result of the validation process) to see if there are any error. 
        // submit the form if there are none. If there are errors, submit the form with ajax
        if (valResult.hasError == false) {
            // submit the form data via ajax
            console.log('no errors')
        } else {
            console.log('the errors: ', valResult.errors)
            updateError(valResult.errors)
        }
    }

    return (
        <div id="main">
            <h3>this is a form</h3>
            <form onSubmit={validate} >
                <Input label="Email" name="email" value={email} onChange={(e) => { updateEmail(e.target.value) }} error={error.email} />
                <Input label="First Name" name="fname" value={fname} onChange={(e) => { updateFname(e.target.value) }} error={error.fname} />
                <Input label="Password" name="password" type="password" value={password} onChange={(e) => { updatePassword(e.target.value) }} error={error.password} />
                <Button label="Sign In" />
            </form>
        </div>
    )
}

export default App