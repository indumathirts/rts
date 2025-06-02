// src/components/UserTable.tsx
import { useEffect, useState } from 'react';
import {
  IconButton, Tooltip, Typography, Box,
  Paper, Table, TableHead, TableBody, TableRow, TableCell
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomModal from './CustomModal';
import AddUserForm from './AddUserForm';
import { fetchUsers, createUser, updateUser, deleteUser, fetchUserById } from '../api/users';
import type { User } from '../api/users';

const UserTable: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
      if (selectedUser) {
        await updateUser(selectedUser.id, formData);
      } else {
        await createUser(formData);
      }
      setModalOpen(false);
      setSelectedUser(null);
      getData();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleEdit = async (userId: number) => {
    try {
      const data = await fetchUserById(userId);
      setSelectedUser(data);
      setModalOpen(true);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const handleDelete = async (userId: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        getData();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
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
              onClick={() => {
                setSelectedUser(null);
                setModalOpen(true);
              }}
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
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Address Line 1</TableCell>
              <TableCell>Address Line 2</TableCell>
              <TableCell>Sector</TableCell>
              <TableCell>Pincode</TableCell>
              <TableCell>City</TableCell>
              <TableCell>District</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,index) => (
              <TableRow key={user.id}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{'*'.repeat(8)}</TableCell>
                <TableCell>{user.mobile}</TableCell>
                <TableCell>{user.addressLine1}</TableCell>
                <TableCell>{user.addressLine2}</TableCell>
                <TableCell>{user.sector}</TableCell>
                <TableCell>{user.pincode}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.district}</TableCell>
                <TableCell>{user.state}</TableCell>
                <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user.id)}><EditIcon /></IconButton>
                  <IconButton onClick={() => handleDelete(user.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <CustomModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedUser(null);
        }}
        title={selectedUser ? 'Edit User' : 'Add New User'}
      >
        <AddUserForm onSubmit={handleFormSubmit} initialValues={selectedUser} />
      </CustomModal>
    </>
  );
};

export default UserTable;
