
    

	document.addEventListener('mouseover', function(event){	 //detecto el movimiento del mouse.
				if(MouseEvent){
					const x = event.clientX;
					const y = event.clientY;				
					const ejeX = x /20;//arreglado
					const ejeY = y /20;				
					document.getElementById('imageMove').animate([		//traigo la clase del img			
							{
								transform: 'translate('+ejeX+'px,'+ejeY+'px)'	//Donde comienza 
							},
							{
								transform: 'translate('+ejeX+'px,'+ejeY+'px)'	//lo traslado por el eje x con el valor almacenado en meteoro
							}
							] , {				
								easing: 'linear',						//trayecto recto			
								fill: 'forwards'					// para que no vuelva a la posicion inicial
							});	
				}
	});
