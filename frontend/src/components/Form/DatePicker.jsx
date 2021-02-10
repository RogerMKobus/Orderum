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

    function returnDate() {
        if (edit) {
            const dd = location.state.order.date.slice(0, 2)
            const mm = location.state.order.date.slice(3, 5)
            const yy = location.state.order.date.slice(6, 10)
            const newDate = new Date(`${yy}-${mm}-${dd}T00:00:00`)
            setDate(newDate)
        }
        else {
            const newDate = new Date();
            setDate(newDate.getDate() + 7)
        }
    }

    useEffect(() => {
        returnDate()
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