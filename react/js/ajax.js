class UserGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", lastGistUrl: "" };
  }

  componentDidMount() {
    this.serverRequest = $.get(
      this.props.source,
      function(result) {
        var lastGist = result[0];
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }.bind(this)
    );
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById("ajax")
);
