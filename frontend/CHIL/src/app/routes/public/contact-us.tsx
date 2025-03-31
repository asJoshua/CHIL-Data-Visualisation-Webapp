import { useState } from 'react';
import { Box, Typography, Divider, TextField, Button, styled } from '@mui/material';
import Grid from '@mui/material/Grid2'; 
import { VariableLayout } from "@/components/layouts/variable-layout";



const ContactUsRootContainer = styled(Box)(({ theme }) => ({ // Renamed
  width: '100%',
  height: '100%',
  padding: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

const ContactCard = styled(Grid)(({ theme }) => ({
    flex: 1,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    alignItems: "center",
    gap: theme.spacing(5),
  }));

const LeftSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  gap: theme.spacing(2),
  paddingRight: theme.spacing(5),
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(5),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'rgba(71, 85, 105, 0.1)',
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(2),
  },
  '& .MuiInputLabel-root': {
    color: `rgba(0, 0, 0, 0.5)`,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const InquiryTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: 'rgba(71, 85, 105, 0.1)',
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    padding: theme.spacing(2),
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.fontFamily,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 6),
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  fontFamily: theme.typography.fontFamily,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function ContactUsRoot() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email); 
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      console.log("Form submitted:", { name, email });
      alert("Form submitted successfully!");
    }
  };

  return (
    <VariableLayout>
    <ContactUsRootContainer>
      <ContactCard container> 
        <Grid size={{ md: 4 }}>
          <LeftSection>
            <Typography variant="h2" align="right" fontWeight="bold" fontFamily="Inter" color="Black">
              CONTACT US
            </Typography>
            <Typography variant="h6" align="right" fontFamily="Inter" color="Black">
            Have questions or need assistance? Our team is here to help! Reach out to us, and we'll get back to you as soon as possible.            </Typography>
          </LeftSection>
        </Grid>
        <Grid sx={{ height: '100%' }}>
          <Divider orientation="vertical" variant="middle" flexItem />
        </Grid>
        <Grid size={{ md: 7 }}>
          <RightSection>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <StyledTextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  placeholder= 'John Doe'
                  sx={{ mt: 2 }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={!!nameError}
                  helperText={nameError}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  placeholder= '@email.com'
                  sx={{ mt: 2 }}
                  value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!emailError}
                      helperText={emailError}
                />
              </Grid>
            </Grid>
            <InquiryTextField
              fullWidth
              label="Inquiry"
              variant="outlined"
              multiline
              rows={8}
              placeholder='Your inquiry here...'
              sx={{ mt: 2 }}
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <SubmitButton type='submit' variant="contained">SUBMIT</SubmitButton>
            </Box>
            </form>
          </RightSection>
        </Grid>
      </ContactCard>
    </ContactUsRootContainer>
    </VariableLayout>
  );
}

export { ContactUsRoot };