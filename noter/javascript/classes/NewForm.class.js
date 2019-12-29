	 /**
     * @Name: NewForm Class
     * @Description: Builds a form in a new bootstrap tab.
     * @Parameters: tabNo - id for the tab
	 *				variables - array of various form elements - defined in formVariables.js
	 *				functionName - function called when the submit button is pushed
	 *				displayName - Name displayed on the tab label
	 *            
     * @Methods: create(colNo) - creates a form with buttons grouped in to rows 
	 *                           with colNo of columns
	 *           buildForm() - static method to build a form - used for forms.json
     * @Author: Jacob Conner
     */
class NewForm
 {
	 constructor(tabNo, variables, functionName, displayName){
		 this.tabNo = tabNo;
		 this.variables = variables;
		 this.functionName = functionName; 
		 this.displayName = displayName; 
	 }
	
	create(colNo){	
		const formName = () =>
				{
					return this.functionName.replace(/[A-Za-z].*\./, "")
									   .replace(/\(.*\)/, "") + "_form";
				};
		var displayName = this.displayName;
		//console.log(formName()); 
		var html = "<form>";
		//console.log(this.variables); 
		var buttons = new ButtonGroup(this.variables, colNo, formName(), 'form');
		html += buttons.createNoDiv(); 
		html += "<input class='copy' id='formCreate' type='button' value='Create' onclick='" + this.functionName + "'></input>";
		html += "</form>";
		//Create a preview box
		html += "<br />"
			 + "<br />"
			 +"<p id='templateName_" + this.tabNo + "' class='templateName'>" + displayName + "</p>"
			 + "<p id='Preview_" + this.tabNo + "' class='Preview'>Test</p>";
		var results = {"html": html,
						tab(){ createTab(formName(), displayName, html);
						}
					  }
		return results; 
	 }
	 
	 static buildForm(name, type='PromoNote'){
		 console.log(name);
		const IsName = formList => formList.name == name; 
		var formsObject = formList.filter(IsName)
								  .map((currentElement)=>{
									var id = nextTab(); 
									var functionName;
									var variables = [];
									var variablesList = currentElement.variables.map((currentVariable)=> {
										variables.push(window[currentVariable](id));		
									});
									var colTotal = colTotal
									type == 'Tools'
									? functionName = "Tools." + currentElement.functionName + "(" + id +")"
									: functionName = "PromoNote." + currentElement.functionName + "(" + id +")";
									var newForm1 = new NewForm(id, variables, functionName, currentElement.displayName);
									newForm1.create(currentElement.colTotal).tab();
									document.getElementById('templateName_'+id).innerHTML = currentElement.displayName;
								  });
	 }
 }