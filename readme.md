**API Tasks**

Estado: En Desarrollo

CRUD de tareas que se graban en un json

Tecnologias: Node.js con Express

Modalidad de trabajo: Desarrollado y pusheado en su totalidad desde la consola de Termux en Android

Instalación:
npm install
node server.js

Endpoints disponibles:
GET(/tasks)-->Lista todas las tareas
GET(/tasks/:id)-->Trae una tarea por id
POST(/tasks)-->Crea una tarea nueva
PUT(/tasks/:id)-->Edita una tarea existente
DELETE(/tasks/:id)-->Elimina una tarea existente

Estructura:
tasks-api/
├── server.js
├── routes/
├── controllers/
├── data/
└── middlewares/

Próximos pasos:
- Variables de entorno (.env) para configuración (puerto, futuros secretos)
- Manejo de errores centralizado (middleware de error al final de la cadena)
- Validación más robusta en los inputs (tipo y formato, no solo presencia)
- Nodemon como dependencia de desarrollo (reinicio automático del servidor)
- Revisión de códigos de status HTTP en todas las respuestas
- Filtros/query params en GET /tasks (ej: completed=true)
- Tests básicos (node --test o jest)
