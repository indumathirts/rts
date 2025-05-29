import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Avatar,
    InputBase,
    IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}
const Topbar: React.FC<TopbarProps> = ({ setSidebarOpen }) => {

// const Topbar = ({ setSidebarOpen }) => {
    return (
        <AppBar
            position="static"
            color="inherit"
            elevation={1}
            sx={{ mb: 2, background: '#f9fafb', height: 64, justifyContent: 'center' }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
                {/* Sidebar toggle icon for small screens */}
                <IconButton
                    edge="start"
                    onClick={() => setSidebarOpen(true)}
                    sx={{ display: { xs: 'inline-flex', sm: 'none' }, mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>


                {/* Search Bar */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#f1f3f4',
                        px: 1.5,
                        py: 0.3,
                        borderRadius: 2,
                        width: 180,
                        height: 32,
                    }}
                >
                    <SearchIcon sx={{ mr: 1, color: '#555', fontSize: 18 }} />
                    <InputBase
                        placeholder="Search..."
                        sx={{ fontSize: '0.85rem', width: '100%' }}
                    />
                </Box>

                {/* User Profile */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                        John Smith
                    </Typography>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#ccc', fontSize: '0.9rem' }}>
                        J
                    </Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
