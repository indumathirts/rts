// components/UserTable.js
import { useState } from 'react';
import {
  IconButton, Tooltip, Typography, Box,
  Paper, Table, TableHead, TableBody, TableRow, TableCell, Chip
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CustomModal from './CustomModal';
import AddUserForm from './AddUserForm';

const users = [
  {
    name: 'Wade Warren',
    company: 'Big Kahuna Ltd.',
    title: 'Designer',
    role: 'Editor',
    status: 'Active',
    date: '16/08/2013',
  },
  {
    name: 'Annette Black',
    company: 'Abstergo Ltd.',
    title: 'Developer',
    role: 'Admin',
    status: 'Deactivated',
    date: '12/06/2020',
  },
];

const UserTable: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
const handleFormSubmit = () => {
  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // const userData = {
    //   name: data.get('name'),
    //   company: data.get('company'),
    //   title: data.get('title'),
    //   role: data.get('role'),
    // };
    // console.log('New User:', userData);
    setModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: 1,
          mb: 2,
        }}
      >
        <Typography variant="h6" noWrap>Resources</Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flexWrap: 'nowrap',
            overflowX: 'auto',
          }}
        >
          <Tooltip title="Export">
            <IconButton color="primary">
              <FileUploadIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Add User">
            <IconButton
              color="primary"
              onClick={() => setModalOpen(true)}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              <PersonAddIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Paper sx={{ p: 2, overflowX: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job title</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.company}</TableCell>
                <TableCell>{user.title}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Chip
                    label={user.status}
                    size="small"
                    color={user.status === 'Active' ? 'success' : 'error'}
                  />
                </TableCell>
                <TableCell>{user.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)} title="Add New User">
            {/* <form onSubmit={handleFormSubmit}> */}

        <AddUserForm onSubmit={handleFormSubmit} />
                  {/* </form> */}

      </CustomModal>

    </>
  );
};

export default UserTable;
