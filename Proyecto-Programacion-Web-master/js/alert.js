function validar(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    email = document.getElementById("email").value;
    contraseña = document.getElementById("contraseña").value;
    console.log(nombre);
    console.log(apellido);
    console.log(direccion);
    console.log(email);
    console.log(contraseña);

    if(nombre.length == 0){
        alert("El campo de nombre esta vacio");
    }

    if(apellido.length == 0){
        alert("El campo de apellido esta vacio");
    }

    if(direccion.length == 0){
        alert("El campo de direccion esta vacio");
    }

    if(email.length == 0){
        alert("El campo de email esta vacio");
    }

    if(contraseña.length == 0){
        alert("El campo de contraseña esta vacio");
    }




}