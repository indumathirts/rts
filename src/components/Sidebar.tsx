// Sidebar.js
import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import CategoryIcon from '@mui/icons-material/Category';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

interface SidebarProps {
  open: boolean;
  setSidebarOpen: (open: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ open, setSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={() => setSidebarOpen(false)}
      sx={{
        width: open ? 240 : 64,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 64,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          p: 1,
          height: 64,
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        {open && (
          <Typography
            variant="h6"
            noWrap
            sx={{ fontWeight: 'bold', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            IRTS
          </Typography>
        )}
        <IconButton
          onClick={() => setSidebarOpen(false)} sx={{ position: 'absolute', right: 8 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          // alignItems: open ? 'flex-start' : 'center',
          px: open ? 2 : 0,
        }}
      >
        <List>
          {/* <ListItem button>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem button>
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 0, justifyContent: 'center' }}>
              <CategoryIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Resources" />}
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Resources" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;