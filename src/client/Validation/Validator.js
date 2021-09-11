class Validate {
    constructor(inputs, valRules) {
        this.error = {}
        this.inputs = inputs
        this.valRules = valRules
        this.startValidation()
        this.hasError = this.isError()
        return { hasError: this.hasError, errors: this.error }
    }

    startValidation = () => {
        console.log("this.inputs", this.inputs)
        for (var name in this.inputs) {
            this.valRules.forEach(rule => {
                if (name === rule.name) {
                    this.check(name, this.inputs[name], rule)
                }
            })
        }
    }

    check = (name, val, rule) => {
        console.log('check function: ', name, val, rule)
        //check that required fields for not empty
        if (rule.required && val.length < 1) {
            this.setErrorMessage(name, 'This field is required')
            return 0 //stop the function for this input and return this error.
        }
        //check that custom matching expressions are met
        if (rule.hasOwnProperty('match')) {
            this.match(val, rule.match) ? true : this.setErrorMessage(name, rule.errorMsg)
            return 0 //stop the function for this input and return this error.
        }
        //check for alphanumeric/string only input
        if (rule.hasOwnProperty('alphanumeric')) {
            this.alphanumeric(val) ? true : this.setErrorMessage(name, 'The name field must only contain letters and numbers')
            return 0 //stop the function for this input and return this error.
        }
        //check for numeric only input
        if (rule.hasOwnProperty('numeric')) {
            this.numeric(val) ? this.setErrorMessage(name, 'This field can only be a number') : false
            return 0 //stop the function for this input and return this error.
        }
        //check for decimal format input
        if (rule.hasOwnProperty('decimal')) {
            this.isFloat(val) ? true : this.setErrorMessage(name, 'This field must be a decimal number')
            return 0 //stop the function for this input and return this error.
        }
        //check for undesired characters
        if (rule.hasOwnProperty('restricted')) {
            this.restricted(val, rule.restricted) ? true : this.setErrorMessage(name, 'You have entered invalid characters')
            return 0 //stop the function for this input and return this error.
        }
        //check for valid email format if specified
        if (rule.hasOwnProperty('email')) {
            this.isEmail(val) ? true : this.setErrorMessage(name, 'You must enter a valid email address')
            return 0 //stop the function for this input and return this error.
        }
        if (rule.hasOwnProperty('minLength')) {
            (val.length > 6) ? true : this.setErrorMessage(name, 'Your password must be at least 6 characters')
            return 0 //stop the function for this input and return this error.
        }
        if (rule.customErrMsg) {
            if (rule.customErrMsg.check() ? true : this.setErrorMessage(name, rule.customErrMsg.msg))
                return 0
        }
    }

    setErrorMessage = (name, msg) => {
        let newEr = Object.assign({}, this.error)
        newEr[name] = msg
        this.error = newEr
    }

    match = (val, expression) => {
        return expression.test(String(val).toLowerCase())
    }

    alphanumeric = (val) => {
        return isNaN(val)
    }

    numeric = (val) => {
        return (isNaN(val))
    }

    restricted = (val, characters) => {
        //not sure how to do this. come back to it
        return val.test(characters)
    }

    isEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
        return expression.test(String(email).toLowerCase())
    }

    // isError = () => {
    //     return new Promise((resolve, reject) => {
    //         if (Object.keys(this.error).length === 0 && this.error.constructor === Object) {
    //             this.error.hasError = false
    //         } else {
    //             this.error.hasError = true
    //         }
    //         resolve(this.error)
    //     })
    // }

    isError = () => {
        // Check if the error object contains values
        if (Object.keys(this.error).length === 0) {
            // if there are no errors set this.hasError to false
            return false
        } else {
            // if there are errors set this.hasError to true
            return true
        }
    }

    requiredMessage = (name) => {
        let newEr = Object.assign({}, this.error)
        newEr[name] = name + ' is a required field'
        this.error = newEr
    }

    isFloat = (n) => {
        var numNum = +n
        if (isNaN(numNum)) {
            return false
        }
    }
}

export default Validate