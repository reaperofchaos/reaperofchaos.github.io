	 /**
     * @Name: NoterCategory Class
     * @Description: creates levels of buttons to copy text defined in buttons.json
     * @Parameters: name - html name
	 *				value - Name of value
	 *				action - creates level of buttons using static NoterCategory.create(this)
	 *				classType = html class
     * @Methods: create - creates a select box
	 *           getLevel1Buttons - creates a group of buttons based off of unique groupName 
     *	         getLevel2Buttons(promoNoteType) - creates subgroup buttons 
	 *           getLevel3Buttons(promoNoteType) - creates subgroup subgroup buttons 
	 *           clearButtons - sets div elements to empty
     * @Author: Jacob Conner
     */
	 
class NoterCategory {
	constructor(name){
				this.name = "notetype";
				this.value = name; 
				this.action = "NoterCategory.create(this)";
				this.classType = "";
				}
	
	static create(e){
		var name = e.getAttribute("value");
		var levels = 3; 
		document.getElementById("noteButtons").innerHTML = " ";
		var html = `<div id='${name}Notes'></div>`;
		document.getElementById("noteButtons").innerHTML = html;
		html = ''; 
		html += NoterCategory.getLevel1Buttons(name);
		var i = 2; 
		while (i <= levels){
		html += `<div id='level${i}Buttons' class='level${i}Buttons'></div>`;
		i++;
		}
		html += `</div>`
		document.getElementById(name+"Notes").innerHTML = html;
	}
	
	//GET buttons where groupName = name;
	static getLevel1Buttons(name){ 
		const isL1Button = buttons => buttons.groupName == name && buttons.subGroup == ''; 
		const getL1Buttons = buttons => buttons.buttons;
		var l1ButtonsArray = buttons.filter(isL1Button)
									.map(getL1Buttons);
		var cols = 3;
		var id = 'level1Buttons';
		var classType = 'level1Buttons';
		var level1ButtonGroup = new ButtonGroup(l1ButtonsArray[0], cols, id, classType);
		var html = level1ButtonGroup.create();
		return html; 
	}
	static getLevel2Buttons(promoNoteType){
		
		NoterCategory.clearButtons(2);
		var html = '';
		const isL2Subnote = buttons => buttons.subGroup == promoNoteType && buttons.subGroup2 == '';
		const getL2SubnoteButtons = buttons => buttons.buttons;
		var l2ButtonsArray = buttons.filter(isL2Subnote)
									   .map(getL2SubnoteButtons);
		var cols = 3;
		var id = 'level2Buttons';
		var classType = 'level2Buttons';
		var level2ButtonGroup = new ButtonGroup(l2ButtonsArray[0], cols, id, classType);
		html = level2ButtonGroup.create();
		document.getElementById("level2Buttons").innerHTML = html;	
	}
	static getLevel3Buttons(promoNoteType, subNoteType){
		NoterCategory.clearButtons(3);
		var html = '';
		const isL3Subnote = buttons => buttons.subGroup == promoNoteType && buttons.subGroup2 == subNoteType;
		const getL3SubnoteButtons = buttons => buttons.buttons;
		var l3ButtonsArray = buttons.filter(isL3Subnote)
									   .map(getL3SubnoteButtons);
		var cols = 3;
		var id = 'level3Buttons';
		var classType = 'level3Buttons';
		var level3ButtonGroup = new ButtonGroup(l3ButtonsArray[0], cols, id, classType);
		html = level3ButtonGroup.create();
		document.getElementById("level3Buttons").innerHTML = html;	
	}
		static clearButtons(lvlNo){
		lvlNo == 3
			? null
			: lvlNo == 2
			? document.getElementById("level3Buttons").innerHTML = ''
			: lvlNo == 1
				?  ()=>{document.getElementById("level2Buttons").innerHTML = '';
						document.getElementById("level3Buttons").innerHTML = '';}
			    : null;
	}
}
			