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
	console.log(this.chatTypes);
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
		//var chatButtons = new ButtonGroup(buttons, cols, id, classType);
		//var html2 = chatButtons.create('copy');
	document.getElementById("chatScripts").innerHTML = html;
	//document.getElementById("buttons").innerHTML = html2;
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
	static getChatButtonNames(chatTypeOption, subChatOption){
			const isChatButton = response => response.groupName == chatTypeOption && response.subGroup == subChatOption;
			var buttons; 
			var chatButtonArray = response.filter(isChatButton)
				.map((currentElement)=>{
					buttons = currentElement.buttons;
				});
			return buttons; 
	}
	static checkIfSubChatBox(chatTypeOption){
		var subChatType;
		var subChatOption;
		chatTypeOption == ''
			? document.getElementById('chatSubOptions').innerHTML = ''
			: null; 
		document.getElementById('chatSubOptions').innerHTML != null
			? subChatType = document.getElementById('chatSubOptionsBox')
			: subChatType = null;
		subChatType != null
			? subChatOption = subChatType.options[subChatType.selectedIndex].value
			: subChatOption = '';
		return subChatOption;
	}
	static getChatButtons(){
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		var subChatOption = ChatScripts.checkIfSubChatBox(chatTypeOption);
		var chatButtonsList = ChatScripts.getChatButtonNames(chatTypeOption, subChatOption);
		var cols = 3;
		var id = 'frm1';
		var classType = 'level1';
		var chatButtons = new ButtonGroup(chatButtonsList, cols, id, classType);
		var html = chatButtons.create('copy');
		document.getElementById('buttons').innerHTML = html;
	}
	
	static getChatScripts(){
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		chatTypeOption == ''
			? ChatScripts.getChatButtons() //search for chat buttons
			: ChatScripts.changeChatOptions(); //search for subChat options
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