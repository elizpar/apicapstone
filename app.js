$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    
    function getRequest(searchTerm) {
      $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
      var myData = data.Search;
      showResults(myData);
      console.log(myData);
      });
    }

  	function showResults(results){
	    for (var i = 0; i < results.length; i++) {
         $('.search-results').append('<span>' + results[i].Title + '</span><br>');
         console.log(results[i].Title);
	       };
    	}
    
  });


});  