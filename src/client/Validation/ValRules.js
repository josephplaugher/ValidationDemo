const ValRules = [
    {
        name: 'password',
        required: true,
        minLength: 6,
        customErrMsg: {
            msg: 'This is a custom password error message',
            check: () => {
                console.log('add customer error checker function here')
            }
        }
    },
    {
        name: 'fname',
        required: true,
        alphanumeric: 'true',
        customErrMsg: 'This is a custom first name error message',
    },
    {
        name: 'email',
        required: true,
        email: true,
        customErrMsg: 'This is a customer email error message'
    },
    {
        name: 'date',
        required: false,
        alphanumeric: true,
        customErrMsg: 'This is a custom date error message'
    }
]

export default ValRules;