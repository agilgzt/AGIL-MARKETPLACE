const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIO = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middleware untuk attach user dari JWT
app.use(require('./src/middleware/auth'));

// Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/users', require('./src/routes/users'));
app.use('/api/products', require('./src/routes/products'));
app.use('/api/orders', require('./src/routes/orders'));
app.use('/api/cart', require('./src/routes/cart'));
app.use('/api/wishlist', require('./src/routes/wishlist'));
app.use('/api/admin', require('./src/routes/admin'));
app.use('/api/seller', require('./src/routes/seller'));
app.use('/api/reviews', require('./src/routes/reviews'));
app.use('/api/chat', require('./src/routes/chat'));

// View Routes
app.use('/', require('./src/routes/web'));

// Socket.io untuk Live Chat
require('./src/socket/chatSocket')(io);

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Halaman Tidak Ditemukan' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 AGIL MARKETPLACE running on http://localhost:${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV}`);
});

module.exports = { app, io };
