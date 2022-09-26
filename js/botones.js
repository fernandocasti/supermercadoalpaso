
// funciones para el listado de producto

function btnAlmacen (){    
    const almacen = document.getElementById(`almacen`);
    if(listadoAlmacen){
        almacen.addEventListener("click", listadoAlmacen)

      }
            almacen.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            
  })
}  

function btnBebidas (){
    
    if(bebidas){
        const bebidas = document.getElementById(`bebidas`);
        bebidas.addEventListener("click", listadoBebidas)
        bebidas.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
        })
    }
   
}
function btnpanaderia (){
    const panaderia = document.getElementById(`panaderia`);
    
   if(panaderia){
        panaderia.addEventListener("click", listadoPanaderia)
        panaderia.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            
  })
   }
}  
function btnfiambres (){  
    const fiambres = document.getElementById(`fiambres`);
    if(fiambres){
        fiambres.addEventListener("click", listadoFiambres)
        fiambres.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            
  })
    }
}
function btnperfumeria (){
    const perfumeria = document.getElementById(`perfumeria`);
    
    if(perfumeria){
        perfumeria.addEventListener("click", listadoPerfumeria)
        perfumeria.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            
  })
    }
}
function btnregaleria (){
    const regaleria = document.getElementById(`regaleria`);
    
    if(regaleria){
        regaleria.addEventListener("click", listadoRegaleria)
        regaleria.addEventListener("click", () =>{
            Toastify({
                text: "cargando",
                duration: 500,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "blue",
                },
                onClick: function(){} // Callback after click
            }).showToast();
            
  })
    }
}
function btnListaApi (){
  const lista = document.getElementById("listaApi");
  
  if(lista){
    
      lista.addEventListener("click", pedirproductoApi)
      
      lista.addEventListener("click", () =>{
          Toastify({
              text: "cargando",
              duration: 500,
              destination: "https://github.com/apvarun/toastify-js",
              newWindow: true,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "blue",
              },
              onClick: function(){} // Callback after click
          }).showToast();
          
})
  }
}


