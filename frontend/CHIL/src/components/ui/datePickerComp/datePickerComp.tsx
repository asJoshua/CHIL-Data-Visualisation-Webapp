import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import styles from './datePickerComp.module.css'; 
import './datePickerOverride.css'; 

export const DatePickerComp = (props: {
    id: string | undefined; 
    dateFormat: string | string[] | undefined;
    placeholderText: string | undefined; 
    className?: string;
    onDateChange?: (arg0: string, arg1: Date) => void
})  => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date: Date | null) => {
        const newDate = date || new Date();
        
        if (newDate) {
            setSelectedDate(newDate)
        } else {
            setSelectedDate(new Date())
        }
        if (props.onDateChange && props.id) {
            props.onDateChange(props.id, newDate);
        }
    };

    return (
        <DatePicker
        id={props.id}
        selected={selectedDate}
        dateFormat={props.dateFormat}
        placeholderText={props.placeholderText}
        onChange={handleDateChange}
        className={`${styles.defaultStyle} ${props.className || ''}`}
        wrapperClassName={styles.fullWidth}
        />
    );
}




