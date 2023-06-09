const validarArticulo = (objeto) => {
  const error = {};

  !objeto.titulo && (error.titulo = "falta el campo titulo");
  !objeto.contenido && (error.contenido = "falta el campo contenido");

  return error;
};

module.exports = {
  validarArticulo,
};
