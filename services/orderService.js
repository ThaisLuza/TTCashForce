const { order } = require('../models');

const getAll = async () => {
  const orders = await order.findAll();
  return orders;
};

module.exports = {
  getAll,
};
