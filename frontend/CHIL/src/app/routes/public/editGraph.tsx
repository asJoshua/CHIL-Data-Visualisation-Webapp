import { VariableLayout } from '@/components/layouts/variable-layout';
import { Box, Container, Grid2 as Grid, Typography } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';
import { DatePickerComp } from '@/components/ui/datePickerComp/datePickerComp';
import { DropDownSelect } from '@/components/ui/select/select';
import { ColorPicker } from '@/components/ui/colorPicker/colorPicker';
import { NumberSelect } from '@/components/ui/numberInput/numberInput';
import { Button } from '@/components/ui/button/button';
import { TextField } from '@/components/ui/text-field/text-field';
import CryoeggGraph from '@/components/ui/graph-components/cryoegg-graph'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditGraphRoot = (): React.JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [graphName, setGraphName] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [stroke, setStroke] = useState('#AABBCC');
    
    const [selectedMeasurement, setSelectedMeasurement] = useState('');

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

    const handleScaleChange = (scale: string) => {
        handleValueChange(scale, currentPlot, 'scale');
    }

    const handleValueChange = (value: string, plot: string, valueKey: string) => {
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

    const createGraph = async (graphData: {
        url_id: string;
        graph_name: string,
        measurement: string;
        start_date: string;
        end_date: string;
        stroke: string;
    }) => {
        try {
            const response = await axios.post('chil/graph/cryoegg/create/', graphData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log("Graph created successfully!");
                return response.data;
            }
        } catch (error) {
            console.error("Error creating graph:", error);
        }
    };

    const handleAddClick = async () => {
        const graphData = {
            url_id: id || '',
            graph_name: graphName,
            measurement: selectedMeasurement,
            start_date: startDate.toISOString(),
            end_date: endDate.toISOString(),
            stroke: stroke
        };
        await createGraph(graphData);
    };

    return (
        <VariableLayout>
            <Container>

                <Box mt={1} mb={1}>
                    <Grid container justifyContent="space-between">
                        <Grid container alignContent='center'>
                            <Typography variant="h2" color='textSecondary' sx={{ textAlign: 'center', marginBottom: 0 }}>
                                Deployment-{id}
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} alignContent='center'>
                            <Grid>
                                <Button 
                                    onClick={()=> {navigate(`/deployments/${id}`)}}
                                    variant='contained' 
                                    size='large'>CANCEL</Button>
                            </Grid>
                            <Grid>
                                <Button 
                                    variant='contained' 
                                    size='large'
                                    onClick={() => {handleAddClick(); navigate(`/deployments/${id}`)}}>ADD</Button>
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

                    <Grid 
                        size={6}
                        padding={1}
                    >
                        <CryoeggGraph 
                        graphName={graphName}
                        measurement={selectedMeasurement}
                        startDate={startDate}
                        endDate={endDate}
                        stroke={stroke}/>
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
                                        onDateChange={(id, date) => handleDateChange(id, date)}
                                        />
                                </Grid>
                                <Grid size={6}>
                                    <DatePickerComp
                                        id={'end-date'}
                                        dateFormat='dd-MM-yyyy'
                                        placeholderText='Please select start date'
                                        onDateChange={(id, date) => handleDateChange(id, date)}/>
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
                                    onSelectChange={setSelectedMeasurement}
                                    options={[
                                        { value: 'conductivity', label: 'Conductivity' },
                                        { value: 'temperature', label: 'Temperature' },
                                        { value: 'temperature_pt1000', label: 'Temperature pt1000' },
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
                                        onColorChange={setStroke}
                                        defaultColor='#AABBCC'
                                        valueOverride={[currentPlot, plotInformation[currentPlot].color]}
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
                                        onNumberChange={handleScaleChange}
                                        valueOverride={[currentPlot, plotInformation[currentPlot].scale]}
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
    );
}

export { EditGraphRoot };
