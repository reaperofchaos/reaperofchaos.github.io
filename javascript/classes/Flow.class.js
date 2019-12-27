class Flow {
	constructor ({Title, label, Steps}){
		this.title = Title;
		this.label = label;
		this.steps = Steps;
		this.stepCount = Steps.length;
	}

	create(){
		var html = "<h1>" + this.title + "</h1><br />";
		var i = 0;
		while (i < this.stepCount){
			var newStep = new Step(this.steps[i]);
			html += newStep.create(i);
			i++;
		}
		return html;
	}
}

class Step {
	constructor ({Name, Sub_steps}){
		this.name = Name;
		this.substeps = Sub_steps;
		this.subStepCount = Sub_steps.length;
	}
	
	create(stepNo){
		if (this.subStepCount >= 1){
			var html = "<button id='btnstep" + stepNo +"' onclick='toggleShow(\"step"	+ stepNo + "\")'>+</button><strong>Step " + (stepNo + 1) + ":</strong> " + this.name + "<br/>";
			html += "<div id='step" + stepNo +"' style='display: none'>";
		} else{
			var html = "<strong>Step " + stepNo + ":</strong>" + this.name;
		};
		html += "<ol type='a'>";
		var i = 0;
		while (i < this.subStepCount){
			var newSubStep = new SubStep(this.substeps[i]);
			html += "<li>" + newSubStep.create(stepNo, i) + "</li>";
			i++;
		} 
		html += "</ol>";
		html += "</div>";
		return html;
	}
}


class SubStep {
	constructor ({Name, Detail}){
		this.name = Name;
		this.details = Detail;
		this.detailsCount = Detail.length;
	}
	create(stepNo, subStepNo){
		var html = "<div id='step" + stepNo + "substep" + subStepNo +"' style='display: block'>";
		html += this.name + "<br />"
		if (this.details == ""){
		}else{
			html += "<ul style='list-style-type:disc'>";
			var i = 0;
			while (i < this.detailsCount){
				html += "<li>" + this.details[i].detail + "</li>";
				i++;
			}
			html += "</ul>";
		}
		html += "</div>";
		return html;
	}
}