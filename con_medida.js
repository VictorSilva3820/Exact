function me(){
	var aux = document.getElementById('opcao').value;

 	switch (aux){
 		case 'km':
	 		var valor = parseFloat(document.metro.m.value);
	 		valor = valor / 1000;
	 		document.getElementById('result2').value = valor+" km";
 		break;

 		case 'hm':
 			var valor = parseFloat(document.metro.m.value);
	 		valor = valor / 100;
	 		document.getElementById('result2').value = valor+" hm";

		break;

		case 'dam':
			var valor = parseFloat(document.metro.m.value);
	 		valor = valor / 10;
	 		document.getElementById('result2').value = valor+" dam";

		break;

		case 'dc':
			var valor = parseFloat(document.metro.m.value);
	 		valor = valor * 10;
	 		document.getElementById('result2').value = valor+" dm";

		break;

		case 'cm':
			var valor = parseFloat(document.metro.m.value);
	 		valor = valor * 100;
	 		document.getElementById('result2').value = valor+" cm";

		break;

		case 'mm':
			var valor = parseFloat(document.metro.m.value);
	 		valor = valor * 1000;
	 		document.getElementById('result2').value = valor+" mm";

		break;

		default:
			alert("Inválido");
	}
}