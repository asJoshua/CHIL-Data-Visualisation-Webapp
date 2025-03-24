import { TextField } from '@mui/material';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 

export const NumberSelect = (props: {
    id: string; 
    label: string; 
    onNumberChange?: (value: number | undefined) => void;
})  => {

    const [numberValue, setNumberValue] = useState<number | undefined>(); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value ? parseInt(event.target.value, 10) : undefined;
        setNumberValue(newValue);
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
            onChange={handleChange}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'black', 
                },
                backgroundColor: 'white', 
                '&:hover': {
                    backgroundColor: '#CFDFE3', 
                },
                '& input[type=number]': {
                    '-moz-appearance': 'textfield'
                },
                '& input[type=number]::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                '& input[type=number]::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                }
            }}
            />  
    );
}



