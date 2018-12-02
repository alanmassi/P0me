document.addEventListener('mouseover', function(event){	 //detecto el movimiento del mouse.
				if(MouseEvent){
					const x = event.clientX;
					const y = event.clientY;
					
					const ejeX = x *0.10;
					const ejeY = y *0.10;
					console.log(x);
					if(x)
					
					document.getElementById('imageMove').animate([		//traigo la clase del img
				
							{
								transform: 'translate('+ejeX+'px,'+ejeY+'px)'	//Donde comienza 
							},
							
							{
								transform: 'translate('+ejeX+'px,'+ejeY+'px)'	//lo traslado por el eje x con el valor almacenado en meteoro
							}
							] , {
								
								delay: 100,								//le agrego delay para que no sea tan brusco			
								easing: 'linear',						//trayecto recto			
								fill: 'forwards',						// para que no vuelva a la posicion inicial
								endDelay: 100							//le agrego delay para que no sea tan brusco
							});	
				}
});