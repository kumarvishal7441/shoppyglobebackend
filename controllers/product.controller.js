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
// fetching product for single item
export async function Fetchproductone(req, res) {
    try {
        const Onecart = await productmodal.findById(req.params.id)
        console.log(Onecart)
        if (!Onecart) {
            return res.status(404).json("product is not available")
        } else {
            return res.status(200).json({
                product: {
                    title: Onecart.title,
                    category: Onecart.category,
                    price: Onecart.price,
                    discount: Onecart.discount,
                    rating: Onecart.rating,
                    description: Onecart.description,
                    brand: Onecart.brand,
                }

            })
        }

    } catch (error) {
        return res.status(500).json({ "err": error })
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