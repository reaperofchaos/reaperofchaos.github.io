class GroupObj{
		constructor(groupName, subGroup){
			this.groupName = groupName;
			this.subGroup = subGroup;
		}
	}
	class SubGroupObj{
		constructor(subGroup, subGroup2){
			this.subGroup = subGroup;
			this.subGroup2 = subGroup2;
		}
	}
	class SubGroup2Obj{
		constructor(subGroup2, buttons){
			this.subGroup2 = subGroup2;
			this.buttons = buttons;
		}
	}
	class buttonObj{
		constructor(buttonName, action){
			this.buttonName = buttonName;
			this.action = action;
		}
	}
	
class Tools {
	 constructor(){
	 }
	 static removeWhiteSpace(id, no){
		var field = document.getElementById('fixWS_' + id).value;
		var rc = document.getElementById('removeChar_'+ id);
		var removeChar = rc.options[rc.selectedIndex].value;
		console.log(removeChar);
		var field = field.replace(/\s/g, "");
		var re = new RegExp(removeChar, "g");
		removeChar != ''
			? field = field.replace(re, '')
			: null;
		console.log(field);
		document.getElementById('Preview_'+id).innerHTML = field;
		copyit(field);
	}
	
}
	
