function changeFileName(req, file, callback) {
  // Generar un nuevo nombre para el archivo
  const newName = req._id + path.extname(file.originalname);

  // Asignar el nuevo nombre al archivo
  file.originalname = newName;

  // Llamar al callback con el nuevo nombre del archivo
  callback(null, newName);
}

module.export = changeFileName;