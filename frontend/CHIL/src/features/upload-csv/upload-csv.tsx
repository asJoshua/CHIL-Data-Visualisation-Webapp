import React, { useState } from 'react';
import CustomThemeProvider from "@/theme/ThemeProvider";
import { Box } from "@/components/ui/box/box"
import { CircularProgress, Typography } from "@mui/material";
import { Button } from '@/components/ui/button/button';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ListIcon from '@mui/icons-material/List';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

// added in features for now, also added in components. When needed to be used on a different
// page e.g., on the actual graph prage - just remove the path and routes for the url /admin/upload-csv
export type UploadCsvProps = {
    apiURL: string
}

const UploadCsv = ({apiURL}: UploadCsvProps)=> {
    const [file, setFile] = useState<File | null>(null);
    const [type, setType] = useState("cryoegg");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files != null){
            setFile(e.target.files[0])
            console.log("File selected:", e.target.files[0]);
        }
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as "cryoegg" | "cryowurst");
    };

    const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (!file) {
            setError(true);
            setErrorMessage("PLEASE SELECT A FILE FIRST!");
            return;
        } 
        
        else {
            setError(false);
            setErrorMessage("");
            setIsUploading(true);

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

                if (response.status === 201) {
                    setSuccess(true);
                    setSuccessMessage("FILE UPLOADED!");
                }else {
                    setSuccess(false);
                    setError(true);
                    setErrorMessage("Something went wrong, please try again.");
                }

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 400 && error.response.data?.error === "no file uploaded"){
                        setError(true);
                    } else if (error.response?.status === 500){
                        setError(true)
                        setErrorMessage("FILE TYPE DOES NOT MATCH DATA TYPE!")
                    } else if (error.response?.status === 401){
                        setError(true)
                        setErrorMessage("SESSION EXPIRED, PLEASE LOGOUT AND LOGIN AGAIN.")
                    }
                }
            } finally {
                setIsUploading(false)
            }
        }
    };

    return (
        <CustomThemeProvider>
                <Box sx={{
                    backgroundColor: "primary.light", 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    boxShadow: 3, 
                    width: '100%',
                    maxWidth: '30%' 
                }}>
                    <form onSubmit={handleFileUpload}>
                        <Box sx={{ marginBottom: '1rem' }}>
                            <input 
                                type='file' 
                                accept='.csv' 
                                onChange={handleFileChange} 
                                id="file-upload"
                                style={{ display: 'none'}}
                            />

                            <Box sx={{display: "flex", alignItems: "center"}}>
                            <label htmlFor="file-upload">
                                <Tooltip title="Browse CSV files...">
                                    <UploadFileIcon fontSize='large' sx={{cursor: "pointer", "&:hover": {color: "#3c5364"}}}/>
                                </Tooltip>
                            </label>
                            <Typography 
                                color="text" 
                                sx={{ 
                                    display: "inline-flex", 
                                    alignItems: "center", 
                                    padding: "6px 16px", 
                                    background: "#fff", 
                                    color: file ? "black" : "transparent",
                                    width: "100%",
                                    borderRadius: "4px",
                                    marginLeft: "4px"
                                }}>
                                {file ? file.name : "No file selected"}
                            </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ marginBottom: '1rem', display: "flex" }}>
                            <ListIcon fontSize='large'/>
                                    <select 
                                        onChange={handleTypeChange} 
                                        value={type} 
                                        style={{ 
                                            width: '100%', 
                                            padding: '0.5rem', 
                                            fontSize: '1rem', 
                                            backgroundColor: '#fff', 
                                            color: "black",
                                            marginLeft: "4px", 
                                            borderRadius: "4px",
                                            cursor: "pointer",
                                        }}>
                                        <option value="cryoegg" style={{cursor: "pointer"}}>Cryoegg</option>
                                        <option value="cryowurst" style={{cursor: "pointer"}}>Cryowurst</option>
                                    </select>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button 
                                type="submit" 
                                color='primary' 
                                variant='contained' 
                                disabled={isUploading}
                                sx={{ width: '100%', padding: '0.75rem' }}
                            >
                                {isUploading ? 'Uploading...' : 'Upload File'}
                            </Button>
                            {isUploading && <CircularProgress size={24} sx={{ marginLeft: '10px' }} />}
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: '1rem' }}>
                            {success && <Typography color="#fff">{successMessage}</Typography>}
                            {error && <Typography sx={{
                                fontWeight: "bold", 
                                color: "#fff",
                                textAlign: "center" 
                                }}>
                                    {errorMessage}</Typography>}
                        </Box>
                    </form>
                </Box>
        </CustomThemeProvider>
    );
};

export { UploadCsv };