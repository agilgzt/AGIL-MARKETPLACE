# 🎮 AGIL MARKETPLACE

Platform e-commerce profesional untuk jual beli akun game dengan fitur lengkap dan modern.

## ✨ Fitur Utama

### 1. Sistem Autentikasi
- ✅ Login & Register
- ✅ JWT Token Authentication
- ✅ Session Management
- ✅ Lupa Password
- ✅ Email Verification

### 2. Role & Permission
- 👤 Admin - Kelola semua data
- 🏪 Seller - Jual akun game
- 👥 Buyer - Beli akun game

### 3. Game yang Didukung
- Free Fire
- Mobile Legends
- PUBG Mobile
- Roblox
- eFootball
- Clash of Clans
- Valorant
- Genshin Impact

### 4. Fitur Marketplace
- 🛍️ Katalog Produk
- 🔍 Search & Filter
- ❤️ Wishlist
- 🛒 Shopping Cart
- 💳 Checkout
- 📊 Dashboard Lengkap
- 💬 Live Chat
- ⭐ Rating & Review

## 🚀 Teknologi Stack

**Frontend:**
- HTML5
- CSS3 (SCSS)
- JavaScript Modern (ES6+)
- Chart.js
- Responsive Design

**Backend:**
- Node.js
- Express.js
- JWT Authentication
- Multer (File Upload)

**Database:**
- PostgreSQL
- MongoDB (Optional)

**Real-time:**
- Socket.io

## 📦 Instalasi

### Prerequisite
- Node.js v14+
- npm atau yarn
- PostgreSQL atau MongoDB

### Setup

```bash
# Clone repository
git clone https://github.com/agilgzt/agil-marketplace.git
cd agil-marketplace

# Install dependencies
npm install

# Copy environment
cp .env.example .env

# Setup database
node scripts/init-db.js

# Jalankan server
npm run dev
```

Akses di: `http://localhost:3000`

## 📁 Struktur Folder

```
agil-marketplace/
├── public/              # Static files
│   ├── css/
│   ├── js/
│   ├── img/
│   └── uploads/
├── src/
│   ├── config/          # Konfigurasi
│   ├── controllers/      # Business logic
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/       # Custom middleware
│   ├── utils/           # Helper functions
│   ├── views/           # EJS templates
│   └── socket/          # Socket.io events
├── scripts/             # Utility scripts
├── tests/               # Unit tests
├── .env.example
├── package.json
├── server.js
└── README.md
```

## 🔑 Default Credentials

**Admin:**
- Email: `admin@agilmarketplace.com`
- Password: `admin123`

## 📊 API Endpoints

See `API_DOCUMENTATION.md` untuk dokumentasi lengkap.

## 🎨 Fitur Desain

- **Warna Dominan:** Biru Gelap + Emas
- **Mode:** Light & Dark
- **Responsive:** Mobile, Tablet, Desktop
- **Animasi:** Modern & Smooth

## 🔐 Keamanan

- ✅ Password Hashing (bcrypt)
- ✅ JWT Token
- ✅ SQL Injection Prevention
- ✅ XSS Protection
- ✅ CORS Configuration
- ✅ Rate Limiting

## 📝 License

MIT License - © 2024 AGIL MARKETPLACE

## 👤 Author

AGIL - Coding & Web Development
