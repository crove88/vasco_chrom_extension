$(document).ready(function() {
	var x = new XMLHttpRequest();
	x.open('GET', 'http://demotoken.vasco.com/response.asp?typeRO=true');
	x.onreadystatechange  = function() {
		if (x.readyState == 4) {
			token = x.responseText.substring(5);
			document.getElementById("token").innerText  = token;
			clipboard.copy(token);
		} else { document.getElementById("token").innerText  = "error: cargar de vuelta"; }
	}; 
	x.send();
	
});