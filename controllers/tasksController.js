const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'tasks.json');

function leerTareas() {
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
}

function guardarTareas(tareas) {
  fs.writeFileSync(dataPath, JSON.stringify(tareas, null, 2));
}

function getTasks(req,res){
  const tareas = leerTareas();
  res.json(tareas);
}

function getTaskById(req, res) {
  const tareas = leerTareas();
  const tarea = tareas.find(t => t.id === Number(req.params.id));

  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json(tarea);
}


function createTask(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El campo title es obligatorio' });
  }

  const tareas = leerTareas();

  const nuevaTarea = {
    id: Date.now(),
    title,
    completed: false
  };

  tareas.push(nuevaTarea);
  guardarTareas(tareas);

  res.status(201).json(nuevaTarea);
}

function updateTask(req, res) {
  const tareas = leerTareas();
  const index = tareas.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const { title, completed } = req.body;

  if (title !== undefined) tareas[index].title = title;
  if (completed !== undefined) tareas[index].completed = completed;

  guardarTareas(tareas);
  res.json(tareas[index]);
}

function deleteTask(req, res) {
  const tareas = leerTareas();
  const index = tareas.findIndex(t => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const eliminada = tareas.splice(index, 1);
  guardarTareas(tareas);

  res.json({ mensaje: 'Tarea eliminada', tarea: eliminada[0] });
}

module.exports = { getTasks, createTask ,getTaskById,updateTask, deleteTask};
