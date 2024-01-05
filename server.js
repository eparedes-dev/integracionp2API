const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dataBase/dataBaseConnection'); // Importa el objeto de conexión

const app = express();
// Configura el middleware de análisis del cuerpo de la solicitud
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para obtener todos los clientes
app.get('/clientes', (req, res) => {
  const sql = 'SELECT * FROM Cliente';

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(result);
    }
  });
});

// Ruta para insertar un nuevo registro en RegistroConsulta
app.post('/registroConsulta', (req, res) => {
  console.log(req.body);
  const { usuario, ciudad, latitud, longitud } = req.body;
  const sql = 'INSERT INTO RegistroConsulta (Usuario, Ciudad, Latitud, Altitud) VALUES (?, ?, ?, ?)';

  db.query(sql, [usuario, ciudad, latitud, longitud], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta de inserción:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.status(201).send('Registro insertado correctamente');
    }
  });
});


// Ruta para obtener un cliente específico por nombre de usuario
app.get('/clientes/:usuario', (req, res) => {
  const usuario = req.params.usuario;
  const sql = 'SELECT * FROM Cliente WHERE Usuario = ?';

  db.query(sql, [usuario], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (result.length > 0) {
        res.json(result[0]); 
      } else {
        res.status(404).send('Cliente no encontrado');
      }
    }
  });
});





// Puerto en el que se ejecutará el servidor
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor API en ejecución en http://localhost:${port}`);
});