import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core'

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DatePicker({ name, ...rest }) {
    const dateRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 7)

    const [date, setDate] = useState(newDate);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: dateRef.current,
            path: 'props.selected'
        })
    }, [fieldName, registerField])

    return (
        <ReactDatePicker 
        dateFormat="dd/MM/yyyy" 
        todayButton="Hoje" 
        ref={dateRef} 
        selected={date} 
        onChange={setDate} 
        {...rest} 
        />
    );
}

export default DatePicker;