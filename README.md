# Nombre del Proyecto
API REST - PAULINA ACUÑA - IVÁN CAMPOS - SEBASTIÁN MARQUEZ

## Descripción
API RESTful para la gestión de usuarios, ofertas laborales, antecedentes laborales y académicos, y postulaciones. Permite a reclutadores y candidatos interactuar en un sistema de reclutamiento, facilitando la administración de postulaciones y antecedentes.


## Tecnologías utilizadas
- Node.js
- Express
- MariaDB/MySQL

## Requisitos previos
- Node.js >= 18.x
- npm >= 9.x
- MariaDB o MySQL

## Instalación

git clone https://github.com/Pauaua/EV2_ACUNA_CAMPOS_MARQUEZ.git
cd EV2_ACUNA_CAMPOS_MARQUEZ 
npm install

# Configuración
Crea un archivo .env en la raíz del proyecto con tus variables de entorno, por ejemplo:

PORT=3001
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=ev2_acuna_campos_marquez

# Ejecución

npm start

El servidor estará disponible en http://localhost:3000

## Estructura de carpetas

src/
├── controllers/
│   ├── antecedenteAcademicoController.js
│   ├── antecedenteLaboralController.js
│   ├── ofertaLaboralController.js
│   ├── postulacionController.js
│   └── usuarioController.js
├── models/
│   ├── antecedenteAcademico.js
│   ├── antecedenteLaboral.js
│   ├── ofertaLaboral.js
│   ├── postulacion.js
│   └── usuario.js
├── routes/
│   ├── antecedenteAcademico.js
│   ├── antecedenteLaboral.js
│   ├── ofertaLaboral.js
│   ├── postulacion.js
│   ├── usuario.js
│   └── index.js
└── config/
    └── db.js

## Endpoints principales

Usuarios
GET /api/usuarios
GET /api/usuarios/:id
POST /api/usuarios
PUT /api/usuarios/:id
DELETE /api/usuarios/:email
PUT /api/usuarios/desactivate

Body ejemplo:
{
  "nombre": "Juan",
  "apellido": "Naju",
  "email": "najuan@correo.cl",
  "contraseña": "123",
  "rol": "Reclutador"
}

Response ejemplo:
{
  "message": "Usuario creado exitosamente."
}

Ofertas Laborales
GET /api/ofertaLaboral
GET /api/ofertaLaboral/:id
POST /api/ofertaLaboral
PUT /api/ofertaLaboral/:id
DELETE /api/ofertaLaboral/:id
PUT /api/ofertaLaboral/estado/:id

Body ejemplo:
{
  "titulo": "Administración Onírica",
  "descripcion": "Desarrollador base de datos...",
  "ubicacion": "Nube sectorial sur",
  "salario": "6,596,559",
  "tipo_contrato": "Indefinido",
  "fecha_publicacion": "2024-05-18",
  "fecha_cierre": "2024-06-01",
  "estado": "Activo",
  "reclutador_id": 1
}

Antecedente Laboral
GET /api/antecedenteLaboral
GET /api/antecedenteLaboral/:id
GET /api/antecedenteLaboral/candidato/:candidatoId
POST /api/antecedenteLaboral
PUT /api/antecedenteLaboral/:id
DELETE /api/antecedenteLaboral/:id

Body Ejemplo
{
  "candidato_id": 2,
  "empresa": "Empresa X",
  "cargo": "Analista",
  "funciones": "Análisis de datos",
  "fecha_inicio": "2022-01-01",
  "fecha_termino": "2023-01-01"
}


Antecedente Académico
GET /api/antecedenteAcademico
GET /api/antecedenteAcademico/:id
GET /api/antecedenteAcademico/candidato/:candidatoId
GET /api/antecedenteAcademico/candidato/:candidatoId/institucion/:institucion
POST /api/antecedenteAcademico
PUT /api/antecedenteAcademico/:id
DELETE /api/antecedenteAcademico/:id

Body ejemplo
{
  "candidato_id": 2,
  "institucion": "Universidad X",
  "titulo_obtenido": "Ingeniero",
  "anio_ingreso": 2018,
  "anio_egreso": 2022
}


Postulación
GET /api/postulacion
GET /api/postulacion/:id
POST /api/postulacion
PUT /api/postulacion/:id
DELETE /api/postulacion/:id
PUT /api/postulacion/estado/:id

Body ejemplo
{
  "candidato_id": 2,
  "oferta_laboral_id": 1,
  "fecha_postulacion": "2024-05-18",
  "estado_postulacion": "Enviada",
  "comentario": "Interesado en la oferta"
}

## Colección Postman

Puedes importar la colección de endpoints en Postman usando el archivo [`EV2_API.postman_collection.json`](./EV2_API.postman_collection.json).

## Conclusión

Este sistema API RESTful permite gestionar de manera eficiente usuarios, ofertas laborales, antecedentes y postulaciones, facilitando la interacción entre candidatos y reclutadores.  
Para dudas, mejoras o reportes, contacta a los autores o revisa el repositorio.

## Autores

- Paulina Acuña
- Iván Campos
- Sebastián Márquez

## Licencia

Este proyecto es de uso académico. Todos los derechos reservados


