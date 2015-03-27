$(function(){
	$.ajax({
		url: 'https://www.goodreads.com/search.xml?key=ZGWOL7bd0ZwR5rdsdK1GOQ&q=Ender%27s+Game',
		type: 'GET',
		dataType: 'json',
		success: function(){
			console.log("It worked!");
		}
	});
});
