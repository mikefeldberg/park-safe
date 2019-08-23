
const CreateApplicationPageData = {
    ageRanges: {
        ageRange1: {
            value: '17 or younger',
            label: 'Under 18',
        },
        ageRange2: {
            value: '18 to 24',
            label: '18 - 24',
        },
        ageRange3: {
            value: '25 to 36',
            label: '25 - 36',
        },
        ageRange4: {
            value: '37 to 49',
            label: '37 - 49',
        },
        ageRange5: {
            value: '50 to 61',
            label: '50 - 61',
        },
        ageRange6: {
            value: '62 or older',
            label: '62 +',
        },
    },
    circumstances: {
        circumstance1: {
            nameAndId: 'reasonUnemployment',
            label: 'Unemployment',
        },
        circumstance2: {
            nameAndId: 'reasonLowIncome',
            label: 'Low Income',
        },
        circumstance3: {
            nameAndId: 'reasonRelationship',
            label: 'Relationship',
        },
        circumstance4: {
            nameAndId: 'reasonDisability',
            label: 'Health Issues',
        },
        circumstance5: {
            nameAndId: 'reasonEviction',
            label: 'Eviction',
        },
        circumstance6: {
            nameAndId: 'reasonOther',
            label: 'Other',
        },
    },
    urgency: {
        urgency1: {
            value: 'urgencyAlreadyInCar',
            label: 'Already living in my vehicle',
        },
        urgency2: {
            value: 'urgencyThisWeek',
            label: 'Within the next week',
        },
        urgency3: {
            value: 'urgencyThisMonth',
            label: 'Within next month',
        },
        urgency4: {
            value: 'urgencyNextMonth',
            label: 'More than one month',
        }
    }
}

export default CreateApplicationPageData;