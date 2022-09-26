// funciones para iterar en la lista de productos
const listadoAlmacen = () => {
    const nodoAlmacen = document.getElementById("almacenLista");
    let almacenhtml = "";
    
    for(const producto of listaAlmacen){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    botoncomprarAlmacen();
}
const listadoBebidas = () => {
    const nodoAlmacen = document.getElementById("bebidaLista");
    let almacenhtml = "";
    
    for(const producto of listaBebidas){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    
    botoncomprarBebidas();
}
const listadoPanaderia = () => {
    const nodoAlmacen = document.getElementById("panaderiaLista");
    let almacenhtml = "";
    
    for(const producto of listaPanaderia){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    
    botoncomprarPanaderia();
}
const listadoFiambres = () => {
    const nodoAlmacen = document.getElementById("FiambresLista");
    let almacenhtml = "";
    
    for(const producto of listaFiambres){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    
    botoncomprarFiambres();
}
const listadoPerfumeria = () => {
    const nodoAlmacen = document.getElementById("perfumeriaLista");
    let almacenhtml = "";
    
    for(const producto of listaPerfumeria){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    
    botoncomprarPerfumeria();
}
const listadoRegaleria = () => {
    const nodoAlmacen = document.getElementById("regaleriaLista");
    let almacenhtml = "";
    
    for(const producto of listaRegaleria){
        almacenhtml += mostrar(producto);
    }
    nodoAlmacen.innerHTML = almacenhtml;
    
    botoncomprarRegaleria();
}
