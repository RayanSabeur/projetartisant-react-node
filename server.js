const product = require('./routers/products')
const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
dotenv.config()
const cors = require('cors');
const { APP_HOST, APP_PORT, MONGO_URI, NODE_ENV } = process.env

const app = express()
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Minifier automatiquement les templates PUG en production, mais pas en dev
app.locals.pretty = NODE_ENV !== "production" ? true : false

// Déclaration des routeurs et middlewares
app.use(express.urlencoded({ extended: false })) // Fourni l'objet "req.body" lors de la validation de formulaire
app.use("/api/product", product)

try {
 mongoose.connect(MONGO_URI)
  console.log("Connexion MonboDB établie!")

  app.listen(APP_PORT, () =>
    console.log(`L'application écoute sur http://${APP_HOST}:${APP_PORT}`)
  )
} catch (err) {
  console.log("Impossible de démarrer l'application Node", err.message)
}
