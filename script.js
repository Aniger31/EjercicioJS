// DATOS DE LOS PRODUCTOS

const productos = [
    {
        nombre: "Thriller",
        artista: "Michael Jackson",
        categoria: "Pop",
        precio: 299,
        imagen: "https://cdn-images.dzcdn.net/images/cover/f01e09ceb8ad1e96707c1b4aadb5911b/500x500.jpg"
    },
    {
        nombre: "Abbey Road",
        artista: "The Beatles",
        categoria: "Rock",
        precio: 349,
        imagen: "https://m.media-amazon.com/images/I/81sBKBIcwvL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "Random Access Memories",
        artista: "Daft Punk",
        categoria: "Electronic",
        precio: 399,
        imagen: "https://m.media-amazon.com/images/I/61Uxg-SWExL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "Back to Black",
        artista: "Amy Winehouse",
        categoria: "Soul",
        precio: 329,
        imagen: "https://m.media-amazon.com/images/I/71Y55FU5VGL.jpg"
    },
    {
        nombre: "Nevermind",
        artista: "Nirvana",
        categoria: "Rock",
        precio: 319,
        imagen: "https://f4.bcbits.com/img/a0464801798_16.jpg"
    },
    {
        nombre: "Future Nostalgia",
        artista: "Dua Lipa",
        categoria: "Pop",
        precio: 289,
        imagen: "https://m.media-amazon.com/images/I/71VQFsqlPJL.jpg"
    },
    {
        nombre: "Discovery",
        artista: "Daft Punk",
        categoria: "Electronic",
        precio: 359,
        imagen: "https://i.scdn.co/image/ab67616d0000b2731e81bff9807a9e629fce5ade"
    },
    {
        nombre: "Rumours",
        artista: "Fleetwood Mac",
        categoria: "Rock",
        precio: 339,
        imagen: "https://m.media-amazon.com/images/I/81StMTXGhbL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "Ctrl",
        artista: "SZA",
        categoria: "R&B",
        precio: 309,
        imagen: "https://i.scdn.co/image/ab67616d0000b27306d56b057cce5797538a16d5"
    },
    {
        nombre: "Channel Orange",
        artista: "Frank Ocean",
        categoria: "R&B",
        precio: 329,
        imagen: "https://m.media-amazon.com/images/I/51r0bKlmVnL._UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "Sour",
        artista: "Olivia Rodrigo",
        categoria: "Pop",
        precio: 279,
        imagen: "https://cdn-images.dzcdn.net/images/cover/d74c7c110c0a6d0f3e1cd6b7bfac8ed6/0x1900-000000-80-0-0.jpg"
    },
    {
        nombre: "To Pimp a Butterfly",
        artista: "Kendrick Lamar",
        categoria: "Hip-Hop",
        precio: 379,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcka5Cs2UXs0TFrR4iGjYHAg9ceJgFJH4_irMAo1lUvFnbgP2wvaMPruo&s=10"
    },
    {
        nombre: "The Miseducation of Lauryn Hill",
        artista: "Lauryn Hill",
        categoria: "Hip-Hop",
        precio: 349,
        imagen: "https://m.media-amazon.com/images/I/71YmBlTMamL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        nombre: "SOS",
        artista: "SZA",
        categoria: "R&B",
        precio: 319,
        imagen: "https://m.media-amazon.com/images/I/91BazzuLE+L.jpg"
    },
    {
        nombre: "El Madrileño",
        artista: "C. Tangana",
        categoria: "Latin",
        precio: 299,
        imagen: "https://i.scdn.co/image/ab67616d0000b27341533c81ef4793029083c205"
    }
];



// ELEMENTOS DEL DOM


const contenedorProductos = document.getElementById("productos");
const buscador = document.getElementById("buscador");
const categoria = document.getElementById("categoria");
const mensajeSinResultados = document.getElementById("sin-resultados");
const contador = document.getElementById("contador");



//RENDERIZAR PRODUCTOS


function renderizarProductos(listaProductos) {

    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("product-card");

        tarjeta.innerHTML = `
            <img
                class="product-image"
                src="${producto.imagen}"
                alt="Portada del álbum ${producto.nombre}"
            >

            <div class="product-info">

                <span class="product-category">
                    ${producto.categoria}
                </span>

                <h3 class="product-title">
                    ${producto.nombre}
                </h3>

                <p class="product-artist">
                    ${producto.artista}
                </p>

                <p class="product-price">
                    $${producto.precio} MXN
                </p>

            </div>
        `;

        contenedorProductos.appendChild(tarjeta);
    });

    contador.textContent =
        `${listaProductos.length} ${listaProductos.length === 1 ? "álbum" : "álbumes"}`;

    if (listaProductos.length === 0) {
        mensajeSinResultados.classList.remove("hidden");
    } else {
        mensajeSinResultados.classList.add("hidden");
    }
}


// CARGAR CATEGORÍAS


function cargarCategorias() {

    const categorias = [];

    productos.forEach(producto => {

        if (!categorias.includes(producto.categoria)) {
            categorias.push(producto.categoria);
        }

    });

    categorias.sort();

    categorias.forEach(categoriaActual => {

        const opcion = document.createElement("option");

        opcion.value = categoriaActual;
        opcion.textContent = categoriaActual;

        categoria.appendChild(opcion);
    });
}


// FILTRAR PRODUCTOS


function filtrarProductos() {

    const textoBuscado = buscador.value.toLowerCase().trim();
    const categoriaSeleccionada = categoria.value;

    const productosFiltrados = productos.filter(producto => {

        const coincideTexto =
            producto.nombre.toLowerCase().includes(textoBuscado) ||
            producto.artista.toLowerCase().includes(textoBuscado);

        const coincideCategoria =
            categoriaSeleccionada === "todas" ||
            producto.categoria === categoriaSeleccionada;

        return coincideTexto && coincideCategoria;
    });

    renderizarProductos(productosFiltrados);
}


// EVENTOS


// Se ejecuta cada vez que el usuario escribe.
buscador.addEventListener("input", filtrarProductos);

// Se ejecuta cuando cambia la categoría.
categoria.addEventListener("change", filtrarProductos);



// INICIALIZACIÓN


cargarCategorias();

renderizarProductos(productos);
