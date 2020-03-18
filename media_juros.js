function Media() {

	var nota1 = parseFloat(document.media.valor1.value);
	var nota2 = parseFloat(document.media.valor2.value);
	var nota3 = parseFloat(document.media.valor3.value);
	var media;

	media = (nota1 + nota2 + nota3)/3;

	document.getElementById('media').value = media;

	if (media >= 0 && media < 6){
		alert("O aluno foi, Reprovado"); 
	}
	else if (media >= 6 && media <= 10){
		alert("O aluno foi, Aprovado");
	}
}

function Juros() {

	var c = parseFloat(document.jurosC.prin.value); // p = principal(capital inicial)
	var i = parseFloat(document.jurosC.taxa.value); // i = taxa de juror
	var t = parseFloat(document.jurosC.periodo.value); // n = periodo que o principal P foi aplicado
	var j;// m = montante
	i = i/100;
	j = c * Math.pow((1+i),t);

	document.getElementById('juros').value = j.toFixed(2);

}