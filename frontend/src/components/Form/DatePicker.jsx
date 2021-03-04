import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core'
import { useLocation } from 'react-router-dom'

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DatePicker({ edit, name, ...rest }) {
    
    const dateRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    const location = useLocation();

    const [date, setDate] = useState();

    useEffect(() => {
        function returnDate() {
            if (edit) {
                const parts = location.state.order.date.split('/')
                if(parts[1].length === 1){
                    parts[1] = (0 + parts[1])
                }
                const newDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00`)
                setDate(newDate)
            }
            else {
                const newDate = new Date().setDate(new Date().getDate() + 7)
                setDate(newDate)
            }
        }
        returnDate()
        registerField({
            name: fieldName,
            ref: dateRef.current,
            path: 'props.selected'
        })
    }, [fieldName, registerField, edit, location.state])

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