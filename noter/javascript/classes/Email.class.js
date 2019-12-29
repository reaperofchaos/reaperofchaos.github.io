class Email{
	constructor(name, tabNo, variables, functionName, displayName, preview, subject){
		 this.name = name; 
		 this.tabNo = tabNo;
		 this.buttons = variables; 
		 this.groups = variables.groups;
		 this.variables = variables.buttons;
		 this.functionName = functionName; 
		 this.displayName = displayName; 
		 this.preview = preview; 
		 this.subject = subject;
	 }
	 create(colNo){	
		const formName = () =>
				{
					return this.functionName.replace(/[A-Za-z].*\./, "")
									   .replace(/\(.*\)/, "") + "_form";
				};
		var displayName = this.displayName;
		var buttons; 
		var html = `<form name='${this.name}' action='${this.functionName}.php'>`;
		this.groups.map((currentElement)=>{
				var length = currentElement.length;
				//console.log(`length: ${length}`);
				var buttonsG = new ButtonGroup(currentElement, length, 'testid', 'test');
				html += `${buttonsG.createNoDiv()} <br />`
		});
		if(this.variables){
			buttons = new ButtonGroup(this.variables, colNo, formName(), 'form');
		  html += `${buttons.createNoDiv()} <br />`;
		}
		html += `<input class='copy' id='formCreate' type='button' value='Create' onclick='${this.functionName}'></input>
				</form>`;
		//Create a preview box
		this.preview 
			? html += `<br />
			 <br />
			 <p id='templateName_${this.tabNo}' class='templateName'>${displayName}</p>
			 <p id='Preview_${this.tabNo}' class='Preview'></p>`
			 : null;
		//Create Subject Line
		html += `<input class='copy' value='Create Subject Line' id='subjectCreate_${this.tabNo}' type='button' onclick='copyit(\"${this.subject}\", "subject", destination = "subject${this.tabNo}")'></input>
			<br />
			 <br />
			 <p id='templateName_subject${this.tabNo}' class='templateName'>${displayName}</p>
			 <p id='Preview_subject${this.tabNo}' class='Preview'></p>`
		var results = {"html": html,
						tab(){ createTab(formName(), displayName, html);
						}
					  }
		return results; 
	 }
	 // buttonGroup constructor(buttons, cols, id, classType)
	 static buildForm(name, type){
		 
		const IsName = emailList => emailList.name == name; 
		var formsObject = emailList.filter(IsName)
								  .map((currentElement)=>{
									var id = nextTab(); 
									var functionName;
									var variables = {};
									var groups = [];
									variables.buttons = [];
									variables.groups = [];
									var variablesList = currentElement.variables.map((currentVariable)=> {
										//console.log(currentVariable);
										if(Array.isArray(currentVariable)){
											groups = [];
											//console.log(`Array: ${Array.isArray(currentVariable)}`);
											//console.log(currentVariable);
											currentVariable.map((cv)=>{
												groups.push(window[cv](id))
												});
											variables.groups.push(groups);	
										}else{ 
											variables.buttons.push(window[currentVariable](id));	
										}
									});
									
									//console.log(variables.groups);
									var colTotal = colTotal;
									functionName = type +"." + currentElement.functionName + "(" + id +")"
									var newForm1 = new Email(name, 
															   id, 
															   variables, 
															   functionName, 
															   currentElement.displayName,
															   currentElement.preview,
															   currentElement.subject);
									const formName = () =>
										{
											return functionName.replace(/[A-Za-z].*\./, "")
															   .replace(/\(.*\)/, "") + "_form";
										};			   
									if(document.getElementById(formName())){
										$('#menu a[href=\'#'+formName()+'\']').tab('show')
									}else{					   
										newForm1.create(currentElement.colTotal).tab();		
										document.getElementById('templateName_'+id).innerHTML = currentElement.displayName;
									}							
								  });
	 }
}

