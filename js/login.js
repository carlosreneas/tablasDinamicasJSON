if(localStorage.getItem("nombre")!=null){
	window.location="tabladinamica.html";
}

document.querySelector('#enviar').addEventListener('click', function() { 
		const xhttp = new XMLHttpRequest();

		xhttp.open('GET', 'https://www.datos.gov.co/resource/swfn-e33q.json');

		xhttp.send();
		xhttp.onreadystatechange = function(){
		console.log(this.readyState);
		console.log(this.status);
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			let datos = JSON.parse(this.responseText);

			for(let item of datos) {
				user = document.querySelector("#username").value;
				pass = document.querySelector("#password").value;
				console.log(user);

				if(item.correoelectronico == user) {
					if(item.telefono == pass) {
						console.log(true);
						localStorage.setItem("nombre",item.nombre);
						localStorage.setItem("usuario",user);
						window.location="tabladinamica.html";
					}
				}
			}

			document.querySelector("#alerta").innerHTML = "Usuario no encontrado";
			//document.querySelector("#alerta").display = block;
				
			
		}
	}
	});