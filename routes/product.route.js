import { CreateProduct, Deleteproduct, Fetchproduct, Updateproduct } from "../controllers/product.controller.js";




export function productRoute(app){
    // create product
    app.post('/api/product',CreateProduct)
    app.get('/api/product',Fetchproduct)
    app.put('/api/product/:id',Updateproduct)
    app.delete('/api/product/:id',Deleteproduct)
}