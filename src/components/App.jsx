class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }
  
  
  onListItemClick(video) {
    this.setState({
      video: video
    });
  }
  
  onSearchClick (search) {
    var options = {key: window.YOUTUBE_API_KEY,
      maxResults: '5',
      part: 'snippet',
      q: search,
      type: 'video'};
    var that = this;
    searchYouTube(options, function(data) {that.setState({videos: data.items, video: data.items[0]})});
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.onSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClick={this.onListItemClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


//line 13 <div><h5><em>videoList</em> view goes here</h5></div> 

//line 10 <div><h5><em>videoPlayer</em> view goes here</h5></div>

//search line <div><h5><em>search</em> view goes here</h5></div>