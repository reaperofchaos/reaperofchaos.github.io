class ReviewTerms{
	constructor(array){
		this.ReviewTermList = array; 
	}
	

	pickGroup(){
		var g = document.getElementById('pickGroup2');
		var group = g.options[g.selectedIndex].text;
		var isGroup = list => list; 
		console.log(group);
		group != ''
			?  isGroup = list => list.Group == group
			: null;
		var newList = this.ReviewTermList.filter(isGroup);
		return newList; 				
	}
	getTerms(list){
		var i = 1; 
		var html = ""; 
		var definitions = list.map((currentElement) => {
						var t = new Term(currentElement);
				html += t.createTableRow(i);
				i++;
		});
	return html; 
	}
	
	createList(){
		var html = "";
		
		html +=	`<table class='table' style='background-color: lightBlue; border-color: black; border-style: solid; border-width:3px;' >
				<tr style='background-color: lightGray;border-color: black; border-style: solid; border-width:3px;'><th>Term</th><th>Definition</th></tr>`;
		var list = this.pickGroup();
		html += this.getTerms(list);
		document.getElementById('result').innerHTML = html; 
	}
	create(){
	var html = "";
	html += `<div class='row'>
			<div class='col-sm-1></div>
			<div class
		<div class="list" id='reviewList'>
					<label for='pickGroup2'>Pick a List</label>
								<select name='pickGroup2' id='pickGroup2' onchange='updateTerms()'>
									<option id=''></option>
								</select><br/>
					<div id='result'></div>`;			
	return html; 
	}
}