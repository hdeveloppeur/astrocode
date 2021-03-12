function check_astro(){
	var jour = document.getElementById("id_jour").value;
	var x = document.getElementById("id_mois").selectedIndex;
	var y = document.getElementById("id_mois").options;
	var mois = y[x].index;
	var annee = document.getElementById("id_annee").value;
	
	if (isNaN(jour)) {
		alert("Le jour doit être un chiffre ou un nombre. (exemple: 3, 11, 26...)");
	  }else if(jour == ""){
		alert("Entrer votre jour de naissance.");
	}else if(jour <= 0 || jour > 31){
		alert("Le jour de naissance doit être compris entre 1 et 31 !");
	}else if(mois == ""){
		alert("Entrer votre mois de naissance.");
	}else if(isNaN(annee)){
		alert("L'année doit être un nombre. (exemple: 1950, 1951, 1952...)");
	}else if(annee == ""){
		alert("Entrer votre année de naissance.");
	}else if(annee < 1920 || annee >= 2021){
		alert("L'année de naissance est impossible !!");
	}else if(jour >= 21 && mois == 3 || jour <= 30 && mois == 3) {
	document.getElementById("Validation").innerHTML = ("Vous êtes Bélier du 1er décan");
	}else if(jour >= 31 && mois == 3 || jour <= 9 && mois == 4) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Bélier du 2ème décan");
	}else if(jour >= 10 && mois == 4 || jour <= 20 && mois == 4) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Bélier du 3ème décan");
	}else if(jour >= 21 && mois == 4 || jour <= 30 && mois == 4) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Taureau du 1er décan");
	}else if(jour >= 1 && mois == 5 || jour <= 10 && mois == 5) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Taureau du 2ème décan");
	}else if(jour >= 11 && mois == 5 || jour <= 20 && mois == 5) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Taureau du 3ème décan");
	}else if(jour >= 21 && mois == 5 || jour <= 30 && mois == 5) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Gémeaux du 1er décan");
	}else if(jour >= 31 && mois == 5 || jour <= 10 && mois == 6) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Gémeaux du 2ème décan");
	}else if(jour >= 11 && mois == 6 || jour <= 20 && mois == 6) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Gémeaux du 3ème décan");
	}else if(jour >= 21 && mois == 6 || jour <= 30 && mois == 6) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Cancer du 1er décan");
	}else if(jour >= 1 && mois == 7 || jour <= 11 && mois == 7) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Cancer du 2ème décan");
	}else if(jour >= 12 && mois == 7 || jour <= 21 && mois == 7) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Cancer du 3ème décan");	
	}else if(jour >= 22 && mois == 7 || jour <= 1 && mois == 8) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Lion du 1er décan");	
	}else if(jour >= 2 && mois == 8 || jour <= 11 && mois == 8) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Lion du 2ème décan");
	}else if(jour >= 12 && mois == 8 || jour <= 22 && mois == 8) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Lion du 3ème décan");
	}else if(jour >= 23 && mois == 8 || jour <= 1 && mois == 9) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Vierge du 1er décan");
	}else if(jour >= 2 && mois == 9 || jour <= 11 && mois == 9) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Vierge du 2ème décan");
	}else if(jour >= 12 && mois == 9 || jour <= 22 && mois == 9) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Vierge du 3ème décan");
	}else if(jour >= 23 && mois == 9 || jour <= 2 && mois == 10) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Balance du 1er décan");
	}else if(jour >= 3 && mois == 10 || jour <= 12 && mois == 10) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Balance du 2ème décan");
	}else if(jour >= 13 && mois == 10 || jour <= 22 && mois == 10) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Balance du 3ème décan");
	}else if(jour >= 23 && mois == 10 || jour <= 1 && mois == 11) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Scorpion du 1er décan");
	}else if(jour >= 2 && mois == 11 || jour <= 11 && mois == 11) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Scorpion du 2ème décan");
	}else if(jour >= 12 && mois == 11 || jour <= 21 && mois == 11) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Scorpion du 3ème décan");
	}else if(jour >= 22 && mois == 11 || jour <= 1 && mois == 12) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Sagittaire du 1er décan");
	}else if(jour >= 2 && mois == 12 || jour <= 11 && mois == 12) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Sagittaire du 2ème décan");
	}else if(jour >= 12 && mois == 12 || jour <= 20 && mois == 12) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Sagittaire du 3ème décan");
	}else if(jour >= 21 && mois == 12 || jour <= 30 && mois == 12) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Capricorne du 1er décan");
	}else if(jour >= 31 && mois == 12 || jour <= 9 && mois == 1) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Capricorne du 2ème décan");
	}else if(jour >= 10 && mois == 1 || jour <= 20 && mois == 1) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Capricorne du 3ème décan");
	}else if(jour >= 21 && mois == 1 || jour <= 30 && mois == 1) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Verseau du 1er décan");
	}else if(jour >= 31 && mois == 1 || jour <= 8 && mois == 2) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Verseau du 2ème décan");
	}else if(jour >= 9 && mois == 2 || jour <= 18 && mois == 2) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Verseau du 3ème décan");
	}else if(jour >= 19 && mois == 2 || jour <= 27 && mois == 2) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Poisson du 1er décan");
	}else if(jour >= 28 && mois == 2 || jour <= 9 && mois == 3) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Poisson du 2ème décan");
	}else if(jour >= 10 && mois == 3 || jour <= 20 && mois == 3) {
		document.getElementById("Validation").innerHTML = ("Vous êtes Poisson du 3ème décan");
	}
}

function rejouer(){
	document.getElementById("submit_rejouer");
	location.href = "file:///C:/Users/Nitro/Documents/CODAGES/ASTRO%20CODE/public/astrocode.html";
}




