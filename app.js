
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    $('.search-results').empty();

    var params = {
      
      key: window.authkey,
      q: 'language:' + searchTerm
    };

$.getJSON('https://api.github.com/search/repositories', params, function(data){
  console.log(data);
  console.log(data.items[0].login);
  for (var i = 0; i < data.items.length; i++) {
    var login = data.items[i].owner.login;
    var avatar = data.items[i].owner.avatar_url;
    var url = data.items[i].owner.html_url;
    $('.search-results').append('<li>' + login + '<br><a href=' + url +'> <img src='+ avatar +'></a></li><br>');
  }
  

   
    // function showResults(results){
      //multicursor
    //     // var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
        
   //     };
      
    });
  });  
});
