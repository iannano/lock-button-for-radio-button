function validasi1(){
	var xmlhttp;
	
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("radio1").setAttribute("disabled", true);
			document.getElementById("radio2").setAttribute("disabled", true);
			document.getElementById("button").setAttribute("hidden", true);
	}
	}
	
	xmlhttp.open("GET", "Disable%20Radio%20Box%20In%20Multiple%20Form.php", true)
	xmlhttp.send();
}

function validasi2(){
	var xmlhttp;
	
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById("radio3").setAttribute("disabled", true);
			document.getElementById("radio4").setAttribute("disabled", true);
	}
	}
	
	xmlhttp.open("GET", "Disable%20Radio%20Box%20In%20Multiple%20Form.php", true)
	xmlhttp.send();
}
