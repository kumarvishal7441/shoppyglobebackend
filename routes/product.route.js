import { CreateProduct, Deleteproduct, Fetchproduct, Fetchproductone, Updateproduct } from "../controllers/product.controller.js";
import { verifyToken } from "../midddleware/verify.js";




export function productRoute(app){
    // create product
    app.post('/api/cart',verifyToken,CreateProduct)
    app.put('/api/cart/:id',verifyToken,Updateproduct)
    app.delete('/api/cart/:id',verifyToken,Deleteproduct)
    app.get('/api/products',verifyToken,Fetchproduct)
    app.get('/api/products/:id',verifyToken,Fetchproductone)
}