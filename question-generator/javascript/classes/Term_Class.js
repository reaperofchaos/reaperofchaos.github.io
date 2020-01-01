class Term{
	constructor({Term, Definition}){
		this.Term = Term;
		this.Definition = Definition
	}
	
	createTableRow(id){
		var html = "";
		html += `<tr id='${id}><td >${this.Term}</td><td>${this.Definition}<td></tr>`;
		return html; 
	}
	
	getQuestionLength(){
	}
	
}