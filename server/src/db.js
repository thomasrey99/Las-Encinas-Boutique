const { Sequelize } = require("sequelize");
const userModel=require("./models/User")
const productModel=require("./models/Product")
const requestModel=require("./models/Request")
const categoryModel=require("./models/Category")
const typeModel=require("./models/Type")
const cartModel=require("./models/Cart")
require("dotenv").config();


const {
  DB_USER,
  DB_PASSWORD, 
  DB_HOST,
  DB_NAME,
  DB_DIALECT,
  DB_PORT 
} = process.env; 

const dataBase=new Sequelize( 
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {logging:false}
)
userModel(dataBase)
productModel(dataBase)
categoryModel(dataBase)
typeModel(dataBase)
requestModel(dataBase)
cartModel(dataBase)

//!RELACIONES

const { User, Product, Request, Cart, Category, Type } = dataBase.models;

//*un producto puede tener una categoria y una categoria puede tener varios productos

Category.hasMany(Product, {foreignKey:"id_category"})
Product.belongsTo(Category, {foreignKey:"id_category"})

//*un producto puede tener un tipo y un tipo puede tener varios productos

Type.hasMany(Product, {foreignKey:"id_type"})
Product.belongsTo(Type, {foreignKey:"id_type"})

//*un usuario puede comprar varios productos y un producto puede ser comprado por varios usuarios


User.belongsToMany(Product, {through: 'user_product'})
Product.belongsToMany(User, {through: 'user_product'})


//*un usuario puede tener un carrito y un carrito pertenece a un unico usuario

User.hasOne(Cart, {onDelete:'CASCADE'})
Cart.belongsTo(User)

//*un usuario puede hacer varios pedidos y un pedido pertenece a un solo usuario

User.hasMany(Request, {foreignKey:"user_id"})
Request.belongsTo(User, {foreignKey:"user_id"})

//*un producto puede tener varias ordenes y una orden puede tener varios productos


Product.belongsToMany(Request , { through: 'product_request' });
Request.belongsToMany(Product , { through: 'product_request' });

//*un producto puede estar en varios carritos y un carrito puede tener varios productos

Product.belongsToMany(Cart, {through:"Product_cart"})
Cart.belongsToMany(Product, {through:"Product_cart"})

//*un producto puede ser comprado por varios usuarios y un usuario puede comprar varios productos

Product.belongsToMany(User, {through:"user_product"})
User.belongsToMany(Product, {through:"user_product"})

module.exports={
  ...dataBase.models,
  dataBase
}
