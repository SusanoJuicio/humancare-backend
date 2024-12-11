# Human Care Backend

Este repositorio contiene el backend de Human Care, diseñado para gestionar la lógica del servidor y la conexión con la base de datos para el proyecto Human Care.

## Tecnologías usadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para crear la API de manera eficiente.
- **MongoDB**: Base de datos NoSQL para almacenar y gestionar los datos de manera flexible.
- **Mongoose**: ODM para interactuar con MongoDB en Node.js.

## Instalación

Para ejecutar el backend en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/SusanoJuicio/humancare-backend.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd humancare-backend
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes variables (sustituyendo con tus valores):
     ```env
     MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre-base-datos>?retryWrites=true&w=majority
     PORT=5000
     ```

5. Inicia el servidor local:
   ```bash
   npm start
   ```

6. El backend estará corriendo en `http://localhost:7777`.

## Endpoints principales

- **Usuarios**:
  - `POST /users` - Crear un nuevo usuario.
  - `GET /users` - Obtener todos los usuarios.

- **Productos**:
  - `GET /products` - Obtener la lista de productos.
  - `POST /products` - Agregar un producto nuevo.

## Contribuyentes

Este backend fue desarrollado por:

- [Maxi Martinez](https://github.com/maxiluma18)
- [Iván Acuña](https://github.com/SusanoJuicio)
- [Talia Ojeda](https://github.com/TaliaIvonneOjeda1)
- 
## Frontend

El frontend del proyecto está disponible en el siguiente repositorio: [Human Care Frontend](https://github.com/SusanoJuicio/human-care-repo)

## Licencia

Este proyecto está bajo una licencia abierta. Siéntete libre de usar, modificar y compartirlo respetando los términos de la misma.

---

¡Gracias por contribuir al desarrollo sostenible con Human Care! 🌿
