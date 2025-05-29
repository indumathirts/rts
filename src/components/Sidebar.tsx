// Sidebar.js
import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';

interface SidebarProps {
  open: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerWidth = 240;
  const collapsedWidth = 64;

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={() => setSidebarOpen(false)}
      ModalProps={{
        keepMounted: true, // Better mobile performance
      }}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        },
      }}
    >
      {/* Header */}
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
            sx={{
              fontWeight: 'bold',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            IRTS
          </Typography>
        )}
        <IconButton
          onClick={() => setSidebarOpen(!open)}
          sx={{ position: 'absolute', right: 8 }}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Menu List */}
      <Box sx={{ flexGrow: 1, pt: 2 }}>
        <List>
          {/* Dashboard */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 0,
                  justifyContent: 'center',
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          {/* Resources */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 0,
                  justifyContent: 'center',
                }}
              >
                <CategoryIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Resources" />}
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
