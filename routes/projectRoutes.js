
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Anasayfa (Proje listesi)
router.get('/', async (req, res) => {
  const projects = await Project.find({});
  res.render('index', { projects });
});

// Add Sayfası
router.get('/add', (req, res) => {
  res.render('add');
});

router.post('/add', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  await Project.create({ title, description, imageUrl });
  res.redirect('/');
});

// Edit Sayfası
router.get('/edit/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.render('edit', { project });
});

router.post('/edit/:id', async (req, res) => {
  const { title, description, imageUrl } = req.body;
  await Project.findByIdAndUpdate(req.params.id, { title, description, imageUrl });
  res.redirect('/');
});

// Proje Silme
router.post('/delete/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
