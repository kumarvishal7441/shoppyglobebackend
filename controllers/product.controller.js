import productmodal from "../modal/product.modal.js"

// creating product
export async function CreateProduct(req, res) {
    try {
        const { title, price, brand, description, discount, rating } = req.body
        const newproduct = await productmodal.create({ title, price, brand, description, discount, rating });
        return res.status(201).json({ "newproduct.": newproduct });
    } catch (error) {
        return res.status(500).json({ "data is not created": error })
    }
}
// read the product
export async function Fetchproduct(req, res) {
    try {
        const data = await productmodal.find({}) //mongo promise
        if (!data) {
            return res.status(400).json({ "message": "product not found" })
        } else {
            return res.status(201).json(data)
        }
    }
    catch (error) {
        return res.status(500).json({ "unable to fetch data": error })
    }
}

// update the product category
export async function Updateproduct(req, res) {
    try {
        await productmodal.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json("product update")
    }
    catch (error) {
        return res.status(500).json({ "unable to update the product": error })
    }
}
// delete the product
export async function Deleteproduct(req, res) {
    try {
        await productmodal.findByIdAndDelete(req.params.id, req.body)
        return res.status(200).json("product delete")
    }
    catch (error) {
        return res.status(500).json({ "unable to fetch data": error })
    }
}