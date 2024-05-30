const registro = document.querySelector("button");

document.getElementById('registro-form').addEventListener('submit', 
(event) =>{ 
    event.preventDefault();
    registrar();
});


function registrar(){
    let texto = '';
    texto += "Nombre: " + document.getElementById("nombre").value + "\n";
    texto += "E-mail: " + document.getElementById("email").value + "\n";

    const grupo =document.getElementsByName("area-interes");
    grupo.forEach((opcion)=>{
        if(opcion.checked){
            texto += "Área de Interés: " + opcion.value;
        }
    });

    texto+= "\n";

    texto += "Experiencia: " + document.getElementById("experiencia").value;
    confirm("Datos del Usuario\n" + texto);
}

