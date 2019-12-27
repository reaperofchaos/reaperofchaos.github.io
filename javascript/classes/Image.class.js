	 /**
     * @Name: Image Class
     * @Description: Creates an image
     * @Parameters: name - Title of Image. List in Alt-Text and below the image
	 *				src - location of image - href 
	 *				height - height in pixels for image
	 *				width - width in pixels for image
	 *            
     * @Methods: create - creates an image with its title listed below it
     * @Author: Jacob Conner
     */
	 
class Image{
	constructor(name, src, height, width){
		this.name = name;
		this.src = src;
		this.height  = height;
		this.width = width;
	}

	create(){
		var html = "";
		html += `<img src="${this.src}" width="${this.width}" height="${this.height}" alt="${this.name}" onclick="getRecord('${this.name}')"></img><br/>
				<p>${this.name}</p>`;
		return html;
	}
}