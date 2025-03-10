import { VariableLayout } from '@/components/layouts/variable-layout';
import { Grid2 as Grid, Button, Typography, Container, TextField } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { DatePickerComp } from '@/components/ui/datePickerComp/datePickerComp';
import { DropDownSelect } from '@/components/ui/select/select';

const EditGraphRoot = (): React.JSX.Element => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [currentPlot, setCurrentPlot] = useState(true);
    const [instrument, setInstrument] = useState('');

    const [plotInformation, setPlotInformation] = useState({
        plotOne : { instrument : 'breh',
                    measurement : 'uhm',
                    color : '#129321',
                    scale : 67
                },
        plotTwo : { instrument : 'breh',
                    measurement : 'uhm',
                    color : '#129321',
                    scale : 67
                }
    });

    const handleDateChange = (pickerId: string, date: Date) => {
        if (pickerId = 'start-date') {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
    }

    const handlePlotChange = () => {
        if (currentPlot) { 
            setCurrentPlot(false);
        } 
        else { 
            setCurrentPlot(true);
        }
    }

    const handleInstrumentChange = (selectedOption: string) => {
        setInstrument(selectedOption);
    }

    const handleMeasurementChange = (newMeasurement: string) => {
        setPlotInformation((prevPlotInformation) => ({
            ...prevPlotInformation,
            plotOne: {
              ...prevPlotInformation.plotOne,
              measurement: newMeasurement,
            },
        }));
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
                        {/* Date range select */}
                        <Grid container spacing={1}>
                            <Grid size={6}>
                                <DatePickerComp 
                                    id={'start-date'}
                                    dateFormat='dd-MM-yyyy'
                                    placeholderText='Please select start date'
                                    onDateChange={handleDateChange}/>
                            </Grid>
                            <Grid size={6}>
                                <DatePickerComp
                                    id={'end-date'}
                                    dateFormat='dd-MM-yyyy'
                                    placeholderText='Please select start date'
                                    onDateChange={handleDateChange}/>
                            </Grid>
                        </Grid>

                        {/* Plot select */}
                        <Grid container spacing={1}>
                            <Grid size={6}>
                                <Button 
                                    variant='contained' 
                                    size='large' 
                                    onClick={handlePlotChange}
                                    fullWidth 
                                    disabled={currentPlot}
                                >
                                    Plot 1
                                </Button>
                            </Grid>
                            <Grid size={6}>
                                <Button 
                                    variant='contained' 
                                    size='large' 
                                    onClick={handlePlotChange} 
                                    fullWidth
                                    disabled={!currentPlot}
                                >
                                    Plot 2
                                </Button>
                            </Grid>
                        </Grid>

                        {/* Instrument Select */}
                        <Grid container>
                            <DropDownSelect 
                                labelText="Instrument" 
                                selectId="Instrument"
                                labelId="Instrument" 
                                selectLabel="Instrument"
                                onSelectChange={handleInstrumentChange}
                                options={[
                                    { value: 'cryowurst', label: 'Cryowurst' },
                                    { value: 'cryoegg', label: 'Cryoegg' }
                                ]} />
                        </Grid>

                        {/* Measurement Select */}
                        <Grid container>
                            <DropDownSelect 
                                labelText="Measurement" 
                                selectId="Measurement"
                                labelId="Measurement" 
                                selectLabel="Measurement"
                                onSelectChange={handleMeasurementChange}
                                options={[
                                    { value: 'tilt', label: 'Tilt' },
                                    { value: 'conductivity', label: 'Conductivity' }
                                ]} />
                        </Grid>

                        {/* Colour Select */}

                        {/* Scale select */}
                    </Grid> 
                </Grid>

            </Container>
        </VariableLayout>
    );
}

export { EditGraphRoot };
