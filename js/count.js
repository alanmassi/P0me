var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
			
var x = setInterval(function() {
    
    // obtengo la fecha y la hora
    var now = new Date().getTime();
    
    //actualizar la cuenta cada 1 segundo
    // distancia entre la fecha de al cuenta y la actual
    var distance = countDownDate - now;

    // calculo el tiempo
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // muestra el resultado en #demo
    document.getElementById("dias").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("seg").innerHTML = seconds;

    // si se termina la cuenta regresiva se muestra el mensaje 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Ya comienza";
    }
}, 1000);