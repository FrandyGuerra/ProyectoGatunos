$(document).ready(function () {


    jQuery.validator.addMethod("letras", function(value, element) {
        return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
      }, "Debe tener solo letras");
  
  
  $("#formulario").validate({
  rules: {
    rut: {
      required: true,
      number: true,
      minlength: 8,
      maxlength: 8,
    },
    digito: {
      required:   function () {
        if (
          $("#digito").val() == "k" ||
          $("#digito").val() <= 9 &&
          $("#digito").val() >= 0
        ) {
            let mensaje = document.getElementById("error");
            if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
                
                mensaje.innerHTML = "";
            }
        }else {
            let mensaje = document.getElementById("error");
          mensaje.innerHTML = "Ingrese un digito del 0 a el 9 o una letra k";
        }
    },
      minlength: 1,
      maxlength: 1,
    },
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 50,
      letras: true,
    },
    correo: {
      required: true,
      email:true
    },
    telefono: {
      number:true
    }
  },
  messages: {
    rut: {
      required: "Ingrese su rut",
      minlength: "Debe contener 8 digitos numericos sin espacios",
      maxlength: "Solo debe contener 8 digitos númericos sin espacios",
      number: "Solo debe contener numeros sin espacios",
    },
    digito: {
      required: "Agregue DV",
      minlength: "Debe agregar su digito verificador",
      maxlength: "Solo debe contener 1 caracter",
    },
    nombre: {
      required: "Ingrese su nombre",
      minlength: "Debe tener al menos 3 caracteres",
      maxlength: "No puede tener mas de 50 caracteres",
      
    },
    correo: {
      required: "Ingrese un correo",
      email:"Debe cumplir con un formato valido"
    },
    telefono: {
      number:"Debe colocar solo numeros"
    }
    
  },
  submitHandler: function () {
    if (
      $("#digito").val() == "k" ||
      $("#digito").val() <= 9 &&
      $("#digito").val() >= 0
    ) {
        let mensaje = document.getElementById("error");
        if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
            
            mensaje.innerHTML = "";
        }
    } else {
        let mensaje = document.getElementById("error");
      mensaje.innerHTML = "Ingrese un digito del 0 a el 9 o una letra k";
    }
  }
  })
  });
  