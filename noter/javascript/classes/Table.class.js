    /**
     * @Name: Table Class
     * @Description: Extends button class and builds a button with 
	 *			     information needed to be able to copy the a value
     *           	 to the user's clipboard
     * @Parameters: 
	 *             name - name of the array of objects with property_name, property_value
	 *						to build a table
	 *             rows - number of rows
     * @Methods: create_table() - builds a table from an array with property_name and property_values
	 *							  and displays the table in a new bootstrap Tab
     * @Author: Jacob Conner
     */
	 
class Table{
	constructor({name, rows}){
		this.name = name;
		this.rows = rows;
	}
	
	static create_table({name, rows}){
		var displayName = name;
		const tableName = () =>
				{
					return name.replace(/\s/g, "")
									   .replace(/\(.*\)/g, "") + "_info";
				};
		console.log(tableName());
		var html = '';
		html += `<h1>${name}</h1><br />
				<table class='table'>`;
		rows.map((currentElement)=>{
		html += `<tr><td>${currentElement.property_name}</td>
						 <td>${currentElement.property_value}</td>
				</tr>`;
		});
		html += `</table`;
		console.log(html);
		createTab(tableName(), displayName, html);
	}

}