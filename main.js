
(function () {
    'use strict'


    var color1 = "#"
    var letrasNumeros = "0123456789ABCDEF";

    var color2 = "#"


    for (var i = 0; i < 6; i++) {
        color1 = color1 + letrasNumeros[Math.floor(Math.random() * 16)];
    }

    for (var i = 0; i < 6; i++) {
        color2 = color2 + letrasNumeros[Math.floor(Math.random() * 16)];
    }
    console.log(color2);

    console.log(color1);
    var gradient = ""
    gradient = "repeating-linear-gradient(-45deg, " + color1 + " 0," + color1 + " 50%," + color2 + " 0," + color2 + " 100%)"


    console.log(gradient);

    document.body.style.background = gradient;

    var answer = document.getElementById("hex")
    console.log(hex);

    var save = document.getElementById("save")
    console.log(save);

    function validarForm(hex) {
        // Si todos los campos estan completos esto regresara un true
        // en caso contrario regresara un false 
        if (hex.value !== "") {
            return true
            

        } else {
            return false
        }

    }

    var right = document.querySelector('.right');
    console.log(right)
    right.innerHTML = "";

    var wrong = document.querySelector('.wrong')
    console.log(wrong);
    wrong.innerHTML = "";

    var ycolor = document.querySelector('.yColor');
    ycolor.innerHTML = "";

    var circle = document.querySelector('.circle');
    circle.innerHTML = "";
    



    save.addEventListener('click', function () {
        
        if (validarForm(hex)) {
        console.log(hex.value);
        
            if("#"+hex.value == color1){
                wrong.innerHTML = "";
                right.innerHTML = "Esos es todo papi";

            }

            else if("#"+hex.value == color2){
                wrong.innerHTML = "";
                right.innerHTML = "Esos es todo papi";

            }

            

        else{
            right.innerHTML = "";
            wrong.innerHTML = "Wrong Answer your color: " + "#"+hex.value;
            circle.style.background = '#' + hex.value;
            circle.style.border = "thick solid #0000FF";
        }



        } else {
            alert('Favor de llenar todos los datos ')
        }

    })






	/*document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color"; */
}())





