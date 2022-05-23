const OrderService = require('../services/orderService');

const getAll = async (req, res, next) => {
  try {
    const data = await OrderService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message: 'internal server error'});
  }
};

module.exports = getAll;