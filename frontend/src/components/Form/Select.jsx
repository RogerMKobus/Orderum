import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';


const Select = ({ name, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref) => {
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value[0].value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <ReactSelect
            defaultValue={defaultValue}
            ref={selectRef}
            classNamePrefix="react-select"
            {...rest}
        />
    );
};

export default Select;