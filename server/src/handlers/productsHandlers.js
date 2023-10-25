const { productId, allProducts, postProductContoller} = require("../controllers/productsControllers");

//!HANDLER QUE MANEJA LA PETICION GET POR ID DE /USERS/:ID
const getProductById  = async ( req, res ) => {

   const { id } = req.params
   
   try {
        const result = await productId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

//!HANDLER QUE MANEJA LA PETICION GET DE /PRODUCTS, TRAE NAME POR PARAMS PARA POSIBLES BUSQUEDAS
const getAllProducts = async ( req, res ) => {
    const {name}=req.query
    try {
        const result = await allProducts(name)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

}

//!HANDLER QUE MANEJA LA PETICION POST A /PRODUCTS
const postProduct = async(req, res) =>{
    const {image, name, price, description, raiting, category} = req.body;
    try {
        const data={
            image:image,
            name:name,
            price:price,
            description:description,
            raiting:raiting,
            category:category
        }
        const result = await postProductContoller(data)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getProductById,
    getAllProducts,
    postProduct
}