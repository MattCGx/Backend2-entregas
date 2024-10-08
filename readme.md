# Desarrollo Backend II - Preentrega

Proyecto de API para ecommerce.


## Consignas cumplidas:

 - Inicializar servidor en puerto 8080
 - Conectar a la base en Mongo Atlas
 - El modelo de usuario contiene todos los campos de la consigna 
 - Al crear un nuevo usuario en la coleccion Users, se genera ademas un nuevo carrito en la coleccion Carts, cuyo id se asigna a la propiedad "cart" del usuario creado.
 - La contraseña del usuario se hashea utilizando bcrypt. 
 - Se incluyen DTO
 - Se implementa Mailing en registro
 - Se incluyen validaciones de rol y sesion iniciada para las rutas. 

 El servidor responde correctamente a las siguiente solicitudes:

- GET localhost:8080/api/users/ (devuelve todos los usuarios creados)
- GET localhost:8080/api/users/:id (devuelve un solo usuario buscando por id)

- POST localhost:8080/api/auth/register (permite crear un usuario validando los campos ingresados)
- POST localhost:8080/api/auth/login (permite iniciar una sesion de usuario con email y password)
- GET localhost:8080/api/auth/current (valida al usuario con uso de la estrategia de jwt y devuelve datos)

- GET localhost:8080/api/carts/:cid/product/:pid agrega un producto al carrito validando el rol del usuario.
- GET localhost:8080/api/carts/:cid/purchase ejecuta la compra de todo el carrito devolviendo un ticket.


## Aclaraciones:
- Las vistas de handlebars son remanentes del proyecto final del primer curso. Aun no están las vistas de éste proyecto en particular.
- El Archivo .envcopia contiene las variables de entorno para la conexion con Mongo Atlas.

