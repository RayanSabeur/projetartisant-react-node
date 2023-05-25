const productModel = require('../models/meubles');
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.createProduct = async (req, res) => {
  console.log(req)
  let fileName;
  fileName = req.body.name + Date.now() + ".jpg";
    const newProduct = new productModel({
        name : req.body.name,
        type: req.body.type,
        material : req.body.material,
        material2 : req.body.material2,
        material3 : req.body.material3,
        picture: req.file !== null ? "./uploads/meubles/" + fileName : "",
    })

    try {
      const meuble = await newProduct.save();
      return res.status(201).json(meuble);
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  module.exports.getAllProduct = async (req, res) => {
    const product = await productModel.find();
    res.status(200).json(product);
  };

  module.exports.productInfo = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
    const {id} = req.params;
   const findProduct = await productModel.findById(id) 
     return res.status(200).json(findProduct)
  };
  