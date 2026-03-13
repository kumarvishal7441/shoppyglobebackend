import { CreateProduct, Deleteproduct, Fetchproduct, Fetchproductone, Updateproduct } from "../controllers/product.controller.js";
import { verifyToken } from "../midddleware/verify.js";




export function productRoute(app) {
    // create product route for api
    app.post('/cart', verifyToken, CreateProduct)
    app.put('/cart/:id', verifyToken, Updateproduct)
    app.delete('/cart/:id', verifyToken, Deleteproduct)
    app.get('/products', verifyToken, Fetchproduct)
    app.get('/products/:id', verifyToken, Fetchproductone)
}