import {  useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css'; 
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export const DropDownSelect = (props: {
    valueOverride?: [string, string];
    onSelectChange?: (selectedOption: string) => void;
    labelText: string | undefined;
    selectId: string | undefined;
    labelId: string | undefined;
    options: { value: string | number; label: string; }[]; 
    selectLabel: string | undefined; 
})  => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value as string);
        if (props.onSelectChange) {
            props.onSelectChange(event.target.value as string);
        }
    };

    useEffect(() => {
        if (props.valueOverride?.[0] !== undefined && props.valueOverride !== undefined) {
            setSelectedOption(props.valueOverride[1] as string);
        }
    }, [props.valueOverride?.[0]]);

    return (
        <Box sx={{ minWidth: 120 }} width='100%'>
        <FormControl fullWidth>
            <InputLabel id={props.labelId}>{props.labelText}</InputLabel>
            <Select
                labelId={props.labelId}
                id={props.selectId}
                value={selectedOption}
                label={props.selectLabel}
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
                }}
            >
                {props.options.map((option: { value: string | number ; label: string; }) => (
                    <MenuItem key={option.value} value={option.value} sx={{ color: 'black' }}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </Box>
    );
}




