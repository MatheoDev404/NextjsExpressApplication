const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// variables d'environement module dotenv
const dotenv = require("dotenv");
dotenv.config();

// connexion a MongoDB via le module mongoose
mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}${DB_MONGODB}`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));