class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: "123",
      // selectValue: "rn"
      textContent: "123",
      selectContent: "rn"
    };
    // this.inputChange = this.inputChange.bind(this);
    // this.selectChange = this.selectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  // inputChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
  // selectChange(e) {
  //   this.setState({
  //     selectValue: e.target.value
  //   });
  // }
  btnClick() {
    var dom = ReactDOM.findDOMNode(this.refs.myInput);
    dom.children[0].focus();
    setTimeout(() => {
      this.refs.hhh.focus();
    }, 2000);
  }
  render() {
    return (
      <div>
        <InputContent
          ref="myInput"
          name="textContent"
          // value={this.state.value}
          // updateStateProp={this.inputChange}
          value={this.state.textContent}
          updateStateProp={this.handleInputChange}
        />
        <SelectContent
          ref="mySeclect"
          name="selectContent"
          // value={this.state.selectValue}
          // updateStateProp={this.selectChange}
          value={this.state.selectContent}
          updateStateProp={this.handleInputChange}
        />
        <ButtonContent updateStateProp={this.btnClick} />
        <input type="text" ref="hhh" placeholder="点击2秒后获取焦点" />
      </div>
    );
  }
}

class InputContent extends React.Component {
  render() {
    return (
      <div>
        <input
          name={this.props.name}
          type="text"
          value={this.props.value}
          onChange={this.props.updateStateProp}
        />
        <p>{this.props.value}</p>
      </div>
    );
  }
}

class SelectContent extends React.Component {
  render() {
    return (
      <div>
        <label>
          选择您最喜欢的网站
          <select
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.updateStateProp}
          >
            <option value="gg">Google</option>
            <option value="rn">Runoob</option>
            <option value="tb">Taobao</option>
            <option value="fb">Facebook</option>
          </select>
        </label>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

class ButtonContent extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.updateStateProp}>
          点我获取焦点
        </button>
      </div>
    );
  }
}

ReactDOM.render(<MainContent />, document.getElementById("example"));
