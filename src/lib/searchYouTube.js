var searchYouTube = (options, callback) => {
  // TODO
  var data = {
    key: options.key,
    maxResults: options.max,
    q: options.query,
    type: 'video',
    part: 'snippet'
  };
  //$.get(link, data, callback function *success, failure)
  
  $.get( "https://www.googleapis.com/youtube/v3/search", data, function(data) {
    callback(data.items);
  });
};

window.searchYouTube = searchYouTube;
