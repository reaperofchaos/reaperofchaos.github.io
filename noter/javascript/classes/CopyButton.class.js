    /**
     * @Name: CopyButton Class
     * @Description: Extends button class and builds a button with 
	 *			     information needed to be able to copy the a value
     *           	 to the user's clipboard
     * @Parameters: 
	 *             name - button name
	 *             action - javascript function the button calls. Always calls copyit()
     *             classType - html class
	 *             value - text displayed on the button 
	 *             response - value copied to the form
     * @Methods: createChatScripts() - builds an html button
     *           getSubGroupNames() - builds radio button
     *           getAllAvailableSubChatOptions() - builds html input
     *           changeChatOptions() - search for subChat options
     *   		 getChatButtonNames()
	 *			 getChatScripts() - search for chat buttons
     * @Author: Jacob Conner
     */
	 
class CopyButton extends Button {
	constructor({name, action, classType, value, response}){
		super({name, action, classType, value});
		this.response = response.replace("'", ""); 
		this.NewAction = "copyit(\""+ this.response + "\", \"" + this.value + "\", 1)";
	}
	createButton(){
		var html = ''; 
		this.action != ''
			? html =  "<button name='" + this.name + 
						 "' class='" + this.classType +
						 "' onclick ='" + this.NewAction + 
						 "'>" + this.value + "</button>"
			: html = "<button name='" + this.name +
						"' class='" + this.classType +
						"'>" + this.value + "</button>"
			return html;
	}
}
