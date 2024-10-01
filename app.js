
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

// Veritabanına bağlantı
mongoose.connect('mongodb://localhost:27017/pcat-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// EJS ayarları
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotalar
app.use('/', projectRoutes);

// Sunucuyu başlat
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
