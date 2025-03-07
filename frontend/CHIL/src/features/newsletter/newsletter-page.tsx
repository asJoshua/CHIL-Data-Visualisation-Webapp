import { FormEvent, useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { Container, Typography } from '@mui/material';
import CustomThemeProvider from "@/theme/ThemeProvider";
import axios from 'axios';

export type NewsletterProps = {
    apiURL: string,
    imageSrc?: string
}

const Newsletter = ( {apiURL, imageSrc}: NewsletterProps) => {
    const [email, setEmail] = useState('');
    const [showError, setError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setShowSuccessMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
            setError(true);
            setEmailErrorMessage("Please enter a valid email address");
            return;
        } 
        
        else {
            setError(false);
            setEmailErrorMessage("");
    
            try {
                const response = await axios.post(apiURL, {
                    email: email, 
                }, 
                {
                    headers: {
                        // Fix to the authorization, wouldn't let me send requests, ensures no token attached
                        Authorization: ''
                    }
                });

                if (response.status == 200) {
                    setShowSuccess(true);
                    setShowSuccessMessage("Thank you for subscribing! You will be notified of any major changes.");
                }else {
                    setShowSuccess(false);
                    setError(true);
                    setEmailErrorMessage("Something went wrong, please try again.");
                }

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 400 && error.response.data?.error === "This email is already subscribed"){
                        setShowSuccess(false);
                        setError(true);
                        setEmailErrorMessage("This email is already subscribed")
                    } else if(error.response?.status === 500 && error.response.data?.error === "There was an error sending the request") {
                        setShowSuccess(false);
                        setError(true);
                        setEmailErrorMessage("There was an error sending the request");
                    }
                }
            }
    
            setEmail("");
        }
    };

    return (
        <CustomThemeProvider>
            <Container sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1000px", mb: 4, alignItems: "stretch"}}>
                    <Box sx={{ 
                        width: { xs: "100%", sm: "50%" }, 
                        height: "100%", 
                        textAlign: "center", 
                        marginRight: 2, 
                        justifyContent: "center",
                        flexGrow: 1,
                    }}>
                        <Typography variant="h3" color='secondary.main' sx={{display: "flex", fontWeight: "bold",}}>
                            Our Newsletter    
                        </Typography>
                        <Typography color='primary.light' sx={{display: "flex"}}>
                            Subheading    
                        </Typography>
                        <Typography color='secondary.main' sx={{display: "flex", textAlign: "left", paddingTop: "1vh"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi. At, eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi. At, eos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi. At, eos.
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        width: { xs: "100%", sm: "50%" }, 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center",
                        flexGrow: 1 // Makes image container equal height
                    }}>
                        <img 
                            src={imageSrc}
                            alt='Newsletter Image'
                            style={{ width: "100%", height: "100%", maxWidth: "500px",maxHeight: "300px",textAlign: "center", marginLeft: 2,}}>
                        </img>
                    </Box>
                </Box>

                <form className='flex flex-col gap-y-4 flex-wrap'>
                    <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                        <Typography variant="h4" sx={{color: "secondary.main" }}>Sign up for updates</Typography>
                    </Container>
                    <Container >
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    color : "secondary.main",
                                },
                            }}
                            variant='outlined'
                            type='email'
                            label='Enter your email...'
                            error={showError}
                            helperText={showError ? emailErrorMessage : showSuccess ? successMessage : ""}
                            onChange={handleEmailInput}
                            />
                        <Button 
                            sx={{marginLeft: 2, height: "56px",}}
                            variant='contained'
                            onClick={handleSubmit}
                            >
                            Subscribe
                        </Button>
                    </Container>
                </form>
            </Container>
        </CustomThemeProvider>
    );
};

export { Newsletter };
