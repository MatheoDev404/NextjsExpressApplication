const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// variables d'environement module dotenv
const dotenv = require("dotenv");
dotenv.config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_LOGIN = process.env.DB_LOGIN;
const DB_MONGODB = process.env.DB_MONGODB;

// Routes
const userRoutes = require('./routes/user');

const app = express();

// connexion a MongoDB via le module mongoose
mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}${DB_MONGODB}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use('/api/auth', userRoutes);

module.exports = app;