class Question{
	constructor(array){
		this.ReviewTermList = array; 
		this.TermTotal = this.ReviewTermList.length;
	}
	
	showTermTotal(){
		console.log(this.TermTotal); 
	}
	static checkForTermGroups(list){
		var lookup = {};
		var items = list;
		var result = [];
		for (var item, i = 0; item = items[i++];) {
			var name = item.Group;
			if (!(name in lookup)) {
				lookup[name] = 1;
				result.push(name);
			}
		}
		return result; 
	}
	
	pickFourTerms(list){
		var termList = [];
		var newData = list.map((currentElement)=> {
			termList.push(currentElement);
		});
		console.log(termList);
		var terms = [];
		var i = 0;
		while (i < 4){
			var termTotal = termList.length;
			var term1 = Math.floor(Math.random() * termTotal);
			//remove term from the list
			var list = termList.splice(term1, 1);
			terms.push(term1);
			i++;
		}
		console.log(terms);
		return terms; 
	}		
	
	pickGroup(){
		var g = document.getElementById('pickGroup');
		var group = g.options[g.selectedIndex].text;
		var isGroup = list => list; 
		group != ''
			?  isGroup = list => list.Group == group
			: null;
		var newList = this.ReviewTermList.filter(isGroup);
		return newList; 				
	}
	
	pickQuestion(){
		var list = this.pickGroup();
		console.log(list);
		var terms = this.pickFourTerms(list);
		var questionId = Math.floor(Math.random() * terms.length);
		var question = terms[questionId];
		var qObject = new qComponents(list, question, terms);
		return qObject;
	}
	
	checkIfExists(value){
		if(value != undefined){
		return htmlEntities(value);
		}else{
			return "";
		}
	}
	createQuestion(id){
		var question = this.pickQuestion();
		
		var html = "";
		html += `<strong>Question ${id}:</strong><br />
		${this.checkIfExists(question.question.Definition)} 
		<input type='hidden' id='questionId_${id}' value='${this.checkIfExists(question.questionId)}' /> <br />
		<br />
		<div class="alert alert-danger" id='error_${id}' style='display: none'></div>
		<div class="alert alert-success" id='success_${id}' style='display: none'></div>
		<table class='table'>
		<tr>
			<td></td>
			<td><strong>A)&nbsp;&nbsp;&nbsp;&nbsp;</strong> <input type='radio' name='answer' id='a_${id}' value='${this.checkIfExists(question.answers[0])}'> </td>
			<td> ${this.checkIfExists(question.answer1.Term)}</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>B)&nbsp;&nbsp;&nbsp;&nbsp;</strong> <input type='radio' name='answer' id='b_${id}' value='${this.checkIfExists(question.answers[1])}'></td>
			<td> ${this.checkIfExists(question.answer2.Term)}</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>C)&nbsp;&nbsp;&nbsp;&nbsp;</strong> <input type='radio' name='answer' id='c_${id}' value='${this.checkIfExists(question.answers[2])}'></td>
			<td> ${this.checkIfExists(question.answer3.Term)}</td>
		</tr>
		<tr>
			<td></td>
			<td><strong>D)&nbsp;&nbsp;&nbsp;&nbsp;</strong> <input type='radio' name='answer' id='d_${id}' value='${this.checkIfExists(question.answers[3])}'></td>
			<td> ${this.checkIfExists(question.answer4.Term)}</td>
		</tr>
		</table>
		<br />
		<input type='button' value='Submit Answer' onclick='Question.checkAnswer(${id})'></input><br />`;
		return html;
	}	
	create(){
		console.log(question);
		var html = "";
		var t =  document.getElementById('questionTotal');
		var total = t.options[t.selectedIndex].text;
		var i = 1;
		while(i <= total){
			html += this.createQuestion(i);
			i++;
		}
		document.getElementById('question').innerHTML = html; 
	}
	static hideDiv(div){
		document.getElementById(div).style.display = 'none';
	}
	static showDiv(div){
		document.getElementById(div).style.display = 'block';
	}
	
	static checkAnswer(id){
		Question.hideDiv('success_'+id);
		Question.hideDiv('error_'+id);

		var answer = '';
		var questionId = document.getElementById('questionId_'+id).value;
		if(document.getElementById('a_'+id).checked){
			answer = document.getElementById('a_'+id).value;
		}else if(document.getElementById('b_'+id).checked){
			answer = document.getElementById('b_'+id).value;
		}else if(document.getElementById('c_'+id).checked){
			answer = document.getElementById('c_'+id).value;
		}else if(document.getElementById('d_'+id).checked){
			answer = document.getElementById('d_'+id).value;
		}else{
			Question.showDiv('error_'+id);
			document.getElementById('error_'+id).innerHTML = "Please select an answer"; 
		}
		if(answer != ''){
			//check answer
			if (answer == questionId){
				Question.showDiv('success_'+id);
				document.getElementById('success_'+id).innerHTML = "You have selected the correct answer"; 
				correctTotal++;
				updateTotal();
			}else{
				Question.showDiv('error_'+id);
				document.getElementById('error_'+id).innerHTML = "Try again"; 
				wrongTotal++; 
				updateTotal();
			}
		}
	}
	
}

class qComponents{
	constructor(databank, question, answers){
		this.questionId = question; 
		this.question = databank[question];
		this.answers = answers;
		this.answer1 = databank[this.answers[0]];
		this.answer2 = databank[this.answers[1]];
		this.answer3 = databank[this.answers[2]];
		this.answer4 = databank[this.answers[3]];
	}

}



