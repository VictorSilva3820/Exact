function Linear(){
	var lini = parseFloat(document.linear.cil.value);
	var clin = parseFloat(document.linear.cdl.value);
	var temL = parseFloat(document.linear.vtl.value);

	var vcom; // variação de comprimento

	vcom = lini * clin * temL;

	document.getElementById('deltaL').value = vcom;
}

function Superficial(){
	var Cini = parseFloat(document.super.cis.value);
	var Cdil = parseFloat(document.super.cds.value);
	var Vtem = parseFloat(document.super.vts.value);

	var Vcom; // variação de comprimento

	Vcom = Cini * (Cdil*2) * Vtem;

	document.getElementById('superficial').value = Vcom;
}

function Volumetrica(){
	var Cini = parseFloat(document.volu.civ.value);
	var Cdil = parseFloat(document.volu.cdv.value);
	var Vtem = parseFloat(document.volu.vtv.value);

	var Vcom; // variação de comprimento

	Vcom = Cini * (Cdil*3) * Vtem;

	document.getElementById('volumetrica').value = Vcom;
}