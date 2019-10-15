class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECEIVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  handleClick() {
    this.setState({
      number: this.state.number + 1
    });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          点我！
        </button>
        当前数字是<span>{this.state.number}</span>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("counter"));
