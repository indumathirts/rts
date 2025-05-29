import React, { useState, useEffect } from 'react';
import { AnimatedButton } from './Login.styles';
import { useNavigate } from 'react-router-dom';

import {
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    Fade,
} from '@mui/material';
import {
    Visibility,
    VisibilityOff,
    Email,
    Lock,
} from '@mui/icons-material';
import {
    Wrapper,
    LoginBox,
    FormWrapper,
    QuoteWrapper,
} from './Login.styles';

const quotes = [
    "Every sensor tells a story. We're here to listen, analyze, and act.",
    "Smarter production starts with smarter monitoring — precision leads to perfection.",
    "Real-time insights. Real-world impact. Welcome to the future of IoT-driven operations.",
    "From data to decisions — we power your production with intelligence and trust.",
    "Innovation doesn’t pause — stay connected, stay in control, stay ahead.",
    "Empowering production with every data pulse. Welcome to smarter monitoring.",
    "Precision meets progress — your machines, your data, in real-time.",
    "Stay connected, stay ahead. IoT is not the future, it's now.",
    "From insights to action — your production, optimized.",
    "Reliable data. Smarter decisions. Better production every day.",
];



const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const handleTogglePassword = () => setShowPassword((prev) => !prev);
const navigate = useNavigate();

const handleLogin = () => {
    // You can add validation/auth logic here
    navigate('/dashboard');
};
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 3000); // change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Wrapper>
            <LoginBox elevation={4}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'black' }}>
                    Welcome to iRTS
                </Typography>


                <QuoteWrapper>
                    <Fade in timeout={1000} key={quoteIndex}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 500,
                                color: 'black',
                                textAlign: 'center',
                                transition: 'opacity 1s ease-in-out',
                            }}
                        >
                            {quotes[quoteIndex]}
                        </Typography>
                    </Fade>
                </QuoteWrapper>


                <FormWrapper>
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <AnimatedButton
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2, py: 1.3 }}
                        onClick={handleLogin}
                    >
                        Get Started
                    </AnimatedButton>


                </FormWrapper>
            </LoginBox>
        </Wrapper>
    );
};

export default Login;
