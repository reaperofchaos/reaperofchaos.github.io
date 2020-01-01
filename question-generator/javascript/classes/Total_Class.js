class Total{
	constructor(wrongTotal, correctTotal){
		this.wrongTotal = wrongTotal;
		this.correctTotal = correctTotal; 
	}
	
	updateDiv(name, value){
		document.getElementById(name).innerHTML = value;
	}
	
	update(){
		this.updateDiv('wrongTotal', this.wrongTotal);
		this.updateDiv('correctTotal', this.correctTotal);
		var currentTotal = this.correctTotal/(this.wrongTotal + this.correctTotal);
		isNaN(currentTotal)
			? currentTotal = 0
			: null 
		var html = `<h1>${currentTotal.toFixed(2)*100}%</h1>`;
		document.getElementById('currentScore').innerHTML = html;
	}
	create(){
		var currentTotal = this.correctTotal/(this.wrongTotal + this.correctTotal);
		isNaN(currentTotal)
			? currentTotal = 0
			: null; 
		var html = `<div id='currentScore' style='text-align: center;'>
		<h1>${currentTotal.toFixed(2)*10000}%</h1>
		</div>
		<table class='table'>
			<tr>
				<th> Correct Answers</th><th>Incorrect Answers</th>
			</tr>
			<tr>
				<td id='correctTotal'style='text-align: center;'>${this.correctTotal}</td>
				<td id='wrongTotal' style='text-align: center;'>${this.wrongTotal}</td>
			</tr>
		</table>`;
		document.getElementById('scoreBoard').innerHTML = html;;
	}

}
