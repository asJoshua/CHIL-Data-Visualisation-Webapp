import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@/components/ui/text-field/text-field';
import DataTable from '@/components/ui/table/table';
import CustomThemeProvider from "@/theme/ThemeProvider";
import { Container, Typography } from "@mui/material";


const columns = [
    { id: "campaignId", label: "Campaign ID", minWidth: 100, align: "left" },
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "description", label: "Description", minWidth: 170, align: "left" },
    { id: "startDate", label: "Start Date", minWidth: 170, align: "left" },
    { id: "endDate", label: "End Date", minWidth: 170, align: "left" },
];

const rows = [
    { name: "Deployment 1", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
    { name: "Deployment 2", description: "Another description", startDate: "2023-05-01", endDate: "2023-11-30", campaignId: "5678" },
    { name: "Deployment 3", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
    { name: "Deployment 1", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" },
    { name: "Deployment 2", description: "Another description", startDate: "2023-05-01", endDate: "2023-11-30", campaignId: "5678" },
];

const DeploymentsPage = (): React.JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const filteredRows = rows.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

// to set the page to the top when it loads, was being funky
    useEffect(() => {
        window.scrollTo(0, 40);
    }, []);

    const handleRowClick = (id: string) => {
        navigate(`/deployments/${id}`);
    }

    return (
        <CustomThemeProvider>
                <Container className="flex justify-center items-center min-h-screen px-24 pb-20">
                    <Container className="flex flex-col items-start w-full max-w-full pt-12">
                        <Typography variant="h2" color="primary.main">Deployments</Typography>
                        <Typography variant="h4" color="secondary.main">All deployments of our instruments</Typography>
                        <div style={{paddingTop: "5px", paddingBottom: "5px"}}>
                            <TextField
                                className="w-full max-w-sm"
                                label="Search Deployments..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                sx={{
                                    "& .MuiInputBase-input": {
                                    color: "secondary.main",
                                    },
                                }}
                            />
                        </div>
                        <div className="overflow-auto w-full max-h-[70vh]">
                            <DataTable columns={columns} rows={filteredRows} onRowClick={handleRowClick} />
                        </div>
                    </Container>
                </Container>
        </CustomThemeProvider>
    );
}

export { DeploymentsPage };
