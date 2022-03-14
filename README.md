# ✨Amazonas App

Aplicación clon de Amazon desarrollada por medio de React JS ⚛.

## 🖥 Deploy

Este proyecto fue despleguedado por medio de Firebase. [Click aquí para visitar el sitio 🚀](https://as-app-2d11a.web.app/)

## 📚 Secciones y funcionalidades del proyecto

El proyecto cuenta con las siguientes secciones:
 - **Página principal** en la cual se pueden consultar todos los artículos disponibles, filtrarlos según departamento y/o categoría y agregarlos al carrito. 
 - **Barra de navegación** en el header en la cuál se puede permitir el acceso a la ubicación, realizar la búsqueda de un producto en la barra de búsqueda, iniciar y cerrar sesión del usuario y acceder al carrito de compras.
 - **Sección de Login y Sign Up** por medio de la cuál el usuario puede iniciar sesión o crear una nueva cuenta usando correo y contraseña, cuenta de Google o cuenta de Facebook como medios de autenticación.
 - **Detalle de un producto** en la cuál se pueden consultar a detalle las características de un producto seleccionado y ver a detalle sus fotos. En esta misma sección, el usuario puede agregar el producto al carrito o si lo desea comprar empezar directamente la compra. Además, en esta sección se pueden consultar productos relacionados y reseñasen relación al producto.
 - **Carrito** de compras, en la cúal se pueden consultar los productos previamente agregados, cambiar su cantidad y calcular el precio total del pedido.
 
 Adicionalmente, se creó una sección de uso restringido:
 - **Panel de administración** en la cuál los usuarios catalogados como administradores pueden agregar nuevos productos y modificar los productos existentes.

## ⚙ Especificaciones técnicas

Dentro de los recursos técnicos utilizados para el desarrollo se encuentran:
- Autentificación de usuarios por medio de Firebase Authentication con correo y contraseña, cuenta de Google y cuenta de Facebook.
- En base a la autentificación del usuario, se ejecuta un sistema de protección de rutas por medio de _React-router-dom_. Dentro de las rutas públicas se encuentran la página principal y el detalle del productos. Dentro de las rutas públicas limitadas están la sección de Login y Sign Up (solo se accede a ellas en caso de que el usuario no esté autenticado). Dentro de las rutas privadas, se encuentran el carrito de compras y el panel de administración, el cual está protegido de manera adicional con una autenticación de administrador.
- Uso de _componentes en función_ de React y de _hooks_ tales como _useState_, _useEffect_, _useParams_ y _useNavigate_ para el manejo de estados e intercambio de información entre componentes dentro de la aplicación. Así mismo para funcionalidades de búsqueda, filtrado y condiciones de carga del sitio.
- Uso de almacenamiento externo (_backend_) por medio de una base de datos en Firebase. En esta base de datos se almacena la información de los productos y se accede a ella por medio de peticiones asíncronas en caso de modificación de información o sincronización de la información con el _almacenamiento local_.
- Uso de almacenamiento local centralizado por medio de _Redux_. Se tienen tres estados dentro de la apliación: usuario, productos y carrito. La información de usuario se maneja en relación con el estado de la autentificiación, la información de productos es sincronizada con el almacenamiento de Firebase y el estado del carrito se sincroniza en relación con la interacción del usuario. Dentro de cada uno de los estados existen diferentes acciones, generamente relacionadas con procesos CRUD. Gracias al almacenamiento local con Redux, la aplicación funciona de manera más fluida y rápida y se limitan las peticiones al backend.
- El desarrollo de los estilos del sitio se implementó por medio de _SASS_ utilizando funcionalidades como _mixins_, _partials_, _nesting_ y _extends_, lo cual permitió optimizar el código de estilos.

## 🙋‍♂️ Autoría del proyecto

✍ Sitio desarrollado en su totalidad por [Cristian Camilo Sandoval Linares](https://github.com/cristiancsandoval)

🏙 Proyecto realizado como parte de la formación como Desarollador Frontend React JS en **Academia Geek**

## 👋 Gracias por visitar este repositorio

[Click aquí para visitar más proyectos 🚀](https://github.com/cristiancsandoval?tab=repositories)
