// funciones para crear los productos que se muestran en el dom
const mostrar = (producto) =>{
    return`
        <div "class="d-flex">
            <div class="rows">
                <div class="card">
                <img src="https://loremflickr.com/200/200/${producto.marca}" class="card-img-top" alt="API">
                    <div class="card-body">
                      <h5 class="card-title">${producto.marca} </h5>
                      <p class="card-text">precio: $ ${producto.precio}</p>
                      <button id ="btn-${producto.marca}-${producto.id}" class="btn btn-primary">comprar</button>
                    </div>
                </div>
            </div>
        </div>
            `;
            
};
const mostrarlista = (producto) =>{
    return`
            <div class="col-2">
                <div class="card">
                <img src="https://loremflickr.com/100/100/${producto.marca} class="card-img-top" alt="imagen">
                    <div class="card-body">
                      <h5 class="card-title">${producto.marca}</h5>
                      <p class="card-text">precio: $ ${producto.precio}</p>
                      <button id ="btn-${producto.marca}-${producto.idcompra}" class="btn btn-danger">borrar</button>
                    </div>
                </div>
            </div>
            `;
};

// funciones para mostrar productos de una api
const pedirproductoApi = async () =>{
    const mostrar = document.getElementById("mostrarApi");
    const resp = await fetch("https://api.mercadolibre.com/categories/MLA1404/attributes#json");
    const data = await resp.json();
    
    data.map( (lista) => {
        
        const li = document.createElement("li");
        
        li.innerHTML =  `
        <div "class="d-flex">
            <div class="rows-1 d-flex">
                <div class="card">
                <img src="https://loremflickr.com/200/200/${lista.name}" class="card-img-top" alt="API">
                    <div class="card-body">
                      <h5 class="card-title">${lista.name} </h5>
                      <p class="card-text">precio: $ ${lista.value_max_length}</p>
                      <button id ="btn-${lista.name}-${lista.id}" class="btn btn-primary">comprar</button>
                    </div>
                </div>
            </div>
        </div>
            `;
           
            mostrar.append(li)
        
    });

};




// funciones en base al carrito

const mostrarAlmacen = () => {
    let nodoAlmacen = document.getElementById("compras");
    let precioNodo = document.getElementById("total");
    
    
    let moshtml = "";
    let totalFinal = 0;
    precioNodo = 0;
    
    for(const producto of carrito){
        moshtml += mostrarlista(producto);
        totalFinal += producto.precio;
    }
    precioNodo.innerHTML = totalFinal;
    nodoAlmacen.innerHTML = moshtml;
    
    botonesCarritos();
}

const botonesCarritos = () => {
    for(const producto of carrito){
        const idboton = `btn-${producto.marca}-${producto.idcompra}`;
        const nodoboton = document.getElementById(idboton);
        
        nodoboton.addEventListener("click", () => {
            const index = carrito.findIndex((p) => p.idcompra == producto.idcompra);
            carrito.splice(index, 1);
            Toastify({
                text: "Eliminado del carrito",
                duration: 600,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "red",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            mostrarAlmacen();
        })
        
    }
};

btnAlmacen();
btnBebidas();
btnpanaderia();
btnfiambres();
btnperfumeria();
btnregaleria();
btnListaApi();
