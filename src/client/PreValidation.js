const preValidation = (ValRules) => {
    if (ValRules.mode == 'debug') {
        console.log('validation module running in debug mode. No rules will be enforced')
    } else if (ValRules.mod == 'development') {
        console.log('Validation running in development mode')
    } else if (ValRules.mode == 'production') {
        return null
    } else {
        console.log(`Invalid value ${ValRules.mode} set for "ValRules.mode" `)
    }
}
