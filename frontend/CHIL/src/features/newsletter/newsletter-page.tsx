import { FormEvent, useState } from 'react';
import { Box } from '@/components/ui/box/box';
import { TextField } from '@/components/ui/text-field/text-field';
import { Button } from '@/components/ui/button/button';
import { Container, Typography } from '@mui/material';
import imageSrc from "@/assets/images/BgICe.jpg";
import axios from 'axios';

const Newsletter = () => {
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
        } else {
            setError(false);
            setEmailErrorMessage("");
    
            try {
                const response = await axios.post('http://localhost:8000/chil/newsletter/signup/', {
                    email: email, 
                }, {
                    headers: {
                        // Fix to the authorization, wouldn't let me send requests, ensures no token attached
                        Authorization: ''
                    }
                });

                if (response.status == 200) {
                    setShowSuccess(true);
                    setShowSuccessMessage("Thank you for subscribing! You will be notified of any major changes.");
                } else {
                    setShowSuccess(false);
                    setError(true);
                    setEmailErrorMessage("Something went wrong, please try again.");
                }
            } catch (error) {
                console.error("Error occurred:", error);
                setShowSuccess(false);
                setError(true);
                setEmailErrorMessage("There was an error sending the request.");
            }
    
            setEmail("");
        }
    };

    return (
        <Box sx={{width: "100vw", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "800px", mb: 4 }}>
                <Box sx={{ 
                    width: "50vw", 
                    height: "50vh", 
                    textAlign: "center",
                    marginRight: 2
                    }}>
                    <Typography variant="h3" color='secondary.main' sx={{display: "flex", fontWeight: "bold",}}>
                        Our Newsletter    
                    </Typography>
                    <Typography color='primary.light' sx={{display: "flex"}}>
                        Subheading    
                    </Typography>
                    <Typography color='secondary.main' sx={{display: "flex", textAlign: "left", paddingTop: "6px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi. At, eos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis error, facere nam, illo voluptates quidem porro dolor modi nobis voluptatem perspiciatis dolores totam pariatur corporis hic sequi. At, eos.
                    </Typography>
                </Box>
                <img src={imageSrc}
                    style={{ 
                    width: "50vw", 
                    height: "50vh", 
                    textAlign: "center", 
                    marginLeft: 2,
                    }}>
                </img>
            </Box>

            <form className='flex flex-col gap-y-4 flex-wrap'>
                <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <Typography variant="h4" sx={{color: "secondary.main" }}>Sign up for updates</Typography>
                </Container>
                <Container>
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
                    <Button sx={{
                        marginLeft: 2,
                        height: "56px"
                        }}
                        variant='contained'
                        onClick={handleSubmit}
                        >
                        Subscribe
                    </Button>
                </Container>
            </form>
        </Box>
    );
};

export { Newsletter };
