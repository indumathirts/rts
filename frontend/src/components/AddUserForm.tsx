// src/components/AddUserForm.tsx
import { useEffect, useState } from 'react';
import {
  Box, TextField, Button, Typography, Avatar,
  Paper, IconButton, Grid
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

interface AddUserFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  initialValues?: Record<string, any> | null;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onSubmit, initialValues }) => {
  const [formValues, setFormValues] = useState<Record<string, any>>(initialValues || {});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [avatar, setAvatar] = useState<string | undefined>(initialValues?.avatar);

  useEffect(() => {
    if (initialValues) {
      setFormValues(initialValues);
      setConfirmPassword(initialValues.password || '');
      setAvatar(initialValues.avatar || '');
    }
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
      setFormValues({ ...formValues, avatar: url });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
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
            {initialValues ? 'Edit User' : 'New User'}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}><TextField label="Name" name="name" value={formValues.name || ''} onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12}><TextField label="Mobile" name="mobile" value={formValues.mobile || ''} onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12}><TextField label="Email" name="email" type="email" value={formValues.email || ''} onChange={handleChange} fullWidth required /></Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formValues.password || ''}
              onChange={handleChange}
              fullWidth
              required
              error={!!passwordError}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              required
              error={!!passwordError}
              helperText={passwordError}
            />
          </Grid>

          <Grid item xs={12} sm={6}><TextField label="Address Line 1" name="addressLine1" value={formValues.addressLine1 || ''} onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Address Line 2" name="addressLine2" value={formValues.addressLine2 || ''} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Society/Area/Sector" name="sector" value={formValues.sector || ''} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={6}><TextField label="Pincode" name="pincode" value={formValues.pincode || ''} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={4}><TextField label="City" name="city" value={formValues.city || ''} onChange={handleChange} fullWidth required /></Grid>
          <Grid item xs={12} sm={4}><TextField label="District" name="district" value={formValues.district || ''} onChange={handleChange} fullWidth /></Grid>
          <Grid item xs={12} sm={4}><TextField label="State" name="state" value={formValues.state || ''} onChange={handleChange} fullWidth /></Grid>

          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained" size="large">
              {initialValues ? 'Update' : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default AddUserForm;
