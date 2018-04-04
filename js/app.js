//search-button

var displayWikipediaData = function() {


	var $linksElement = $('#links');
	var searchString = $('#searchString').val();
	console.log(searchString);
	var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchString + "&format=json&callback=wikiCallback";

	//
	$.ajax({
		url: wikipediaUrl, 
		dataType: "jsonp",
		jsonp: "callback",
		success: function(res){
			var linksLists = res[1];
			linksLists.forEach(function(item){
				var url = 'https://en.wikipedia.org/wiki/' + item;
				$linksElement.append('<li><a href="' + url + '" target="_blank">' + item + '</a></li>');
				return url;
			});
			//output the results of the Wikipedia data onto the screen

		}


	});

	return false;
};

$('#form').submit(displayWikipediaData);