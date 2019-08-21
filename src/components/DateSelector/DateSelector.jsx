import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelector = props => {
    return (
        <DatePicker
            todayButton={'Today'}
            selected={props.firstReminder}
            onChange={props.handleFirstReminder}
        />
    );
}

export default DateSelector;