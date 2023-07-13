function Sumar(btn){
    var valor = parseInt(btn.previousElementSibling.innerHTML);
    valor += 1;
    btn.previousElementSibling.innerHTML = valor;
}

function Restar(btn){
    var valor = parseInt(btn.nextElementSibling.innerHTML);
    if (valor <= 0) {
        valor = 0;
        btn.nextElementSibling.innerHTML = valor;
    }else {
        valor -= 1;
        btn.nextElementSibling.innerHTML = valor;
    }
}

function Submit(){
    var inputs = document.querySelectorAll(".section__input");
    var invalidos = [];
    for(a=0;a<inputs.length;a++){
        var campito = document.getElementById(inputs[a].id);
        campito.classList.remove("invalido");
    }

    for(i = 0; i < inputs.length;i++){
        if(inputs[i].value == ""){
            invalidos.push(inputs[i].id);
        }
    }

    if (invalidos.length > 0) {
        for(e=0;e<invalidos.length;e++){
            var campo = document.getElementById(invalidos[e]);
            campo.classList.add("invalido");
        }
        swal.fire("¡Error!", "No todos los campos han sido diligenciados", "error");
    }else{
        swal.fire("¡Correcto!", "Todos los campos fueron diligenciados", "success");
    }
}

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })