exports.allAccess = (req, res) => {
  res.status(200).send("Contenido Publico");
};

exports.userBoard = (req, res) => {
  res.status(200).send("Contenido del usuario");
};
