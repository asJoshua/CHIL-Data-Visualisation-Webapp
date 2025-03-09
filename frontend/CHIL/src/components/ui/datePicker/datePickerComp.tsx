import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import styles from './datePickerComp.module.css'; 

export const DatePickerComp = (props: {
    id: string | undefined; 
    dateFormat: string | string[] | undefined;
    placeholderText: string | undefined; 
    className: string;
})  => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: any) => {
        if (date) {
            setSelectedDate(date)
        } else {
            setSelectedDate(new Date())
        }
    };

    return (
        <DatePicker
        id={props.id}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat={props.dateFormat}
        placeholderText={props.placeholderText}
        className={`${styles.defaultStyle} ${props.className || ''}`}
        />
    );
}




