import { TextField } from '@mui/material';
import { SetStateAction, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 

export const NumberSelect = (props: {
    id: string; 
    label: string; 
    onNumberChange?: any;
})  => {

    const [numberValue, setNumberValue] = useState(); 

    const handleChange = (event: any) => {
        setNumberValue(event.target.value);
        if (props.onNumberChange) {
            props.onNumberChange(numberValue)
        }
    };

    return (
        <TextField 
            id={props.id} 
            label={props.label} 
            type='number' 
            variant="outlined"
            fullWidth
            onChange={handleChange}/>  
    );
}



