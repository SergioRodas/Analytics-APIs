# Analytics APIs
Este proyecto consiste en una API para registrar información de acceso a otras APIs. Utiliza Node.js y Cassandra para almacenar los datos de las peticiones.

## Instalación
Clona el repositorio en tu máquina local.

Asegúrate de tener Docker instalado.

Abre una terminal en la raíz del proyecto y ejecuta docker-compose up para levantar los servicios de Cassandra y la API.

La API estará disponible en http://localhost:3000/.

## Endpoints
- POST /analytics
  Registra una nueva petición. Los campos requeridos en el cuerpo de la petición son:

  - apiName: el nombre de la API a la que se está accediendo.
  - routeAccessed: la ruta de la API a la que se está accediendo.
  - userIp: la dirección IP del usuario que hace la petición.
  - userAgent: el navegador o agente de usuario que está haciendo la petición.
  - location: la ubicación del usuario que hace la petición.

- GET /analytics
Devuelve todas las peticiones registradas. Cada petición tiene los siguientes campos:

  - id: el identificador único de la petición.
  - apiName: el nombre de la API a la que se accedió.
  - routeAccessed: la ruta de la API a la que se accedió.
  - userIp: la dirección IP del usuario que hizo la petición.
  - userAgent: el navegador o agente de usuario que hizo la petición.
  - location: la ubicación del usuario que hizo la petición.
  - createdAt: la fecha y hora en que se hizo la petición.

## Contributing
Si deseas contribuir a este proyecto, por favor abre un pull request con tus cambios.

## License
Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo LICENSE para obtener más información.
