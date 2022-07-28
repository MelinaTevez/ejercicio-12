/*******************************************************/
/*  Primer Enunciado de la Consigna                    */
/*******************************************************/

console.log(document.querySelector('title').innerText)

/*******************************************************/
/*  Tercer Enunciado de la consigna                    */
/*******************************************************/

let primerNombre = document.querySelector('.primerNombre').innerText
let segundoNombre = document.querySelector('.segundoNombre').innerText
let primerApellido = document.querySelector('.primerApellido').innerText
let segundoApellido = document.querySelector('.segundoApellido').innerText
let primerNombre2 = document.querySelector('.primerNombre2').innerText
let segundoNombre2 = document.querySelector('.segundoNombre2').innerText
let primerApellido2 = document.querySelector('.primerApellido2').innerText
let segundoApellido2 = document.querySelector('.segundoApellido2').innerText


console.log(`-----
Integrante 1: "${primerNombre} ${segundoNombre} ${primerApellido.toUpperCase()} ${segundoApellido.toUpperCase()}"
Integrante 2: "${primerNombre2} ${segundoNombre2} ${primerApellido2.toUpperCase()} ${segundoApellido2.toUpperCase()}"
-----`)

/*******************************************************/
/*  Cuarto Enunciado de la consigna                    */
/*******************************************************/

function comparacion() {
    window.confirm("¿Quieres comparar los apellidos?")
    if(primerNombre == primerNombre2){
      alert('si son iguales')
    }else if(segundoNombre == segundoNombre2){
      alert('si son iguales')
    }else if (primerApellido == segundoApellido2){
      alert('si son iguales')
    }else if(segundoApellido == segundoApellido2){
    }else {
      alert('No hubo coincidencias')
    }
  }
  
  console.log("No hubo coincidencias")
  comparacion()

/*******************************************************/
/*  Quinto Enunciado de la consigna                    */
/*******************************************************/

let integrante1 = function () {
    return`"${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}"`
}
  
  integrante1() 
  console.log('Integrante 1: ' + integrante1())

  let integrante2 = function () {
    return`"${primerNombre2} ${segundoNombre2} ${primerApellido2}"`
}
  integrante2() 
  console.log('Integrante 2: ' + integrante2()) 

/*******************************************************/
/*      ¡¡¡ BONUS !!!                                  */
/*******************************************************/
/* ES RECOMENTABLE COMENTAR LOS PUNTOS ANTERIORES ANTES DE ULTILIZAR EL BONUS */


/* let primerNombre = 'Gabriel'
let segundoNombre = 'Alejandro'
let primerApellido = 'Torres'
let segundoApellido = 'Mora'
let primerNombre2 = 'Melina'
let segundoNombre2 = 'Rocio'
let primerApellido2 = 'Tevez'
let segundoApellido2 = ''

let btn1 = document.getElementById('btn-1')

btn1.addEventListener('click', function (){
  document.getElementById('primer-nombre').value = primerNombre
  document.getElementById('segundo-nombre').value = segundoNombre
  document.getElementById('primer-apellido').value = primerApellido
  document.getElementById('segundo-apellido').value = segundoApellido
})

let btn2 = document.getElementById('btn-2')

btn2.addEventListener('click', function obtenerIngresante2(){
  document.getElementById('primer-nombre-2').value= primerNombre2
  document.getElementById('segundo-nombre-2').value= segundoNombre2
  document.getElementById('primer-apellido-2').value= primerApellido2
  document.getElementById('segundo-apellido-2').value= segundoApellido2
})

console.log(`-----
Integrante 1: "${primerNombre} ${segundoNombre} ${primerApellido.toUpperCase()} ${segundoApellido.toUpperCase()}"
Integrante 2: "${primerNombre2} ${segundoNombre2} ${primerApellido2.toUpperCase()} ${segundoApellido2.toUpperCase()}"
-----`) 

function comparacion() {
    window.confirm("¿Quieres comparar los apellidos?")
    if(primerNombre == primerNombre2){
      alert('si son iguales')
    }else if(segundoNombre == segundoNombre2){
      alert('si son iguales')
    }else if (primerApellido == segundoApellido2){
      alert('si son iguales')
    }else if(segundoApellido == segundoApellido2){
    }else {
      alert('No hubo coincidencias')
    }
  }
  
  console.log("No hubo coincidencias")
  comparacion()
  
  */