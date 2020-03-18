function Retangulo(){
	var b = parseFloat(document.retangulo.b.value);
	var h = parseFloat(document.retangulo.h.value);
	var Aret;

	Aret = b * h;

	document.getElementById('Aret').value = Aret;
}

function Quadrado(){
	var l = parseFloat(document.quadrado.lado.value);
	var Aqua;

	Aqua = l * l;

	document.getElementById('Aqua').value = Aqua;
}

function Triangulo(){
	var b = parseFloat(document.triangulo.b.value);
	var h = parseFloat(document.triangulo.h.value);
	var Atri;

	Atri = (b * h)/2;

	document.getElementById('Atri').value = Atri;
}

function Trapezio(){
	var B = parseFloat(document.trapezio.B.value);
	var b = parseFloat(document.trapezio.b.value);
	var h = parseFloat(document.trapezio.h.value);
	var Atrap;

	Atrap = (B * b/2)*h;

	document.getElementById('Atrap').value = Atrap;
}