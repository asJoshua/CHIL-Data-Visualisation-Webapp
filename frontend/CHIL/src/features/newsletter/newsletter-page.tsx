import { FormEvent, useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { Container, Typography } from '@mui/material';
import CustomThemeProvider from "@/theme/ThemeProvider";
import axios from 'axios';
import { theme } from "@/theme/theme"

export type NewsletterProps = {
    apiURL: string,
    imageSrc?: string
}

const Newsletter = ({ apiURL, imageSrc }: NewsletterProps) => {
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
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError(true);
            setEmailErrorMessage("Please enter a valid email address");
            return;
        } else {
            setError(false);
            setEmailErrorMessage("");

            try {
                const response = await axios.post(apiURL, {
                    email: email,
                },
                    {
                        headers: {
                            Authorization: ''
                        }
                    });

                if (response.status === 200) {
                    setShowSuccess(true);
                    setShowSuccessMessage("Thank you for subscribing! You will be notified of any major changes.");
                } else {
                    setShowSuccess(false);
                    setError(true);
                    setEmailErrorMessage("Something went wrong, please try again.");
                }

            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status === 400 && error.response.data?.error === "This email is already subscribed") {
                        setShowSuccess(false);
                        setError(true);
                        setEmailErrorMessage("This email is already subscribed")
                    } else if (error.response?.status === 500 && error.response.data?.error === "There was an error sending the request") {
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
            <Container sx={{ 
                width: "70%", 
                display: "flex", 
                flexDirection: "column", 
                padding: 2, 
                borderRadius: "12px", 
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
                backgroundColor: "white",
                animation: "fadeIn 0.5s ease-in-out"

            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1000px", alignItems: "stretch" }}>
                    <Box sx={{
                        width: { xs: "100%", sm: "50%" },
                        height: "100%",
                        justifyContent: "center",
                        marginLeft: 2
                    }}>
                        <Typography variant="h2">
                            OUR NEWSLETTER
                        </Typography>
                        <Typography variant='h4' color='primary'>
                            Stay updated with our latest news!
                        </Typography>
                        <Typography variant='body1' sx={{color: '#000', paddingTop: '3vh', textAlign: 'justify', marginRight: '10rem'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi.
                        </Typography>
                    </Box>

                    <Box sx={{
                        width: { xs: "100%", sm: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}>
                        <img
                            src={imageSrc}
                            alt='Newsletter Image'
                            style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "500px",
                                maxHeight: "300px",
                                borderRadius: '8px',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>
                </Box>

                <form className='flex flex-col gap-y-4 flex-wrap'>
                    <Container>
                        <Typography variant="h3" color='primary' sx={{fontWeight: 'bold'}} >
                            Sign up below!
                        </Typography>
                    </Container>
                    <Container>
                        <TextField
                            sx={{
                                "& .MuiInputBase-input": {
                                    color: "secondary.main",
                                },
                                marginBottom: 2,
                            }}
                            variant='outlined'
                            type='email'
                            label='Enter your email...'
                            error={showError}
                            helperText={showError ? emailErrorMessage : showSuccess ? successMessage : ""}
                            onChange={handleEmailInput}
                        />
                        <Button
                            sx={{
                                marginLeft: 2,
                                height: "56px",
                                textTransform: 'uppercase',
                                borderRadius: '8px',
                                fontWeight: 600,
                                letterSpacing: '1px',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            }}
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
