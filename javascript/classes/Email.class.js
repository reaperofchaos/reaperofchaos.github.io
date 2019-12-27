	 /**
     * @Name: Email Class
     * @Description: Builds form to copy text in an email form
     * @Parameters: 
	 *            
     * @Methods: 
     * @Author: Jacob Conner
     */
	 
class Email {
	constructor(){
	 }
	static create(){
		var html='';
		var emailsMiscToolButtonList = [{name: "wliEmail",
										 action:"MiscTools.wliEmailForm(this.value)",
										 classType: "copy",
										 value: "WLI Email"
										},
										{name: "embarqPastDue",
										 action:"MiscTools.neacEmailForm(this.value)",
										 classType: "copy",
										 value: "Embarq Order Past Due Email"
										},
										{name: "viasatPasswordReset",
										 action:"MiscTools.viasatEmailForm(this.value)",
										 classType: "copy",
										 value: "ViaSat Password Reset"
										},
										{name: "viasatPasswordResetAgent",
										 action:"MiscTools.viasatEmailFormAgent(this.value)",
										 classType: "copy",
										 value: "ViaSat Password Reset to Agent"
										},
										{name: "likeForNonLike",
										 action:"MiscTools.likeForNonLikeEmailForm(this.value)",
										 classType: "copy",
										 value: "Like For Non-Like"
										},
										{name: "spidEmail",
										 action:"MiscTools.spidEmailForm(this.value)",
										 classType: "copy",
										 value: "SPID Email"
										},
										{name: "UATEmail",
										 action:"MiscTools.uatEmailForm(this.value)",
										 classType: "copy",
										 value: "UAT Email"
										},
										{name: "cboDefectEmail",
										 action:"MiscTools.cboDefectEmailForm(this.value)",
										 classType: "copy",
										 value: "CBO Defect Email"
										},
										{name: "UATDefectEmail",
										 action:"MiscTools.uatDefectEmailForm('CBIS')",
										 classType: "copy",
										 value: "UAT - Defect Email"
										},
										{name: "bbProjectEmail",
										 action:"MiscTools.bbProjectEmailForm(this.value)",
										 classType: "copy",
										 value: "BB Project Email"
										}];
			var id = 'subMiscButtons';
			var classType = 'level2Buttons';
			var emailsMiscToolButtons = new ButtonGroup(emailsMiscToolButtonList, 3, id, classType);
			html += emailsMiscToolButtons.create();
	   +"<div id='emailResult'>"
	   +"</div>";
	createTab("Email","Email", html);
	}
	static emailsCreate(){
			var html='';
			var emailsMiscToolButtonList = [{name: "wliEmail",
										 action:"MiscTools.wliEmailForm(this.value)",
										 classType: "copy",
										 value: "WLI Email"
										},
										{name: "embarqPastDue",
										 action:"MiscTools.neacEmailForm(this.value)",
										 classType: "copy",
										 value: "Embarq Order Past Due Email"
										},
										{name: "viasatPasswordReset",
										 action:"MiscTools.viasatEmailForm(this.value)",
										 classType: "copy",
										 value: "ViaSat Password Reset"
										},
										{name: "viasatPasswordResetAgent",
										 action:"MiscTools.viasatEmailFormAgent(this.value)",
										 classType: "copy",
										 value: "ViaSat Password Reset to Agent"
										},
										{name: "likeForNonLike",
										 action:"MiscTools.likeForNonLikeEmailForm(this.value)",
										 classType: "copy",
										 value: "Like For Non-Like"
										},
										{name: "spidEmail",
										 action:"MiscTools.spidEmailForm(this.value)",
										 classType: "copy",
										 value: "SPID Email"
										},
										{name: "UATEmail",
										 action:"MiscTools.uatEmailForm(this.value)",
										 classType: "copy",
										 value: "UAT Email"
										},
										{name: "cboDefectEmail",
										 action:"MiscTools.cboDefectEmailForm(this.value)",
										 classType: "copy",
										 value: "CBO Defect Email"
										},
										{name: "UATDefectEmail",
										 action:"MiscTools.uatDefectEmailForm(\"CBIS\")",
										 classType: "copy",
										 value: "UAT  Defect Email"
										},
										{name: "bbProjectEmail",
										 action:"MiscTools.bbProjectEmailForm(this.value)",
										 classType: "copy",
										 value: "BB Project Email"
										}];
			var id = 'subMiscButtons';
			var classType = 'level2Buttons';
			var emailsMiscToolButtons = new ButtonGroup(emailsMiscToolButtonList, 3, id, classType);
			html += emailsMiscToolButtons.create();
			document.getElementById("emailResult").innerHTML=html;
		}
	static getContacts(){
		var category = document.getElementById('category');
		  var categoryOption = category.options[category.selectedIndex].value;
		console.log(categoryOption);
		//Populate the contact select box with values
		if (categoryOption == 'DNW'){
			var options = [];
			var i = 0;
			while (phoneNo.length > i){
				if (phoneNo[i].category == 'DNW'){	
					options.push(phoneNo[i].name);
				}
				i++;
			}
			console.log(options);
			PhoneNo.createSelectBox(options, 'contact', 'PhoneNo.getNOs');
		}else if (categoryOption == 'DNS'){
			var i = 0;
			var options1 = [];
			while (phoneNo.length > i){
				if (phoneNo[i].category == 'DNS'){
					options1.push(phoneNo[i].name);
				}
				i++;
			}
			console.log(options1);
			PhoneNo.createSelectBox(options1, 'contact', 'PhoneNo.getNOs');
		}else if (categoryOption == 'Commercial'){
			var i = 0;
			var options1 = [];
			while (phoneNo.length > i){
				if (phoneNo[i].category == 'Commercial'){
					options1.push(phoneNo[i].name);
				}
				i++;
			}
			console.log(options1);
			PhoneNo.createSelectBox(options1, 'contact', 'PhoneNo.getNOs');
		}else if (categoryOption == 'TV'){
			var i = 0;
			var options1 = [];
			while (phoneNo.length > i){
				if (phoneNo[i].category == 'TV'){
					options1.push(phoneNo[i].name);
				}
				i++;
			}
			console.log(options1);
			PhoneNo.createSelectBox(options1, 'contact', 'PhoneNo.getNOs');
		}else if(categoryOption == 'Dish Fiber'){
			var i = 0;
			var options2 = [];
			while (phoneNo.length > i){
				if (phoneNo[i].category == 'Dish Fiber'){
					options2.push(phoneNo[i].name);
				}
				i++;
			}
			console.log(options2);
			PhoneNo.createSelectBox(options2, 'contact', 'PhoneNo.getNOs');
		}else {
		}
	}	
	static createSelectBox(array, name, functionName){
		var i = 0;
		var html = "<select id = '"+ name + "' ";
		if (functionName){
			html+= "onclick='" + functionName + "()'>";
			}else{
			html+= ">";
			}
			html +="<option id = ''></option>";
		while (array.length > i){
			html+= "<option id='" + array[i] + "'>" + array[i] + "</option>";
			i++;
		}
		html +="</select>";
		document.getElementById('contactNo').innerHTML=html;
	}

	static getNOs(){
		var i = 0;
		var result = document.getElementById('contactResult');
		var contact = document.getElementById('contact');
		var contactOption = contact.options[contact.selectedIndex].value;
		while (phoneNo.length > i){
			if(phoneNo[i].name == contactOption){
				var html = "<strong>Name:</strong> " + phoneNo[i].name + "<br />";
				html+= "<strong>Phone No:</strong> " + phoneNo[i].phoneNo;
				if (phoneNo[i].phoneOption != ""){
					html+= " Option " + phoneNo[i].phoneOption + "<br />";
				}else{
					html+= "<br/>";
				}
				if (phoneNo[i].clec != ""){
					html += "<strong> CLEC:</strong> " + phoneNo[i].clec + "<br />"; 
				}else{}
				if (phoneNo[i].email != ""){
					html += "<strong> Email:</strong> " + phoneNo[i].email + "    <input type='button' class='copy' value='Copy' onclick = copyit('" + phoneNo[i].email + "')></input><br />";
					html += "<textarea id='Preview' style = 'width: 300px;'></textarea><br/>";
				}else{}
				if (phoneNo[i].description != ""){
					html += "<strong> Description</strong><br/> " + phoneNo[i].description + "<br />"; 
				}else{}
				}
			i++;
		}
		result.innerHTML = html;
	}
}
