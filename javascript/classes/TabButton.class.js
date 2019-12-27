   /**
     * @Name: TabButton Class
     * @Description: Extends button class and builds a button with 
	 *			     information needed to be able to create new bootstrap tab displaying
	 *               the response
     * @Parameters: 
	 *             name - button name
	 *             action - javascript function the button calls. Always calls copyit()
     *             classType - html class
	 *             value - text displayed on the button 
	 *             response - value copied to the form
     * @Methods: createButton() - builds a button with an action taht creates a new Bootstrap tab
     * @Author: Jacob Conner
     */
class TabButton extends Button {
	constructor({name, action, classType, value, response}){
		super({name, action, classType, value});
		this.response = response.replace("'", ""); 
		this.NewAction = "createTab(\""+ this.name + "\", \"" + this.value + "\",\"" + this.response + "\")";
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
