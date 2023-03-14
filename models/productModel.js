import { Sequelize } from 'sequelize';
import sequelize from '../config/sequelize.js';

const { DataTypes } = Sequelize;

const Product = sequelize.define(
  'product',
  {
    product_id: {
      type: DataTypes.INTEGER,
    },
    product_name: {
      type: DataTypes.STRING,
    },
    product_price: {
      type: DataTypes.INTEGER,
    },
  },
  {}
);

export default Product;

(async () => {
  await Product.sync();
})();
