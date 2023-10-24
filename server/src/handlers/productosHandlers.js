const { productoQuery, productoId, allProductos, postProductHandler} = require("../controllers/productosControllers");

const getProductoQuery = async (req, res) => {
    
    let { nombre } = req.query

    nombre = nombre.toLowerCase()

    try {
        const result = await productoQuery(nombre)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const getProductoId  = async ( req, res ) => {

   const { id } = req.params
   
   try {
        const result = await productoId(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}

const getAllProductos = async ( req, res ) => {
    
    try {
        const result = await allProductos()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }

}

const postProduct = async(req, res) =>{
    const {nombre} = req.body;
    try {
        const result = await postProductHandler(nombre)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getProductoQuery,
    getProductoId,
    getAllProductos,
    postProduct
}