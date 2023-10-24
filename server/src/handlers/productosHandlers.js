const { productoQuery, productoId, allProductos} = require("../controllers/productosControllers");

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

module.exports = {
    getProductoQuery,
    getProductoId,
    getAllProductos
}