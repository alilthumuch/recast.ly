var searchYouTube = (options, callback) => {
  // TODO
  $.get( "https://www.googleapis.com/youtube/v3/search", options, callback);
};

window.searchYouTube = searchYouTube;
