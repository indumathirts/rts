const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ✅ Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true }
    });
    res.json(users);
  } catch (err) {
    console.error('🔥 Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
exports.createUser = async (req, res) => {
  try {
    const {
      name, email, password, mobile,
      addressLine1, addressLine2, sector,
      pincode, city, district, state
    } = req.body;

    // Basic validation (you can add more as needed)
    if (!name || !email || !mobile || !addressLine1 || !city) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        mobile,
        addressLine1,
        addressLine2,
        sector,
        pincode,
        city,
        district,
        state
      }
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error('❌ Create user error:', err);
    res.status(500).json({ error: err?.meta?.cause || err.message || 'Failed to create user' });
  }
};
// ✅ Get user by ID
// exports.getUserById = async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(req.params.id) },
//       select: { id: true, name: true, email: true, createdAt: true }
//     });
//     if (!user) return res.status(404).json({ error: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch user' });
//   }
// };

// // ✅ Create user
// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const newUser = await prisma.user.create({
//       data: { name, email, password }
//     });
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// };

// // ✅ Update user
// exports.updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   try {
//     const updated = await prisma.user.update({
//       where: { id: parseInt(id) },
//       data: { name, email }
//     });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update user' });
//   }
// };

// // ✅ Delete user
// exports.deleteUser = async (req, res) => {
//   try {
//     await prisma.user.delete({ where: { id: parseInt(req.params.id) } });
//     res.json({ message: 'User deleted' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete user' });
//   }
// };
