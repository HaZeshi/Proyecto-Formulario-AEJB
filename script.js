const formulario = document.querySelector("#datosCliente")

formulario.addEventListener( "submit", datosCliente )

function datosCliente(e){
    e.preventDefault();

///invocacion por id///
    const email = document.querySelector ("#clienteEmail").value
    const empresa = document.querySelector ("#empresa").value
    const nombre = document.querySelector ("#nombre").value
    const apellido = document.querySelector ("#apellido").value
    const telefono = document.querySelector ("#telefono").value
    const giro = document.querySelector ("#giro").value

///obtener Respuestas///
    const respuestaEmail = document.getElementById ("datosEmail");
    const respuestaEmpresa = document.getElementById ("datosEmpresa");
    const respuestaNombre = document.getElementById ("datosNombre");
    const respuestaApellido = document.getElementById ("datosApellido");
    const respuestaTelefono = document.getElementById ("datosTelefono");
    const respuestaGiro = document.getElementById ("datosGiro");

///respuestas compuestas///
    respuestaEmail.textContent = `Email: ${email}`
    respuestaEmpresa.textContent = `Empresa: ${empresa}`
    respuestaNombre.textContent = `Nombre: ${nombre}`
    respuestaApellido.textContent = `Apellido ${apellido}` 
    respuestaTelefono.textContent = `Telefono:${telefono} `
    respuestaGiro.textContent = `Giro: ${giro} `


}

const datosBloqueI = document.querySelector("#datosBloqueI")

datosBloqueI.addEventListener("submit", bloqueUnoRs )

function bloqueUnoRs(a){
    a.preventDefault();

    let num1 = document.querySelector("#pregUnoA").value
    let num2 = document.querySelector("#pregDosA").value
    let num3 = document.querySelector("#pregTresA").value
    let num4 = document.querySelector("#pregCuatroA").value
    let num5 = document.querySelector("#pregCincoA").value
    let num6 = document.querySelector("#pregSeisA").value


    let suma1 = parseInt(num1) + parseInt(num2) + parseInt(num3) 
    + parseInt(num4) + parseInt(num5) + parseInt(num6);

    let total1 = suma1; 


    const respuestaTotal1 = document.getElementById("respuestaBloque1")

    respuestaTotal1.textContent = `RESULTADO: ${total1}`
}


const datosBloqueII = document.querySelector("#datosBloqueII")

datosBloqueII.addEventListener("submit", bloqueDosRs )

function bloqueDosRs(b){
    b.preventDefault();

    let num7 = document.querySelector("#pregUnoB").value
    let num8 = document.querySelector("#pregDosB").value
    let num9 = document.querySelector("#pregTresB").value

    let suma2 = parseInt(num7) + parseInt(num8) + parseInt(num9);

    total2 = suma2;
    
    const respuestaTotal2 = document.getElementById("respuestaBloque2")

    respuestaTotal2.textContent = `RESULTADO ${total2}`
}  

const datosBloqueIII = document.querySelector("#datosBloqueIII");

datosBloqueIII.addEventListener("submit",bloqueTresRs)

function bloqueTresRs(c){
    c.preventDefault();

    let num10 = 0; 
    let num11 = 0; 
    let num12 = 0; 
    let num13 = 0; 

    if (document.getElementById(`pregUnoCA`).checked){
        num10 = 10;
    }
    if (document.getElementById(`pregUnoCB`).checked){
        num11 = 10;
    }
    if ( document.getElementById(`pregUnoCC`).checked){
        num12 = 10;
    } 

    let num14 = document.querySelector("#pregDosC").value
    let num15 = document.querySelector("#pregTresC").value
    let num16 = document.querySelector("#pregCuatroC").value
    let num17 = document.querySelector("#pregCincoC").value

    let suma3 = parseInt(num10) + parseInt(num11) + parseInt(num12) + parseInt(num13) 
    + parseInt(num14) + parseInt(num15) + parseInt(num16) + parseInt(num17);

    total3 = suma3;

    console.log(num10)

    const respuestaTotal3 = document.getElementById("respuestaBloque3")
    
    respuestaTotal3.textContent = `RESULTADO ${total3}`
}

const datosBloqueIV =document.querySelector("#datosBloqueIV");

datosBloqueIV.addEventListener("submit",bloqueCuatroRs);

function bloqueCuatroRs (d){
    d.preventDefault();

    let num18 = document.querySelector("#pregUnoD").value
    let num19 = document.querySelector("#pregDosD").value
    let num20 = document.querySelector("#pregTresD").value


    let suma4 = parseInt(num18) + parseInt(num19) + parseInt(num20) 

    let total4 = suma4; 


    const respuestaTotal4 = document.getElementById("respuestaBloque4")

    respuestaTotal4.textContent = `RESULTADO: ${total4}`
}
