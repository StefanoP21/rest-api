# Proyecto REST API - Clean Architecture

Aplicación RestFull para la gestión de productos, clientes, ordenes y categorias.

### Instalación

Clona el repositorio y navega hasta el directorio:

```bash
git clone https://github.com/StefanoP21/rest-api.git
```

### Instala las dependencias:

```bash
npm install
```

### Variables de Entorno

Cree un archivo .env en la carpeta raíz de su proyecto y añada sus variables. Consulte .env.template para obtener ayuda.

### Prisma Migrate

Para aplicar las migraciones de la base de datos, ejecute:

```bash
npx prisma migrate dev --name init
```

### Ejecución en modo de desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

### Ejecución en modo de producción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
# and then
npm start
```

## API Endpoints

| HTTP Verbs | Endpoints         | Action                                      |
| ---------- | ----------------- | ------------------------------------------- |
| POST       | /api/category/    | Para crear una nueva categoria de producto  |
| GET        | /api/category/    | Para obtener todas las categorias           |
| PUT        | /api/category/:id | Para editar la información de una categoria |
| DELETE     | /api/category/:id | Para eliminar una categoria de producto     |
| ---------- | ----------------- | ------------------------------------------- |
| POST       | /api/client/      | Para crear un nuevo cliente                 |
| GET        | /api/client/:id   | Para obtener un cliente por código de id    |
| PUT        | /api/client/:id   | Para editar la información de un cliente    |
| DELETE     | /api/client/:id   | Para eliminar un cliente                    |
| ---------- | ----------------- | ------------------------------------------- |
| POST       | /api/product/     | Para crear un nuevo producto                |
| GET        | /api/product/:id  | Para obtener un producto por código de id   |
| PUT        | /api/product/:id  | Para editar la información de un producto   |
| DELETE     | /api/product/:id  | Para eliminar un producto                   |
| ---------- | ----------------- | ------------------------------------------- |
| POST       | /api/order/       | Para crear una nueva orden de compra        |
| GET        | /api/order/:id    | Para obtener una orden por código de id     |
| PUT        | /api/order/:id    | Para editar la información de una orden     |
| DELETE     | /api/order/:id    | Para eliminar una orden de compra           |

### Tecnologías

-   [TypeScript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [MySql](https://www.mysql.com/)
-   [Prisma](https://www.prisma.io/)

### Autor

-   [Stefano Palomino](https://github.com/StefanoP21)
