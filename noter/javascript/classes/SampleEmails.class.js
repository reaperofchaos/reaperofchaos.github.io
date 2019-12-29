class SampleEmails {	

	static helloEmail(id){
		let displayName = "Greeting Email";
		let recipientName = document.getElementById('recipientName_'+id).value;
		let senderName = document.getElementById('senderName_'+id).value;
		let html = `Hello ${recipientName},<br />
			<br />
			How are you?  <br/>
			<br />
			Regards, <br />
			<br />
			<br />
			${senderName}`;
		copyit(html, displayName, id);
	}
}