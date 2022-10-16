let ticketPrice = 200
let total = document.getElementById('total')
const borrar = document.getElementById('borrar')
const resumen = document.getElementById('resumen')


borrar.addEventListener("click", function borrar() {
    total.innerHTML= ` Total a Pagar: $`
})


function mostrar(categoria) {
    let cantidad = document.getElementById("cantidad").value
    if (cantidad < 1 || cantidad > 20 ) {
        document.getElementById("error").innerHTML = `<div>Cantidad  <span class="text-danger  fw-bold">Debe Ingresar un numero mayor a 0 y menor a 20</span></div>`
    } else {
        document.getElementById("error").innerHTML = `Cantidad`
        if (categoria == 1) {
            precioConDescuento = ticketPrice*0.20*cantidad
            total.innerHTML= ` Total a Pagar: $ ${precioConDescuento}`
        } else if (categoria == 2){
            precioConDescuento = ticketPrice*0.50*cantidad
            total.innerHTML= ` Total a Pagar: $ ${precioConDescuento}`
        } else if (categoria == 3) {
            precioConDescuento = ticketPrice*0.85*cantidad
            total.innerHTML= ` Total a Pagar: $ ${precioConDescuento}`  
        } else {
            precioConDescuento = ticketPrice*0.20*cantidad
            total.innerHTML= ` Total a Pagar: $ ${precioConDescuento}`
        }
    }
}



resumen.addEventListener("click", function resumen(event){
    event.preventDefault()
    mostrar()
})


