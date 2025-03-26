import React, { useEffect, useState } from 'react';
import { TextField } from '@/components/ui/text-field/text-field';
import DataTable from '@/components/ui/table/table';
import CustomThemeProvider from "@/theme/ThemeProvider";
import { CircularProgress, Container, InputLabel, Typography } from "@mui/material";
import { Button } from '@/components/ui/button/button';
import axios from 'axios';

export type UploadCsvProps = {
    apiURL: string
}

const columns = [
    { id: "campaignId", label: "Campaign ID", minWidth: 100, align: "left" },
    { id: "name", label: "Name", minWidth: 170, align: "left" },
    { id: "description", label: "Description", minWidth: 170, align: "left" },
    { id: "startDate", label: "Start Date", minWidth: 170, align: "left" },
    { id: "endDate", label: "End Date", minWidth: 170, align: "left" },
];

const rows = [
    { name: "Deployment 1", description: "Test description", startDate: "2023-01-01", endDate: "2023-12-31", campaignId: "1234" }
];

const UploadCsv = ({apiURL}: UploadCsvProps)=> {
    const [file, setFile] = useState<File | null>(null);
    const [type, setType] = useState("cryoegg" || "cryowurst");
    const [uploadStatus, setUploadStatus] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [isUploading, setIsUploading] = useState(false);  // Loading state
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files != null){
            setFile(e.target.files[0])
            console.log("File selected:", e.target.files[0]);
        }
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as "cryoegg" | "cryowurst");
    };

    const handleFileUpload = async (event: any) => {
        event.preventDefault();
        console.log("Form submitted");  // Debug line
    
        if (!file) {
            setError(true);
            setErrorMessage("Please select a file first!");
            return;
        } 
        
        else {
            setError(false);
            setErrorMessage("");
            setIsUploading(true);

            console.time("FileUploadTime");

            const formData = new FormData();
            formData.append("file", file);
            formData.append("type", type);
    
            try {
                console.log("sending request...")
                const response = await axios.post(apiURL, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }, 
            );

            console.log('Response:', response);  // Debug line

                if (response.status === 200 || response.status === 201) {
                    setSuccess(true);
                    setSuccessMessage("File Uploaded!");
                }else {
                    setSuccess(false);
                    setError(true);
                    setErrorMessage("Something went wrong, please try again.");
                }

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 400 && error.response.data?.error === "no file uploaded"){
                        setError(true);
                    }
                }
            } finally {
                setIsUploading(false)
                console.timeEnd("FileUploadTime")
            }
        }
    };

    return (
        <CustomThemeProvider>
            <Container sx={{display: 'flex', justifyContent: 'center', backgroundColor: "pink"}}>
                <form onSubmit={handleFileUpload}>
                    <input type='file' accept='.csv' onChange={handleFileChange}/>
                    
                    <InputLabel>Select Data Type</InputLabel>
                    <select onChange={handleTypeChange} value={type}>
                        <option value="cryoegg">Cryoegg</option>
                        <option value="cryowurst">Cryowurst</option>
                    </select>

                    <Button type="submit" color='primary' variant='contained' disabled={isUploading}>
                        {isUploading ? 'Uploading...' : 'Upload File'}
                    </Button>

                    {/* Show loading indicator */}
                    {isUploading && <CircularProgress size={24} sx={{ marginLeft: '10px' }} />}

                    {success && <Typography color="green">{successMessage}</Typography>}
                    {error && <Typography color="red">{errorMessage}</Typography>}
                </form>
            </Container>
        </CustomThemeProvider>
    );
}

export { UploadCsv };
