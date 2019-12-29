	 /**
     * @Name: Gallery Class
     * @Description: Builds a table of thumbnail images
     * @Parameters: imageList - array of image objects (defined in Image.class.js)
	 *				cols - number of images per row
	 *				id - html id
	 *				height - height in pixels for thumbnails
	 *				width - width in pixels for thumbnails
	 *            
     * @Methods: createRow - creates a row of images, given an image, column
	 *           create() - creates the table of image thumbnails
     * @Author: Jacob Conner
     */
	 
class Gallery {
		constructor(imageList, cols, id){
			this.imageList = imageList;
			this.cols = cols;
			this.id = id;
		}
		createRow(currElement, colCount){
			var html = "";
			var i = colCount - 1;
			colCount == 1
				? html += "<tr>"
				: i % this.cols == 0
					? html+= "</tr>"
						  + "<tr>"
					: null;
					console.log(currElement.height)
				html+= `<td>${currElement.create()}</td>`;
			return html;
		}
		
		static build({imageList, cols, id}, galleryName)
		{
			var myGallery = new Gallery(imageList, cols, id); 
			var html = myGallery.create();
			createTab(galleryName, galleryName, html);			
		}
		
		create(){
			var html = "<div id='" + this.id + "' class='"+ this.classType +"'>"
					 + "<table class='table borderless table-sm'>";
			this.imageList.map((currElement, index) =>
				{
					var img = new Image(currElement.name, currElement.src, currElement.height, currElement.width)
					var colCount = index + 1; 
					html += this.createRow(img, colCount);
				});
			html += "</tr>"
				 +"</table>"
				 + "</div>";
			return html;
		}
}