const ValRules = [
    // Financial forms rules
    {
        name: 'date',
        required: true,
        dateFormat: true,
    },
    {
        name: 'amount',
        required: true,
        decimal: true,
        errorMsg: 'Valid dollar amount required.'
    },
    {
        name: 'notes',
        required: false
    }
];

export default ValRules;