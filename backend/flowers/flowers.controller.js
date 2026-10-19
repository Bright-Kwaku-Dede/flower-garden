let flowers = require("./flowers.data");

exports.getFlowers = (req, res) => {
  res.json(flowers);
};

exports.addFlower = (req, res) => {
  const newFlower = {
    id: flowers.length + 1,
    ...req.body,
  };
  flowers.push(newFlower);
  res.json(newFlower);
};

exports.updateFlower = (req, res) => {
  const id = Number(req.params.id);
  const index = flowers.findIndex((f) => f.id === id);
  flowers[index] = { ...flowers[index], ...req.body };
  res.json(flowers[index]);
};

exports.deleteFlower = (req, res) => {
  const id = Number(req.params.id);
  flowers = flowers.filter((f) => f.id !== id);
  res.json({ success: true });
};
