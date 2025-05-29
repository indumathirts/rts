import { Box, Paper, Button, styled } from '@mui/material';
import { keyframes } from '@emotion/react'; // ✅ Add this line


export const Wrapper = styled(Box)(() => ({
  minHeight: '100vh',
  background: 'linear-gradient(to top, #e0f7fa, #ffffff)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const LoginBox = styled(Paper)(() => ({
  width: 380,
  padding: 32,
  borderRadius: 16,
  textAlign: 'center',
}));

export const FormWrapper = styled(Box)(() => ({
  marginTop: 16,
}));

export const QuoteWrapper = styled(Box)(() => ({
  height: 50,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '0 12px',
}));

// Animate from dark blue to light blue
const bluePulse = keyframes`
  0%, 100% {
    background-color: #1565c0;  /* dark blue */
    color: white;
  }
  50% {
    background-color: #90caf9;  /* light blue */
    color: black;
  }
`;

export const AnimatedButton = styled(Button)(() => ({
  animation: `${bluePulse} 3s ease-in-out infinite`,
  fontWeight: 700,
  letterSpacing: '0.6px',
  borderRadius: 6,
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
}));