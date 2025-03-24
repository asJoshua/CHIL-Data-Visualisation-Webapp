import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 

export const NumberSelect = (props: {
    id: string; 
    label: string; 
    onNumberChange?: (value: string) => void;
    valueOverride?: [string, string]; 
})  => {

    const [numberValue, setNumberValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setNumberValue(newValue);
        if (props.onNumberChange && newValue !== undefined) {
            props.onNumberChange(newValue);
        }
    };

    useEffect(() => {
        if (props.valueOverride?.[0] !== undefined && props.valueOverride !== undefined) {
            setNumberValue(props.valueOverride[1] as string);
        }
    }, [props.valueOverride?.[0]]);

    return (
        <TextField 
            id={props.id} 
            label={props.label} 
            type='number' 
            variant="outlined"
            fullWidth
            value={numberValue}
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



