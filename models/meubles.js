
const mongoose = require('mongoose');

const meubleSchema = new mongoose.Schema({
  name: { type: String},
  type: { type: String},
  material: { type: String},
  material2:  { type: String},
  material3:  { type: String},
  picture: {
    type: String,
  },
});

const collectionName = "meubles";
module.exports = mongoose.model("Meuble", meubleSchema);
 
