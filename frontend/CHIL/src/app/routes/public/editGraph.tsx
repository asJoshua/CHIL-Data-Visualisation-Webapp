import { VariableLayout } from '@/components/layouts/variable-layout';
import { Grid2 as Grid, Typography, Container, Box } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { DatePickerComp } from '@/components/ui/datePickerComp/datePickerComp';
import { DropDownSelect } from '@/components/ui/select/select';
import { ColorPicker } from '@/components/ui/colorPicker/colorPicker';
import { NumberSelect } from '@/components/ui/numberInput/numberInput';
import { Button } from '@/components/ui/button/button';
import { TextField } from '@/components/ui/text-field/text-field';

const EditGraphRoot = (): React.JSX.Element => {

    const [setGraphName] = useState('')
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
    const [isDisabled, setisDisabled] = useState(false);

    const handleGraphNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGraphName(e.target.value);
    };

    const handleDateChange = (pickerId: string, date: Date) => {
        if (pickerId == 'start-date') {
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

    const handleValueChange = (value: string, plot: any, valueKey: any) => {
        setPlotInformation((prevPlotInformation) => ({
            ...prevPlotInformation,
            [plot]: {
                ...prevPlotInformation.plotOne,
                [valueKey]: value,
            },
        }));
    }

    const disabledDivStyle = {
        pointerEvents: 'none',
        opacity: 0.5,
    };

    const triggerValueOverride = async () => {
        setisDisabled(true);
        const tempCurrentPlot = currentPlot;
        await setCurrentPlot('plotOne');
        await setCurrentPlot('plotTwo');
        setCurrentPlot(tempCurrentPlot);
        setisDisabled(false);
    }

    const handlePlotReset = async () => {
        setPlotInformation((prevPlotInformation) => ({
            ...prevPlotInformation,
            [currentPlot]: {
                instrument : '',
                measurement : '',
                color : '',
                scale : ''
            },
        }));
        triggerValueOverride();
    }

    return (
        <NumberInputProvider>
        <VariableLayout>
            <Container>

                <Box mt={1} mb={1}>
                    <Grid container justifyContent="space-between">
                        <Grid container alignContent='center'>
                            <Typography variant="h2" color='textSecondary' sx={{ textAlign: 'center', marginBottom: 0 }}>
                                Depoy-TEST
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} alignContent='center'>
                            <Grid>
                                <Button variant='contained' size='large'>CANCEL</Button>
                            </Grid>
                            <Grid>
                                <Button variant='contained' size='large'>ADD</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                
                <Box mb={1}>
                    <TextField 
                        id="outlined-basic" 
                        label="Graph Name" 
                        variant="outlined" 
                        fullWidth
                        onChange={handleGraphNameChange}/>
                </Box>

                <Grid container>

                    <Grid size={6}>
                        Graph be here
                    </Grid>

                    <Grid size={6}>
                        {/* Date range select */}
                        <Box mb={1}>
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
                        </Box>
                        
                        {/* Plot select */}
                        <Box mb={1}>
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
                        </Box>
                        
                        {/* Instrument Select */ }
                        <Box sx={isDisabled ? disabledDivStyle : {}}>
                        <Box mb={1}>
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
                        </Box>
                        
                        {/* Measurement Select */}
                        <Box mb={1}>
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
                        </Box>
                        
                        {/* Color Select */}
                        <Box mb={1}>
                            <Grid container>
                                <Grid size={6} alignContent='center'>
                                    <p>Plot Colour</p>
                                </Grid>
                                <Grid size={6}>
                                    <ColorPicker
                                        onColorChange={handleColorChange}
                                        defaultColor='#AABBCC'
                                        valueOverride={[currentPlot, plotInformation[currentPlot].measurement]}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        
                        {/* Scale select */}
                        <Box mb={1}>
                            <Grid container>
                                <Grid size={6} alignContent='center'>
                                    <p>Scale</p>
                                </Grid>
                                <Grid size={6}>
                                    <NumberSelect 
                                        id="scale"
                                        label="Scale"
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        </Box>
                        
                        {/* Reset Plot */}
                        <Box mb={1}>
                            <Grid container direction='row-reverse'>
                                <Button variant='contained' size='large' fullWidth onClick={handlePlotReset}>Reset Plot</Button>
                            </Grid>
                        </Box>
                        
                    </Grid> 
                </Grid>

            </Container>
        </VariableLayout>
        </NumberInputProvider>
    );
}

export { EditGraphRoot };
