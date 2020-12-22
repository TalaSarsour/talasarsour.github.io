function submitFunctions() {
	var subject = document.getElementById("subject");
	var email = document.getElementById("email");
	var domain = email.value.substring(email.value.lastIndexOf("@") +1);	
	var id = document.getElementById("id");
	var url = document.getElementById("url");
	var name   = url.value.substring(0, url.value.lastIndexOf(".github.io"));	
	var message = document.getElementById("message");


	if(subject.value.length == 0)
	{
		alert("Subject data is empty");
	}else
	{
		if(parseInt(subject.value) && !isNaN(subject.value))
		{
			alert("The Type Of Subject is : Number");
		} else {
			alert("The Type Of Subject is : "+typeof subject.value);
		}			
	}	
	
	if(email.value.length == 0)
	{
		alert("Email data is empty");
	}else
	{	
		alert("The Domain is :"+domain)		
	}
	if(id.value.length == 0)
	{
		alert("ID data is empty");
	}
	else
	{
		if(parseInt(id.value) && !isNaN(id.value))
		{
			alert("is number");
			return true;
		} else {
			alert("is string");
		return false;
		}		

	}
	if(url.value.length == 0)
	{
		alert("URL data is empty");
	}	
	else{
		alert("The Username is :"+name);	

	}
	if(message.value.length == 0)
	{
		alert("Message data is empty");
	}else
	{
		if(parseInt(message.value) && !isNaN(message.value))
		{
			alert("The Type Of Message is : Number");
			return true;
		} else {
			alert("The Type Of Message is : "+typeof message.value);
		return false;
		}			

		
	}	
	
}
