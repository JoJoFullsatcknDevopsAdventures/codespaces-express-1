const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./config/db');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const router = express.Router();


connectDB();


// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// // Register Route
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   // Save the user to the database
//   // ...
//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: '1d'
//   });
//   res.json({ token });
// });


// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   // Find the user in the database
//   // ...
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: '1d'
//   });
//   res.json({ token });
// });

// module.exports = router;