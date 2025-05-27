import { useState } from 'react';
import { Box, useTheme } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Box
        sx={{
          flexGrow: 1,
          // ml: sidebarOpen ? '240px' : '64px', // match actual Drawer width
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          width: 'calc(100% - 240px)',
        }}
      >
        <Topbar setSidebarOpen={setSidebarOpen} />
        <Box >
          <UserTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
