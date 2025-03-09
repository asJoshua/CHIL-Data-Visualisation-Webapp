import { VariableLayout } from '@/components/layouts/variable-layout';
import { Grid2 as Grid, Button, Typography, Container, TextField } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { DatePickerComp } from '@/components/ui/datePicker/datePickerComp';

const EditGraphRoot = (): React.JSX.Element => {

    
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const datePickerIds = ["start-date", "end-date"]
    const dateFormat = "dd-MM-yyyy"

    const handleDateChange = (pickerId: string, date: Date) => {
        if (pickerId = datePickerIds[0]) {
            setStartDate(date)
        } else {
            setEndDate(date)
        }
        console.log(startDate, endDate)
    }
    
    return (
        <VariableLayout>
            <Container>

                <Grid container justifyContent="space-between">
                    <Grid>
                        <Typography variant="h2" gutterBottom color='textSecondary'>
                            Depoy-TEST
                        </Typography>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid>
                            <Button variant='contained' size='large'>CANCEL</Button>
                        </Grid>
                        <Grid>
                            <Button variant='contained' size='large'>ADD</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <TextField id="outlined-basic" label="Graph Name" variant="outlined" fullWidth/>

                <Grid container>
                    <Grid size={6}>
                        Graph be here
                    </Grid>
                    <Grid size={6}>
                        <Grid container justifyContent="right" spacing={1}>
                            <DatePickerComp
                                id={datePickerIds[0]}
                                dateFormat={dateFormat}
                                placeholderText='Please select start date'
                                onDateChange={handleDateChange}
                                />
                            <p>-</p>
                            <DatePickerComp
                                id={datePickerIds[1]}
                                dateFormat={dateFormat}
                                placeholderText='Please select start date'
                                onDateChange={handleDateChange}
                                />
                        </Grid>
                    </Grid> 
                </Grid>

            </Container>
        </VariableLayout>
    );
}

export { EditGraphRoot };
