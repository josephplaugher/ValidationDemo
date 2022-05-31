const ValRules = [
    // Add Contact Log rules
    {
        name: 'contactName',
        required: true,
    },
    {
        name: 'relationship',
        required: true
    },
    {
        name: 'primaryContact',
        required: false,
        checkBox: true
    },
    {
        name: 'businessName',
        required: false
    },
    {
        name: 'streetAddress',
        required: false
    },
    {
        name: 'city',
        required: false
    },
    {
        name: 'state',
        required: false,
        alphaOnly: true,
        errorMsg: 'Please enter a valid state'
    },
    {
        name: 'zip',
        required: false,
        zipCode: true
    },
    {
        name: 'email',
        required: false,
        email: true
    },
    {
        name: 'homePhone',
        required: false,
        phone: true
    },
    {
        name: 'workPhone',
        required: false,
        phone: true
    },
    {
        name: 'cellPhone',
        required: false,
        phone: true
    },
];

export default ValRules;