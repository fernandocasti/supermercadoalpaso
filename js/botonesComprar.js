let contadorCarrito = 0;
const carrito = [];

const botoncomprarAlmacen = () => {
    for(const producto of listaAlmacen){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        document.addEventListener("DOMContentLoaded", () => {
            if (localStorage.getItem("carrito")) {
                carrito = JSON.parse(localStorage.getItem("carrito"))
                mostrarAlmacen();
            }
        })
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
const botoncomprarBebidas = () => {
    for(const producto of listaBebidas){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
const botoncomprarPanaderia = () => {
    for(const producto of listaPanaderia){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
const botoncomprarFiambres = () => {
    for(const producto of listaFiambres){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
const botoncomprarPerfumeria = () => {
    for(const producto of listaPerfumeria){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
const botoncomprarRegaleria = () => {
    for(const producto of listaRegaleria){
    const btnLista = `btn-${producto.marca}-${producto.id}`
    const nodolista =document.getElementById(btnLista)
    
    nodolista.addEventListener("click", () => {
        const productoCarrito = {
            marca: producto.marca,
            precio: producto.precio,
            id: producto.id,
            idcompra: contadorCarrito,
        };
        Toastify({
            text: "agregado al carrito",
            duration: 600,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "green",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
        contadorCarrito  += 1;
        carrito.push(productoCarrito);
        mostrarAlmacen();
    });
    }
};
