<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
/* eslint-disable no-undef */
/*
$(document).on("contextmenu",function(e){        
   e.preventDefault();
});

//DISABLE F12 START//

document.keydown  = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) {  
		alert('CTRL + Specific Key usage is disabled');
		return false;  
	}  
}  
document.onmousedown = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) { 
		alert('CTRL + Specific Key usage is disabled');
		return false;  
	}  
}  
document.onkeydown = function (event) {  
	event = (event || window.event);  
	if (event.keyCode == 123) {  
		alert('CTRL + Specific Key usage is disabled');
		return false;  
	}  
}

//DISABLE F12 END//
 
 
//DISABLE RIGHT-CLICK START//

var message="Right Click usage is disabled"; 
function clickIE() {
	if (document.all) {
		(message);
		return false;
	}
} 
	
function clickNS(e) {
	if (document.layers||(document.getElementById&&!document.all)) { 
		if (e.which==2||e.which==3) {
			(message);
			return false;
		}
	}
} 
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS;
} 
else{
	document.onmouseup=clickNS;
	document.oncontextmenu=clickIE;
} 
document.oncontextmenu=new Function("return false");

//DISABLE RIGHT-CLICK END// 


//DISABLE CTRL KEY COMBINATIONS START// 

function disableCtrlKeyCombination(e) {
	var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j' , 'w');
	var key;
	var isCtrl;
	if(window.event) {
		key = window.event.keyCode;     //IE
		if(window.event.ctrlKey)
			isCtrl = true;
		else
			isCtrl = false;
	}
	else {
		key = e.which;     //firefox
		if(e.ctrlKey)
			isCtrl = true;
		else
			isCtrl = false;
	}
//if ctrl is pressed check if other key is in forbidenKeys array
	if(isCtrl) {
		for(i=0; i<forbiddenKeys.length; i++)
		{
			//case-insensitive comparation
			if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
				alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
				return false;
			}
		}
	}
	return true;
}
 
//ctrl+u not allowed
document.onkeydown = function(e) {
	if (e.ctrlKey && e.keyCode === 86 || (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 117)) {
        alert('CTRL + Specific Key usage is disabled');
        return false;
    }
	else {
		return true;
    }
};

//DISABLE CTRL KEY COMBINATIONS START// 

*/

(function(){
	debugger
  }())