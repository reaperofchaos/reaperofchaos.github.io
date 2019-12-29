$( document ).ready(function() {

	var chatScriptsdiv = new ChatScripts();
	chatScriptsdiv.createChatScripts();
	var selector = new NoteSelector;
	selector.create();

	//Noter tabs
	$(".nav-tabs").on("click", "a", function(e){
		  e.preventDefault();
		  $(this).tab('show');
	})
	.on("click", "span", function () {
		var anchor = $(this).siblings('a');
		$(anchor.attr('href')).remove();
		$(this).parent().remove();
		$(".nav-tabs li").children('a').first().click();
	})

	
});