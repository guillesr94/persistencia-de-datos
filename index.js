// - Crea una variable con tu nombre
let nombre = "Guillermo"

// - Crea una variable con tu apellido
let apellido = "Suarez"

// - Crea un objeto con tu nombre y tu apellido
let nombreCompleto={nombre,apellido}

// - Almacena el objeto anterior en la SessionStorage
// console.log(nombreCompleto)
sessionStorage.setItem("apellidoNombre",JSON.stringify(nombreCompleto))
// console.log(JSON.parse(sessionStorage.getItem("apellidoNombre")))
// - Almacena el objeto anterior en la LocalStorage

localStorage.setItem("fullname",JSON.stringify(nombreCompleto))
console.log(JSON.parse(localStorage.getItem("fullname")))

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = "nombre = Guille"
document.cookie = "nombreCaducidad=nombre; expires=" + new Date(2022,7,3,103200).toUTCString()

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado