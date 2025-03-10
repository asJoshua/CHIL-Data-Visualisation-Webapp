import { TextField } from '@mui/material';
import { SetStateAction, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 

export const ColorPicker = (props: {
    id: string; 
    label: string; 
})  => {

    const [numberValue, setNumberValue] = useState(); 

    const handleChange = (event: any) => {
        setNumberValue(event.target.value);
    };

    return (
        <TextField 
            id={props.id} 
            label={props.label} 
            type='number' 
            variant="outlined"
            onChange={handleChange}/>
    );
}



