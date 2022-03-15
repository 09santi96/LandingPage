//get the elements
const navbar = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//toggle the navbar menu  on click Open/close
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle('nav-background');
    menu.classList.toggle('nav-toggle');
});
//-----------------default-----------------//
document.querySelector('#glassPanel').innerHTML = `
<div class="glass">
    <h1 class="h-glass">SYAD</h1>
        <div> 
            <h4>SOPORTE Y ASISTENCIA DIGITAL S.A</h4>
            <p>
                Acompañamos a nuestros clientes en su transformación digital ofreciendo servicios, 
                productos y soluciones de gestión documental que adaptamos a las necesidades de cada organizacion, 
                brindando un servicio integral centralizado y óptimo de custodia, 
                para acelerar la transformación digital y permitirles maximizar el valor de su información.
            </p>
        </div>
</div>
    <h1 class="h-regular">SA</h1>
`

//----------------------------------//
let BtnInicio = document.querySelector('#btnInicio');
let BtnServicios = document.querySelector('#btnServicios');
let BtnTecnologia = document.querySelector('#btnTecnologia');
let BtnPreguntas = document.querySelector('#btnPreguntas');
let BtnCalidad = document.querySelector('#btnCalidad');
let BtnContacto = document.querySelector('#btnContacto');

let GlassPanel = document.querySelector('#glassPanel');
let NavContainer = document.querySelector('#navContainer');

//----------------Inicio----------------------
BtnInicio.addEventListener('click', () => {
    GlassPanel.innerHTML = `
    <div class="glass">
    <h1 class="h-glass">SYAD</h1>
        <div> 
            <h4>SOPORTE Y ASISTENCIA DIGITAL S.A</h4>
            <p>
                Acompañamos a nuestros clientes en su transformación digital ofreciendo servicios, 
                productos y soluciones de gestión documental que adaptamos a las necesidades de cada organizacion, 
                brindando un servicio integral centralizado y óptimo de custodia, 
                para acelerar la transformación digital y permitirles maximizar el valor de su información.
            </p>
        </div>
    </div>
    <h1 class="h-regular">SA</h1>
    `
});
//----------------Servicios----------------------

BtnServicios.addEventListener('click', () => {
    GlassPanel.innerHTML = `
    <div class="glassServicios">
        <h1>SERVICIOS</h1>
            <div> 
                <h4>SOPORTE Y ASISTENCIA DIGITAL S.A</h4>
                <p>
                    
            </div>
    </div>
    `;
});