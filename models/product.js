import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: [true, "Name is required."] },
  sellin: { type: Number, required: [true, "Sell In is required."]  },
  price: { type: Number, required: [true, "Price is required."]  }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
