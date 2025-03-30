import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/components/ui/text-field/text-field";
import DataTable from "@/components/ui/table/table";
import CustomThemeProvider from "@/theme/ThemeProvider";
import { Container, Typography } from "@mui/material";
import { Box } from "@/components/ui/box/box"

const columns = [
  { id: "campaignId", label: "Campaign ID", minWidth: 120, align: "left" },
  { id: "name", label: "Name", minWidth: 180, align: "left" },
  { id: "description", label: "Description", minWidth: 250, align: "left" },
  { id: "startDate", label: "Start Date", minWidth: 170, align: "left" },
  { id: "endDate", label: "End Date", minWidth: 170, align: "left" },
];

const rows = [
  { name: "Deployment 1", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
  { name: "Deployment 2", description: "Another description", startDate: "2023-05-01", endDate: "2023-11-30", campaignId: "5678" },
  { name: "Deployment 3", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "91011" },
  { name: "Deployment 4", description: "Monitoring ice shifts", startDate: "2024-02-15", endDate: "2024-12-01", campaignId: "1213" },
];

const DeploymentsPage = (): React.JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
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
