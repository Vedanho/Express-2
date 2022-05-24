module.exports.productsController = {
  getProduct: (req, res) => {
    res.json("Вам представлен список продуктов");
  },
  getProductById: (req, res) => {
    res.json(`Представить продукт по ID: ${req.params.id}`);
  },
  postProduct: (req, res) => {
    res.json("Выложен новый продукт");
  },
  deleteProductById: (req, res) => {
    res.json(`Удалить продукт пользователя с ID: ${req.params.id}`);
  },
};
