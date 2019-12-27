	 /**
     * @Name: NoteSelector Class
     * @Description: creates the radio buttons of all noter categories defined in buttons.json
	 *               each radio button calls NoterCategory.create(value) or a SearchBox.create()
     * @Parameters:
     * @Methods: create - creates the table of radio buttons with different noter category labels
	 *           getUniqueNoteTypes - finds all unique noter catories in Buttons.json
     *	         getNonSearchBoxes - checks if a button group is defined as a SearchBox or NoterCategory Object
     * @Author: Jacob Conner
     */	
	 
class NoteSelector {
	 create(){
		var buttonTypes = NoteSelector.getUniqueNoteTypes();
		var isSearchbox = buttons=>buttons.type == "searchBox";
		var searchBoxes = buttons.filter(isSearchbox)
								 .map((currentElement)=>{
									 return currentElement.groupName;
								 })
		var nonSearchBoxes = NoteSelector.getNonSearchBoxes(searchBoxes, buttonTypes); 
		var noterCategories = [];
		var searchBoxCategories = [];
		var notSearchBoxButtons = nonSearchBoxes.map((currentElement)=>{
			var noterCategory = new NoterCategory(currentElement);
			noterCategories.push(noterCategory);
		});
		var searchBoxButtons = searchBoxes.map((currentElement)=>{
			var searchBoxCategory = new searchBox(currentElement);
			searchBoxCategories.push(searchBoxCategory);
		})
		var html = "<table class='table borderless'>"
				 +"<tr>";
		var newButton = ""; 
		noterCategories.map((currentElement)=>{
							newButton = new Button(currentElement);
							html += "<td>" + newButton.createRadio() + "</td>";
						})
		searchBoxCategories.map((currentElement)=>{
							newButton = new Button(currentElement);
							html += "<td>" + newButton.createRadio() + "</td>";
						})
		html +="</tr>"
			 +"<tr>";
		noterCategories.map((currentElement)=>{
							html += "<td>" + currentElement.value + "</td>"; 
						});
		searchBoxCategories.map((currentElement)=>{
							html += "<td>" + currentElement.value + "</td>"; 
						});				
		html+="</tr>"
			 +"</table>";
		 document.getElementById("noteSelector").innerHTML = html;
	}

	static getUniqueNoteTypes(){
		var lookup = {};
		var items = buttons;
		var result = [];
		for (var item, i = 0; item = items[i++];) {
			var name = item.groupName;
			if (!(name in lookup)) {
				lookup[name] = 1;
				result.push(name);
			}
		}
		return result; 
	}
	static getNonSearchBoxes(searchBoxes, buttonTypes){
	searchBoxes.map((currentElement)=> {
		var searchbox = buttonTypes.includes(currentElement);
		buttonTypes.splice( buttonTypes.indexOf('currentElement'), 1 );
	});
		return buttonTypes; 
	}
}