import Product from '../../models/productModel.js';

export const getAllProduct = async (req, res) => {
  try {
    const data = await Product.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
export const addProduct = async (req, res) => {
  const { product_id, product_name, product_price } = req.body;
  try {
    const data = await Product.create({
      product_id,
      product_name,
      product_price,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await Product.destroy();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
