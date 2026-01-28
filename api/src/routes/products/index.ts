import { Router } from "express"
import { getProductById,addProduct,removeProduct,replaceProduct,productList,updateProduct } from "./controller/productControllers.ts"
const router = Router()




router.get("/product/:id",getProductById)
router.delete("/product/:id",removeProduct)
router.put("/product/:id",replaceProduct)
router.patch("/product/:id",updateProduct)
router.get("/product",productList)
router.post("/product",addProduct)



export default router;