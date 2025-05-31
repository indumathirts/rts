// src/components/AddUserForm.tsx
import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Paper,
  IconButton,
  Grid,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface AddUserFormProps {
  onSubmit: (formData: Record<string, any>) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [avatar, setAvatar] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ...formValues, avatar });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: '#f9fafe' }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Avatar
              alt="User Avatar"
              src={avatar}
              sx={{ width: 72, height: 72, margin: 'auto', mb: 1 }}
            />
            <IconButton
              component="label"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                bgcolor: 'white',
                boxShadow: 1,
                p: 0.5,
              }}
            >
              <PhotoCamera fontSize="small" />
              <input hidden accept="image/*" type="file" onChange={handleAvatarChange} />
            </IconButton>
          </Box>
          <Typography variant="h5" fontWeight="bold">
            User Profile
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}><TextField label="Name" name="name" onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12}><TextField label="Mobile" name="mobile" onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12}><TextField label="Email" name="email" type="email" onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Address Line 1" name="addressLine1" onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Address Line 2" name="addressLine2" onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Society/Area/Sector" name="sector" onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Pincode" name="pincode" onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={4}><TextField label="City" name="city" onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12} sm={4}><TextField label="District" name="district" onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={4}><TextField label="State" name="state" onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained" size="large">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AddUserForm;