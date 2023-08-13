let datosIngresados = [];
let precioFinal = 0;

function obtenerDatos() {

    datosIngresados = [
        {
            nombre: "Servidores",
            precio: 1000,
            cantidad: parseInt(document.getElementById("servidores").value),
        },
        {
            nombre: "PC",
            precio: 500,
            cantidad: parseInt(document.getElementById("pcs").value),
        },
        {
            nombre: "Impresoras",
            precio: 250,
            cantidad: parseInt(document.getElementById("impresoras").value),
        },
        {
            nombre: "Camaras de Seguridad",
            precio: 5000,
            cantidad: 0,
            incluir: document.getElementById("camarasSeguridad").checked,
        },
        {
            nombre: "Servidores",
            precio: 3000,
            cantidad: 0,
            incluir: document.getElementById("telefonia").checked,
        },

    ]

    for ( i = 0; i <= datosIngresados.length; i++) {
        if (datosIngresados[i]?.incluir) {
            datosIngresados[i].cantidad = 1;
            datosIngresados[i].incluir = "SI";
        } else if (datosIngresados[i]?.incluir == false) {
            datosIngresados[i].incluir = "NO";
        }
    }
        
}

function calcularPrecio() {

    const subtotales = datosIngresados.map((elemento) => { return {
        nombre: elemento.nombre,
        precioTotal: elemento.precio * elemento.cantidad,
    }});

    precioFinal = subtotales.reduce((acumulador, servicio) => { return acumulador + servicio.precioTotal }, 0);

}

function mostrarPresupuesto() {
    const presupuestoAbono = document.getElementById("presupuestoAbono");

    presupuestoAbono.innerHTML = `
    <ul>
        <li>Cantidad de Servidores: ${datosIngresados[0].cantidad} </li>
        <li>Cantidad de Pcs: ${datosIngresados[1].cantidad} </li>
        <li>Cantidad de Impresoras: ${datosIngresados[2].cantidad} </li>
        <li>Incluir mantenimiento de Camaras de Seguridad: ${datosIngresados[3].incluir} </li>
        <li>Incluir mantenimiento de Telefonía: ${datosIngresados[4].incluir} </li>
    </ul>
    <p>El Presupuesto de su abono mensual de Mantenimiento Informatico es de $ ${precioFinal}</p>
    `
}

function presupuestar() {

    obtenerDatos();
    calcularPrecio();
    mostrarPresupuesto();

}

document.getElementById("botonPresupuestar").addEventListener("click", presupuestar);

