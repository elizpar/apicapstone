$
$(function(){

  $("#search-term").submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();

    var params = {
      part: 'snippet',
      key: 'AIzaSyDDVUcMpTZeyPo0UTVB0wRlZVsc1Q00zxk',
      q: searchTerm,
      r: 'json'
    };

    $.getJSON('https://www.googleapis.com/youtube/v3/search', params, function(data){
    var myData = data.items[0].snippet.thumbnails.default.url;
    console.log(myData);
    showResults(data.items);
     
    function showResults(results){
      $('.search-results').empty();
      for (var i = 0; i < results.length; i++) {
        var vidId = results[i].id.videoId;
        console.log(vidId);
        var addThumbnail = '<span><a href="https://www.youtube.com/watch?v='+ vidId +'"><img src="https://i.ytimg.com/vi/' + vidId+ '/default.jpg"></a></span><p>';
        $('.search-results').append(addThumbnail);
        console.log(vidId);
        };
      }
    });
  });  
});

oauth: c9c6541be312c9977298caed1b3057308ac1c638