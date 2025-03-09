import { VariableLayout } from '@/components/layouts/variable-layout';
import { Grid2 as Grid, Button, Typography, Container, TextField } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { DatePickerComp } from '@/components/ui/datePicker/datePickerComp';
import { BorderAll } from '@mui/icons-material';

const EditGraphRoot = (): React.JSX.Element => {
    
    // const [startDate, setStartDate] = useState(new Date());

    // const handleChange = (date: any) => {
    //     if (date) {
    //       setStartDate(date);
    //     } else {
    //       setStartDate(new Date());
    //     }
    // };

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
                        <Grid container justifyContent="center" alignContent="center" spacing={1}>
                            <DatePickerComp
                                id='start-date'
                                dateFormat='yyyy-mm-dd'
                                placeholderText='Please select start date'
                                />
                            <p>-</p>
                            <DatePickerComp
                                id='end-date'
                                dateFormat='yyyy-mm-dd'
                                placeholderText='Please select start date'
                                />
                        </Grid>
                    </Grid> 
                </Grid>

            </Container>
        </VariableLayout>
    );
}

export { EditGraphRoot };
