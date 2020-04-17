function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactinfo"].elements.length; 
        loopCounter++) {
        if (document.forms["contactinfo"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["contactinfo"].elements[loopCounter]
               .parentElement.className = "form";
        }
    }    
} 

function validateItems() {
	clearErrors();
	var name = document.forms["contactinfo"]["Name"].value;
	var phone = document.forms["contactinfo"]["Phone"].value;
	
	if (name == "") {
		alert("Name must be provided.");
		document.forms["contactinfo"]["Name"].parentElement.className="form has-error";
		document.forms["contactinfo"]["Name"].focus();
		return false;
		
	}
	
	if (phone == "" || isNAN(phone)) {
		alert("Phone number must be provided.");
		document.forms["contactinfo"]["phone"].parentElement.className="form has-error";
		document.forms["contactinfo"]["phone"].focus();
		return false;
		
	}
	
