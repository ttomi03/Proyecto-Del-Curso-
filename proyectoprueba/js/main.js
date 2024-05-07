let ofertas = [
    {
        id: 1,
        nombre: "CELULARES", 
        imagen: "./img/celular.png"
    },
    {
        id: 2,
        nombre: "ELECTRODOMESTICOS", 
        imagen: "./img/heladerae.png"
    }, 
    {
        id: 3,
        nombre: "ZAPATILLAS", 
        imagen: "./img/jordan.png"
    }
]

cad= ``
for (let produc of ofertas){

    cad= cad + `
    <div class="ofertas-1">
            <div class="ofertasImg">
                <img src=${produc.imagen} alt="">
            </div>
            <div class="ofertastxt">
                <h3>${produc.nombre}</h3>
                <a href="#" class="btn-2">INFORMACION</a>
            </div>
        </div>
        `
}

document.querySelector (".ofertas").innerHTML=cad

const nav= document.querySelector('.menu')

window.addEventListener('scroll', function (){
    nav.classList.toggle ('active', window.scrollY > 0);
})