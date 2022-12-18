//incrementar contador
let incre = 0
const spanNombreContador = document.getElementById("nombre-contador")
const spanContador = document.getElementById("contador")
const botonIncre = document.getElementById("boton-incre")
botonIncre.addEventListener("click", ()=>{
    spanContador.innerHTML = incre++
    spanNombreContador.innerHTML = "incrementando"
})

//decrementar contador
const botonDecre = document.getElementById("boton-decre")
botonDecre.addEventListener("click", ()=>{
    spanContador.textContent = incre--
    spanNombreContador.textContent = "decrementando"
})

//random rival
const botonRival = document.getElementById("boton-rival")
botonRival.addEventListener("click",()=>{
    const max =3
    const min = 1   
    const generateRival = Math.floor(Math.random()*(max-min+1) + min)
    let rival
    rival = (generateRival===1) ? rival ="tierra🌱"
    : (generateRival===2) ? rival ="agua💧"
    : (generateRival===3) ? rival ="fuego🔥" : "ERROR"
    
    document.getElementById("rival-random").innerHTML = rival
})

//redirect signin button
const botonSigin = document.getElementById("boton-page-signin")
botonSigin.addEventListener("click", ()=>{window.location.replace("signin.html")})

