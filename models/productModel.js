const mongoose = require("mongoose");
const Schema=mongoose.Schema
const productSchema= new Schema(
   {
      name:String,
      price:String,
      weight:String,
      file:String
   },
  {timestamps:true}
)
const ProductModel = mongoose.model("products",productSchema)
module.exports=ProductModel
