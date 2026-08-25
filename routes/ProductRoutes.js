const express=require("express");
const router=express.Router();
const {getProduct,createProduct,updateProduct,deleteProduct, getProductById}=require("../controllers/ProductControllers");

router.get("/",getProduct);
router.post("/",createProduct);
router.get("/:id",getProductById);
router.put("/",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;