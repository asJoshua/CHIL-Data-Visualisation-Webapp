import { VariableLayout } from '@/components/layouts/variable-layout';
import { Grid2 as Grid, Button, Typography, Container, TextField } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { DatePickerComp } from '@/components/ui/datePickerComp/datePickerComp';
import { DropDownSelect } from '@/components/ui/select/select';
import { ColorPicker } from '@/components/ui/colorPicker/colorPicker';
import { NumberSelect } from '@/components/ui/numberInput/numberInput';

const EditGraphRoot = (): React.JSX.Element => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    type PlotName = "plotOne" | "plotTwo";
    const [currentPlot, setCurrentPlot] = useState<PlotName>('plotOne');
    const [plotInformation, setPlotInformation] = useState({
        plotOne : { instrument : '',
                    measurement : '',
                    color : '',
                    scale : ''
                },
        plotTwo : { instrument : '',
                    measurement : '',
                    color : '',
                    scale : ''
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
        if (currentPlot == 'plotOne') {
            setCurrentPlot('plotTwo')
        } else {
            setCurrentPlot('plotOne')
        }
    }

    const handleInstrumentChange = (newInstrument: string) => {
        handleValueChange(newInstrument, currentPlot, 'instrument');
    }

    const handleMeasurementChange = (newMeasurement: string) => {
        handleValueChange(newMeasurement, currentPlot, 'measurement') 
    }

    const handleColorChange = (newColor: string) => {
        handleValueChange(newColor, currentPlot, 'color')
    }

    const handleScaleChange = (newScale: string) => {
        handleValueChange(newScale, currentPlot, 'scale')
    }

    const handleValueChange = (value: string, plot: any, valueKey: any) => {
        setPlotInformation((prevPlotInformation) => ({
            ...prevPlotInformation,
            [plot]: {
                ...prevPlotInformation.plotOne,
                [valueKey]: value,
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
                                    disabled={currentPlot === 'plotOne'}
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
                                    disabled={currentPlot === 'plotTwo'}
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
                                ]} 
                                valueOverride={[currentPlot, plotInformation[currentPlot].instrument]}/>
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
                                ]} 
                                valueOverride={[currentPlot, plotInformation[currentPlot].measurement]}/>
                        </Grid>

                        {/* Color Select */}
                        <Grid container>
                            <Grid size={6} alignContent='center'>
                                <p>Plot Colour</p>
                            </Grid>
                            <Grid size={6}>
                                <ColorPicker
                                    onColorChange={handleColorChange}
                                />
                            </Grid>
                        </Grid>

                        {/* Scale select */}
                        <Grid container>
                            <Grid size={6} alignContent='center'>
                                <p>Scale</p>
                            </Grid>
                            <Grid size={6}>
                                <NumberSelect 
                                    id="scale"
                                    label="Scale"
                                    onNumberChange={handleScaleChange}
                                />
                            </Grid>
                            
                        </Grid>
                        
                    </Grid> 
                </Grid>

            </Container>
        </VariableLayout>
    );
}

export { EditGraphRoot };
