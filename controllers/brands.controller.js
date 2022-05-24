module.exports.brandsController = {
    getBrand: (req, res) => {
      res.json("Вам представлен список брендов");
    },
    postBrand: (req, res) => {
      res.json(`Выложен новый бренд`);
    },
    deleteBrand: (req, res) => {
      res.json("Удален бренд");
    }
  };
  