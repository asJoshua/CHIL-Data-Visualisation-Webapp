import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/components/ui/text-field/text-field";
import DataTable from "@/components/ui/table/table";
import CustomThemeProvider from "@/theme/ThemeProvider";
import { Container, Typography } from "@mui/material";
import { Box } from "@/components/ui/box/box"
import axios from "axios";

const columns = [
  { id: "deployment_id", label: "ID", minWidth: 180, align: "left" },
  { id: "description", label: "Description", minWidth: 250, align: "left" },
  { id: "start_timestamp", label: "Start Date", minWidth: 170, align: "left" },
  { id: "end_timestamp", label: "End Date", minWidth: 170, align: "left" },
  { id: "instrument_id", label: "Instrument ID", minWidth: 180, align: "left" },
];

const DeploymentsPage = (): React.JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [deployments, setDeployments] = useState<any[]>([]);
  const [instrumentDeployments, setInstrumentDeployments] = useState<any[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all deployments
        const deploymentResponse = await axios({
          method: "get",
          url: "http://localhost:8000/chil/api/deployment/list",
          withCredentials: true,
        });

        // Fetch all instrument deployments
        const instrumentResponse = await axios({
          method: "get",
          url: "http://localhost:8000/chil/api/deployment/list-instrument-deployment",
          withCredentials: true,
        });

        setDeployments(deploymentResponse.data);
        setInstrumentDeployments(instrumentResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const mergedData = deployments.map((deployment) => {
    const matchedInstruments = instrumentDeployments
      .filter((inst) => inst.deployment_id === deployment.deployment_id)
      .map((inst) => inst.instrument_id);

    return {
      ...deployment,
      instrument_id: matchedInstruments.length > 0 ? matchedInstruments.join(", ") : "None",
    };
  });

  const filteredRows = mergedData.filter((row) =>
    Object.values(row).some((value) =>
      typeof value === "string" || typeof value === "number"
        ? value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        : false
    )
  );

  const handleRowClick = (id: string) => {
    navigate(`/deployments/${id}`);
  };

  return (
    <CustomThemeProvider>
      <Container maxWidth="lg" sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "4rem" }}>
        <Box 
          sx={{ 
            width: "100%", 
            padding: "3rem", 
            borderRadius: "12px", 
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
            backgroundColor: "white",
            animation: "fadeIn 0.5s ease-in-out"
          }}
        >
          <Typography variant="h2" color="primary" sx={{marginBottom: "1rem" }}>
            Deployments
          </Typography>
          <Typography variant="h5" color="secondary" sx={{ marginBottom: "1.5rem" }}>
            Explore all instances where our instruments have been deployed.
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="Search Deployments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              marginBottom: "1.5rem",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
              },
            }}
          />

          <Box sx={{ overflow: "hidden", borderRadius: "12px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
            <DataTable columns={columns} rows={filteredRows} onRowClick={handleRowClick} />
          </Box>
        </Box>
      </Container>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </CustomThemeProvider>
  );
};

export { DeploymentsPage };
