
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    $('.search-results').empty();

    var params = {
      
      key: window.authkey,
      q: searchTerm,
      r: 'json'
    };

$.getJSON('https://api.github.com/search/users', params, function(data){
  console.log(data.items[0].login);
  for (var i = 0; i < data.items.length; i++) {
    var login = data.items[i].login;
    var url = data.items[i].avatar_url;
    $('.search-results').append('<li>' + login + '<br><img src='+ url +'></li><br>');
  }
  

   //'https://api.github.com/search/repositories?q=language:' +searchTerm+ 'sort=stars&order=desc'
    // function showResults(results){
      //multicursor
    //     // var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
        
   //     };
      
    });
  });  
});
