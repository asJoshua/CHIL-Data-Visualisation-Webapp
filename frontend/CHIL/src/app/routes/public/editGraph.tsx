import { VariableLayout } from "@/components/layouts/variable-layout";
import {
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DatePickerComp } from "@/components/ui/datePickerComp/datePickerComp";
import { DropDownSelect } from "@/components/ui/select/select";
import { ColorPicker } from "@/components/ui/colorPicker/colorPicker";
import { TextField } from "@/components/ui/text-field/text-field";
import axios from "axios";
import { LineGraph } from "@/components/ui/lineGraph/lineGraph";
import {
  createDataset,
  Dataset,
} from "@/components/ui/lineGraph/datasetObject";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import {
  GraphConfig,
  PlotInformation,
} from "@/components/ui/lineGraph/graphConfigObject";

const EditGraphRoot = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [graphName, setGraphName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedInstrument, setSelectedInstrument] = useState("");
  type PlotName = "plotOne" | "plotTwo";
  const [currentPlot, setCurrentPlot] = useState<PlotName>("plotOne");
  const [plotInformation, setPlotInformation] = useState<PlotInformation>({
    plotOne: {
      measurement: "",
      color: "",
      yAxisID: "y",
      show: true,
      axisLabel: "Plot 1",
    },
    plotTwo: {
      measurement: "",
      color: "",
      yAxisID: "y2",
      show: false,
      axisLabel: "Plot 2",
    },
  });
  interface GraphDataItem {
    timestamp: string;
    [key: string]: number | string; // Allows dynamic keys for measurements
  }
  const [graphData, setGraphData] = useState<GraphDataItem[]>();
  const [dateLabels, setDateLabels] = useState<string[]>([]);
  const [dataSets, setDataSets] = useState<Dataset[]>([
    createDataset(
      "Plot 1",
      [],
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "y",
      true
    ),
    createDataset(
      "Plot 2",
      [],
      "rgb(255, 99, 132)",
      "rgb(255, 99, 132)",
      "y2",
      false
    ),
  ]);
  const { id } = useParams();
  const cryoeggOptions = [
    { value: "conductivity", label: "Conductivity" },
    { value: "temperature_pt1000", label: "Temperature PT1000" },
    { value: "pressure", label: "Pressure" },
    { value: "temperature", label: "Temperature" },
    { value: "receiver_voltage", label: "Receiver Voltage" },
  ];
  const cryowurstOptions = [
    { value: "temperature_tmp117", label: "Temperature TMP117" },
    { value: "mag_x", label: "Magnetometer X" },
    { value: "mag_y", label: "Magnetometer Y" },
    { value: "mag_z", label: "Magnetometer Z" },
    { value: "accel_imu_x", label: "Accelerometer IMU X" },
    { value: "accel_imu_y", label: "Accelerometer IMU Y" },
    { value: "accel_imu_z", label: "Accelerometer IMU Z" },
    { value: "accel_tilt_x", label: "Accelerometer Tilt X" },
    { value: "accel_tilt_y", label: "Accelerometer Tilt Y" },
    { value: "accel_tilt_z", label: "Accelerometer Tilt Z" },
    { value: "pitch", label: "Pitch" },
    { value: "roll", label: "Roll" },
    { value: "conductivity", label: "Conductivity" },
    { value: "pressure", label: "Pressure" },
    { value: "temperature_keller", label: "Temperature Keller" },
  ];

  const fetchDataBetweenTimestampsAxios = useCallback(
    async (endpoint: string, startTimestamp: string, endTimestamp: string) => {
      const jwtToken = localStorage.getItem("token");
      try {
        const response = await axios.get(`/chil/api/data/${endpoint}/`, {
          params: {
            start_timestamp: startTimestamp,
            end_timestamp: endTimestamp,
          },
          headers: { Authorization: `Bearer ${jwtToken}` },
        });
        return response.data;
      } catch (error) {
        console.warn(error);
        return null;
      }
    },
    []
  );

  const handleGraphNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGraphName(e.target.value);
    },
    []
  );

  const handleDateChange = useCallback(
    (pickerId: string, date: Date) => {
      const startChange = pickerId === "start-date";
      if (startChange) {
        setStartDate(date);
      } else {
        setEndDate(date);
      }

      if (!selectedInstrument) {
        return;
      }

      const fetchData = async () => {
        try {
          const cryowurstData = await fetchDataBetweenTimestampsAxios(
            selectedInstrument + "/get-between-timestamps",
            startChange ? date.toISOString() : startDate.toISOString(),
            !startChange ? date.toISOString() : endDate.toISOString()
          );
          if (cryowurstData) {
            setGraphData(cryowurstData);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    },
    [endDate, fetchDataBetweenTimestampsAxios, selectedInstrument, startDate]
  );

  useEffect(() => {
    if (graphData) {
      const sortedData = [...graphData].sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

      const filteredData1 = sortedData.map(
        (row) => row[plotInformation.plotOne.measurement]
      );
      const filteredData2 = sortedData.map(
        (row) => row[plotInformation.plotTwo.measurement]
      );

      const newDateLabels = graphData.map((row) => row.timestamp);
      setDateLabels(newDateLabels);

      setDataSets([
        {
          ...dataSets[0],
          data: filteredData1,
          borderColor: plotInformation.plotOne.color,
          backgroundColor: plotInformation.plotOne.color,
          show: true,
          label: plotInformation.plotOne.axisLabel, // Use axisLabel
        },
        {
          ...dataSets[1],
          data: filteredData2,
          borderColor: plotInformation.plotTwo.color,
          backgroundColor: plotInformation.plotTwo.color,
          show: plotInformation.plotTwo.show,
          label: plotInformation.plotTwo.axisLabel, // Use axisLabel
        },
      ]);
    }
  }, [graphData, plotInformation]);

  const handlePlotChange = useCallback(() => {
    setCurrentPlot((prevCurrentPlot) => {
      const newPlot = prevCurrentPlot === "plotOne" ? "plotTwo" : "plotOne";
      setPlotInformation((prevInfo) => ({
        ...prevInfo,
        plotOne: { ...prevInfo.plotOne, yAxisID: "y", show: true },
        plotTwo: {
          ...prevInfo.plotTwo,
          yAxisID: "y2",
          show: newPlot === "plotTwo",
        },
      }));
      setDataSets((prevDataSets) => [
        { ...prevDataSets[0], show: true },
        { ...prevDataSets[1], show: newPlot === "plotTwo" },
      ]);
      return newPlot;
    });
  }, []);

  const handleInstrumentChange = useCallback((newInstrument: string) => {
    setSelectedInstrument(newInstrument);
  }, []);

  const handleMeasurementChange = useCallback(
    (newMeasurement: string) => {
      setPlotInformation((prevPlotInformation) => ({
        ...prevPlotInformation,
        [currentPlot]: {
          ...prevPlotInformation[currentPlot],
          measurement: newMeasurement,
        },
      }));
    },
    [currentPlot]
  );

  const handleColorChange = useCallback(
    (newColor: string) => {
      setPlotInformation((prevPlotInformation) => ({
        ...prevPlotInformation,
        [currentPlot]: { ...prevPlotInformation[currentPlot], color: newColor },
      }));
    },
    [currentPlot]
  );

  const handleAxisLabelChange = useCallback(
    (newLabel: string) => {
      setPlotInformation((prevPlotInformation) => ({
        ...prevPlotInformation,
        [currentPlot]: {
          ...prevPlotInformation[currentPlot],
          axisLabel: newLabel,
        },
      }));
    },
    [currentPlot]
  );

  const triggerValueOverride = useCallback(async () => {
    const tempCurrentPlot = currentPlot;
    await setCurrentPlot("plotOne");
    await setCurrentPlot("plotTwo");
    setCurrentPlot(tempCurrentPlot);
  }, [currentPlot]);

  const handlePlotReset = useCallback(async () => {
    setPlotInformation((prevPlotInformation) => ({
      ...prevPlotInformation,
      [currentPlot]: {
        measurement: "",
        color: "",
        yAxisID: "y",
        show: true,
        axisLabel: "Plot 1",
      },
    }));
    triggerValueOverride();
  }, [currentPlot]);

  const measurementOptions = useMemo(() => {
    if (selectedInstrument === "cryowurst") {
      return cryowurstOptions;
    } else if (selectedInstrument === "cryoegg") {
      return cryoeggOptions;
    } else {
      return [];
    }
  }, [selectedInstrument]);

  const goToDeployments = () => {
    navigate("/deployments/" + id);
  };

  const saveGraphConfig = () => {
    const graphId = uuidv4();
    const graphConfig: GraphConfig = {
      id: graphId,
      deploymentId: id || "",
      graphName,
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
      selectedInstrument,
      plotInformation,
      dataSets: dataSets.map((dataset) => ({
        ...dataset,
        data: [...dataset.data],
      })),
      dateLabels: [...dateLabels],
    };
    const jsonString = JSON.stringify(graphConfig);
    localStorage.setItem(`graph-${graphId}`, jsonString);
    goToDeployments();
  };

  return (
    <VariableLayout>
      <Container>
        <Box mt={1} mb={1}>
          <Grid container justifyContent="space-between">
            <Grid container alignContent="center">
              <Typography
                variant="h2"
                color="textSecondary"
                sx={{ textAlign: "center", marginBottom: 0 }}
              >
                Depoy-TEST
              </Typography>
            </Grid>
            <Grid container spacing={1} alignContent="center">
              <Grid>
                <Button
                  variant="contained"
                  size="large"
                  onClick={goToDeployments}
                >
                  CANCEL
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  size="large"
                  onClick={saveGraphConfig}
                >
                  ADD
                </Button>
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
            onChange={handleGraphNameChange}
          />
        </Box>

        <Grid container>
          <Grid size={6}>
            {/* Graph */}
            <LineGraph
              titleText={graphName}
              datasets={dataSets}
              labels={dateLabels}
            />
          </Grid>

          <Grid size={6}>
            {/* Date range select */}
            <Box mb={1}>
              <Grid container spacing={1}>
                <Grid size={6}>
                  <DatePickerComp
                    id={"start-date"}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Please select start date"
                    onDateChange={handleDateChange}
                  />
                </Grid>
                <Grid size={6}>
                  <DatePickerComp
                    id={"end-date"}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Please select start date"
                    onDateChange={handleDateChange}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Instrument Select */}
            <Box mb={1}>
              <Grid container>
                <DropDownSelect
                  labelText="Instrument"
                  selectId="Instrument"
                  labelId="Instrument"
                  selectLabel="Instrument"
                  onSelectChange={handleInstrumentChange}
                  options={[
                    { value: "cryowurst", label: "Cryowurst" },
                    { value: "cryoegg", label: "Cryoegg" },
                  ]}
                  valueOverride={["Instrument", selectedInstrument]}
                />
              </Grid>
            </Box>

            {/* Plot select */}
            <Box mb={1}>
              <Grid container spacing={1}>
                <Grid size={6}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handlePlotChange}
                    fullWidth
                    disabled={currentPlot === "plotOne"}
                  >
                    Plot 1
                  </Button>
                </Grid>
                <Grid size={6}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handlePlotChange}
                    fullWidth
                    disabled={currentPlot === "plotTwo"}
                  >
                    Plot 2
                  </Button>
                </Grid>
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
                  options={measurementOptions}
                  valueOverride={[
                    currentPlot,
                    plotInformation[currentPlot].measurement,
                  ]}
                />
              </Grid>
            </Box>

            {/* Color Select */}
            <Box mb={1}>
              <Grid container>
                <Grid size={6} alignContent="center">
                  <p>Plot Colour</p>
                </Grid>
                <Grid size={6}>
                  <ColorPicker
                    onColorChange={handleColorChange}
                    defaultColor="#AABBCC"
                    valueOverride={[
                      currentPlot,
                      plotInformation[currentPlot].color,
                    ]}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Axis Label Select */}
            <Box mb={1}>
              <Grid container>
                <Grid size={6} alignContent="center">
                  <p>Axis Label</p>
                </Grid>
                <Grid size={6}>
                  <TextField
                    id={`axis-label-${currentPlot}`}
                    label="Axis Label"
                    variant="outlined"
                    fullWidth
                    value={plotInformation[currentPlot].axisLabel}
                    onChange={(e) => handleAxisLabelChange(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Reset Plot */}
            <Box mb={1}>
              <Grid container direction="row-reverse">
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={handlePlotReset}
                >
                  Reset Plot
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </VariableLayout>
  );
};

export { EditGraphRoot };
