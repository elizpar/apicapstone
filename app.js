$
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();

    var params = {
      part: '',
      key: 'auth.js',
      q: searchTerm,
      r: 'json'
    };

    $.getJSON('https://api.github.com/users', params, function(data){
    var myData = data.login;
    console.log(myData);
    // showResults(data.items);
     
    // function showResults(results){
    //   $('.search-results').empty();
    //   for (var i = 0; i < results.length; i++) {
    //     var vidId = results[i].id.videoId;
    //     console.log(vidId);
    //     var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
    //     $('.search-results').append(addThumbnail);
    //     console.log(vidId);
    //     };
    //   }
    });
  });  
});
