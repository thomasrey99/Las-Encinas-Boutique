const { Op } = require("sequelize");
const {Product, Category, Type}=require("../db")

//!TRAE UN PRODUCTO MEDIANTE UN ID ESPECIFICO

const productId = async (id) => {

    const product = await Product.findByPk(id)
    
    if(product){
        return product
    }else{
        return{message:"there are no products with that id"}
    }

} 

//!RECIBE POR PARAMETRO "NAME", SI NAME EXISTE (SE ESTA REALIZANDO UNA BUSQUEDA) DEVUELVE LOS PRODUCTOS QUE COINCIDEN CON EL NOMBRE, SI NO EXISTE "NAME", DEVUELVE TODOS LOS PRODUCTOS
const allProducts = async (name, minPrice, maxPrice, category, type, order) => {

    console.log(name, minPrice, maxPrice, type, order, category)
    //?coincidencias de busqueda
    const whereClause={}

    //?verifica si llega por query name, category, minPrice y maxPrice y va agregando clausulas al whereClause
    

    

    if(name){
        whereClause.name={
            [Op.iLike]:`%${name}%`
        }
    }

    if(category){
        whereClause.category=category
    }

    if(type){
        whereClause.type=type
    }

    if(minPrice && maxPrice){
        whereClause.price={
            [Op.between]:[minPrice, maxPrice]
        }
    }else if(minPrice){
        whereClause.price={
            [Op.gte]:minPrice
        }
    }else if(maxPrice){
        whereClause.price={
            [Op.lte]:maxPrice
        }
    }
    let orderBy=[]

    if(order==='name_asc'){

        orderBy=[['name', 'ASC']]

    }else if(order==='name_desc'){

        orderBy=[['name', 'DESC']]

    }else if(order==='price_asc'){

        orderBy=[['price', 'ASC']]

    }else if(order==='price_desc'){

        orderBy=[['price', 'DESC']]

    }
    //?verifica si hay parametros de filtrado, de lo contrario devuelve todos los productos
    if(Object.keys(whereClause).length===0){
        const response= await Product.findAll({
            order:orderBy.length>0?orderBy:undefined
        })
        return response
    }else{
        const response=await Product.findAll({
            where:whereClause,
            order:orderBy.length>0?orderBy:undefined
            
        })
        return response
    }
}   


//!CONTROLLER QUE CREA UN PRODUCTO
const postProductContoller = async (data)=>{

    const [product, created]= await Product.findOrCreate({
        where:{
            name:data.name
        },
        defaults:data
    })

    if(created){
        const category= await Category.findOne({
            where:{
                name:product.category
            }
        })
        const type= await Type.findOne({
            where:{
                name:product.type
            }
        })
        if(category){
            product.setCategory(category)
        }
        if(type){
            product.setType(type)
        }
    }

    return product
}

//!CONTROLLER QUE MODIFICA O ACTUALIZA UN PRODUCTO
const putProductContoller = async (id, data) => {

    const findProductById = await Product.findByPk(id);
    const updatedProduct = await findProductById.update(data);

    return updatedProduct;
}

const deleteProductContoller = async(id) =>{
    const findProductById = await Product.findByPk(id);
    await findProductById.destroy();

    return findProductById;

}

module.exports = {
    productId,
    allProducts,
    postProductContoller,
    putProductContoller,
    deleteProductContoller
};