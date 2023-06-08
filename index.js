const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");
const fileMiddelware = require("./middelwares/file.midelware");
const bodyParser = require('body-parser');

// Inicializar app
console.log("App de node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
const app = express();
const puerto = 3900;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar cors
app.use(cors());

/* app.use((req, res, next) => {
  if (req.file) {
    fileMiddelware(res, req.file, (error, res) => {
      if (error) {
        // Manejar cualquier error aquí
        console.error(error);
      } else {
        req.file.filename = res._id;
      }
      next();
    });
  }
}); */

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); // form-urlencoded
app.set("view engine", "pug");

// RUTAS
const rutas_articulo = require("./rutas/articulo");

// Cargo las rutas
app.use("/api", rutas_articulo);

// Rutas prueba hardcodeadas
app.get("/probando", (req, res) => {
  console.log("Se ha ejecutado el endpoint probando");

  return res.status(200).json([
    {
      curso: "Master en React",
      autor: "Víctor Robles WEB",
      url: "victorroblesweb.es/master-react",
    },
    {
      curso: "Master en React",
      autor: "Víctor Robles WEB",
      url: "victorroblesweb.es/master-react",
    },
  ]);
});

app.get("/motor", (req, res) => {
  return res.render("motor", {
    id: 1,
    nombre: "Victor",
    web: "victorroblesweb.es",
  });
});

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Empezando a crear un api rest con node</h1>");
});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto " + puerto);
});
