const express = require('express');
const logger = require('./middlewares/logger');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config();
const app = express();
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('API de tareas funcionando 🚀');
});

app.use('/tasks', tasksRoutes);

// manejo de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
