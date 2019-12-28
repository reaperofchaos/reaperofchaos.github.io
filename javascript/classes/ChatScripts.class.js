    /**
     * @Name: ChatScripts Class
     * @Description: Builds a form with a select box and table 
	 *               with copy buttons and copies the information 
	 *               to the users clipboard
     * @Parameters: 
     * @Methods: createChatScripts() - builds an html button
     *           getSubGroupNames() - builds radio button
     *           getAllAvailableSubChatOptions() - builds html input
     *           changeChatOptions() - search for subChat options
     *   		 getChatButtonNames()
	 *			 getChatScripts() - search for chat buttons
     * @Author: Jacob Conner
     */

class ChatScripts {
	constructor(){
		this.chatTypes = this.getUniqueChatTypes();
		}

	createChatScripts(){
	var html = `<div id='chatSelector'>
				<table class='table borderless'>
					<tr>
						<td>
							<label for='chatOptions'>Chat Scripts:  </label>
							<select name='chatOptions' id='chatOptionsBox' onClick = 'ChatScripts.getChatScripts()'>`;
	var groupNames = this.chatTypes.map((currentElement)=>{
								html += `<option name='${currentElement}'>${currentElement}</option>`;
							});
	html +=					`</select> 
						</td>
						<td>
							<div id='chatSubOptions'></div>
						</td>
					</tr>
				</table>
				<div id='buttons' class='level1'></div>`;
		//var buttons = ChatScripts.getChatButtonNames("General", "");
		var cols = 3;
		var id = 'frm1';
		var classType = 'level1';
	document.getElementById("chatScripts").innerHTML = html;
	//display the first chatTypeOption
	ChatScripts.getChatButtons();
	}
	
	static getSubGroupNames(chatOption, currentElement){
		var html = "";
		currentElement.groupName == chatOption
			? html += "<option name='" + currentElement.subGroup + "'>" + currentElement.subGroup + "</option>"
			: null;
		return html; 
	}
	static getAllAvailableSubChatOptions(chatOption){
		const isChatOption = response => response.groupName == chatOption;
		var html = "<label for='chatSubOptionsBox'>Chat Type:  </label><select name='chatSubOptions' id='chatSubOptionsBox' onClick = 'ChatScripts.getChatButtons()'>";
		var subChatOptions = response.filter(isChatOption)
					.map((currentElement)=>{
					   html += ChatScripts.getSubGroupNames(chatOption, currentElement);
				   })
		html +="</select>";
		return html;
	}
	
	static changeChatOptions(){
		document.getElementById('buttons').innerHTML = '';
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		var html = ''; 
		html += ChatScripts.getAllAvailableSubChatOptions(chatTypeOption);
		document.getElementById('chatSubOptions').innerHTML = html;
	}	
	static getChatButtonNames(chatTypeOption, subChatOption= ""){
			console.log(`Chat Option: ${chatTypeOption} and subchat option: ${subChatOption}`);
			const isChatButton = response => response.groupName == chatTypeOption && response.subGroup == subChatOption;
			var buttons; 
			var chatButtonArray = response.filter(isChatButton)
				.map((currentElement)=>{
					buttons = currentElement.buttons;
				});
			console.log(buttons); 
			return buttons; 
	}
	static checkIfSubChatBox(chatTypeOption){
		var subChatType;
		var subChatOption;
		document.getElementById('chatSubOptions').innerHTML != null
			? subChatType = document.getElementById('chatSubOptionsBox')
			: subChatType = null;
		subChatType != null
			? subChatOption = subChatType.options[subChatType.selectedIndex].value
			: subChatOption = '';
		return subChatOption;
	}
	//Creates copy buttons - called when chatOptionsBox or subChatOption dropdowns change. 
	static getChatButtons(){
		//get the chatOption Value
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		//get the subChatOption value
		var subChatOption = '';
		 ChatScripts.checkIfSubChatBox(chatTypeOption) != null
			? subChatOption = ChatScripts.checkIfSubChatBox(chatTypeOption)
			: subChatOption = '';
		console.log("the subchat option is" + subChatOption); 
		//Create a list of chat buttons. 
		var chatButtonsList = ChatScripts.getChatButtonNames(chatTypeOption, subChatOption);
		console.log('The getChatButtons chatButtonsList buttons are ');
		console.log(chatButtonsList); 
		var cols = 3;
		var id = 'frm1';
		var classType = 'level1';
		var chatButtons = new ButtonGroup(chatButtonsList, cols, id, classType);
		//create copy buttons and palce them in the buttons div
		var html = chatButtons.create('copy');
		document.getElementById('buttons').innerHTML = html;
	}
	
	static getChatScripts(){
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		ChatScripts.changeChatOptions(); //search for subChatOptions
		
		ChatScripts.getChatButtons(); //search for chat buttons
	}
	 getUniqueChatTypes(){
		var lookup = {};
		var items = response;
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
	
}
