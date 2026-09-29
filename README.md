
# 🎵 Music Library — Filtro Dinámico de Productos

Proyecto desarrollado para practicar JavaScript, manipulación del DOM,
eventos y filtrado dinámico de información.

## 📌 Descripción

Music Library es una página web que muestra una colección de álbumes
musicales y permite filtrarlos en tiempo real.

El usuario puede buscar un álbum o artista mediante un campo de texto
y también puede seleccionar un género musical.

Los resultados se actualizan automáticamente sin necesidad de recargar
la página.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Manipulación del DOM
- Método `filter()`

No se utilizaron frameworks.

## 🔎 ¿Cómo funciona el filtro?

Los productos se almacenan inicialmente en un arreglo llamado
`productos` dentro de `script.js`.

Cada producto contiene información como:

- Nombre del álbum
- Artista
- Categoría o género
- Precio
- Imagen

Cuando el usuario escribe en el buscador o cambia la categoría,
se ejecuta la función `filtrarProductos()`.

Esta función obtiene los valores actuales de los filtros y utiliza
el método `filter()` para crear una nueva lista con los productos
que cumplen las condiciones.

El filtro por texto revisa tanto el nombre del álbum como el nombre
del artista.

El filtro por categoría compara el género seleccionado con la
categoría de cada producto.

Finalmente, los resultados filtrados se envían a la función
`renderizarProductos()`, que actualiza el contenido del DOM.

## ⚡ Actualización en tiempo real

La aplicación utiliza dos eventos principales:

### `input`

Se utiliza en el campo de búsqueda.

Cada vez que el usuario escribe o elimina texto, se vuelve a ejecutar
el filtro.

### `change`

Se utiliza en el selector de categorías.

Cuando el usuario selecciona un género diferente, la lista se actualiza
automáticamente.

## 🚫 Sin resultados

Cuando ningún producto coincide con los filtros seleccionados,
las tarjetas desaparecen y se muestra un mensaje indicando que no se
encontraron resultados.

## 🧩 Organización del código

El código JavaScript está dividido en diferentes responsabilidades:

- Datos de los productos
- Elementos del DOM
- Renderizado de productos
- Carga de categorías
- Filtrado de productos
- Eventos
- Inicialización

Esto permite mantener el código organizado y evitar duplicar lógica.

## ▶️ Cómo ejecutar el proyecto

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en un navegador.
3. Escribe un álbum o artista en el buscador.
4. Selecciona un género musical.
5. Observa cómo los productos se actualizan automáticamente.

## 👩‍💻 Autora

Regina Hernández Rodríguez
