class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      video: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };

    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: ' '
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }
  
  onListItemClick(video) {
    this.setState({
      video: video
    });
  }

  handleOnChange(event) {
    //console.log(event.target.value);
    this.setState({value: event.target.value});
    this.onSearch(event.target.value);
  }
  
  onSearch (event) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      max: 5,
      query: event};
    var that = this;
    //setState automatically trigger render()
    this.props.searchYouTube(options, function(data) { that.setState({videos: data, video: data[0]}); });
  }

  componentDidMount() {
    this.onSearch();
  }
  
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClick={this.handleOnChange} value={this.state.value} onChange={this.handleOnChange}/>
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
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


//line 13 <div><h5><em>videoList</em> view goes here</h5></div> 

//line 10 <div><h5><em>videoPlayer</em> view goes here</h5></div>

//search line <div><h5><em>search</em> view goes here</h5></div>