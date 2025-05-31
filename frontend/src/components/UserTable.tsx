import { useEffect, useState } from 'react';
import {
  IconButton, Tooltip, Typography, Box,
  Paper, Table, TableHead, TableBody, TableRow, TableCell
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CustomModal from './CustomModal';
import AddUserForm from './AddUserForm';
import { fetchUsers, createUser } from '../api/users';
import type { User } from '../api/users';

const UserTable: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = async (formData: Record<string, any>) => {
    try {
      await createUser(formData);
      setModalOpen(false);
      getData();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Resources</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Export">
            <IconButton color="primary">
              <FileUploadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add User">
            <IconButton
              color="primary"
              onClick={() => setModalOpen(true)}
              sx={{ bgcolor: 'primary.main', color: 'white' }}
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <CustomModal open={modalOpen} onClose={() => setModalOpen(false)} title="Add New User">
        <AddUserForm onSubmit={handleFormSubmit} />
      </CustomModal>
    </>
  );
};

export default UserTable;
