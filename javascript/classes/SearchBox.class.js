    /**
     * @Name: searchBox Class
     * @Description: Class that builds a button object to call a static class
     *	 method with the intention that this specific static class builds an autocomplete search box
     * @Parameters:
     * @Methods: 
	 * @Author: Jacob Conner
     */	
class searchBox{
	constructor(name, array){
				this.name = "notetype";
				this.value = name;
				this.className = name.replace(/\s/, "");
				this.action = this.className+".create()";
				this.classType = "";
				}
	static htmlEntities(str) {
	return String(str).replace(/&/g, '&amp;')
					  .replace(/</g, '&lt;')
					  .replace(/>/g, '&gt;')
					  .replace(/"/g, '&quot;')
					  .replace(/'/g, '&#39;');
	}			
	
}