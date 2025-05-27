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
    onSubmit: (formData: { avatar?: string }) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onSubmit }) => {
    const [avatar, setAvatar] = useState<string | undefined>();

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ avatar });
    };

    return (
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: '#f9fafe' }}>
            <Box component="form" onSubmit={handleSubmit}>
                {/* Header Section */}
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

                {/* Form Fields */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Name" name="name" fullWidth required variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Mobile" name="mobile" fullWidth required variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" name="email" type="email" fullWidth required variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Address Line 1" name="address1" fullWidth required variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Address Line 2" name="address2" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Society/Area/Sector" name="area" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Pincode" name="pincode" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="City" name="city" fullWidth required variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="District" name="district" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField label="State" name="state" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'right' }}>
                        <Button type="submit" variant="contained" size="large">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default AddUserForm;
