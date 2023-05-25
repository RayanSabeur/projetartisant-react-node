const router = require('express').Router();
const productController = require('../controller/productController')
/*
// Route avec paramètre nommé ":name"
appRouter.get("/add/:name", async (req, res) => {
  const { name } = req.params
}
*/



 router.post("/add", productController.createProduct)
 router.get("/all", productController.getAllProduct)
 router.get("/:id", productController.productInfo)


//async (req, res) => {

//   // try {
//   //   await Author.create({
//   //     name: author_name,
//   //   })
//   //   res.status(201).send("Document inséré")
//   // } catch (err) {
//   //   console.log(err)
//   //   res.status(500).send("Impossible d'insérer le document")
//   // }
// })


module.exports = router
