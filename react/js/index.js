//函数
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <p>现在是 {props.date.toLocaleTimeString()}</p>
//     </div>
//   );
// }

function FormattedDate(props) {
  return <p> 现在是 {props.date.toLocaleTimeString()} </p>;
}
//类
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <FormattedDate date={this.state.date} />;
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realName: "HHHhhhh",
      otherName: "WWWwwww",
      name: true
    };
    this.handleClick = this.handleClick.bind(this, this.state);
  }
  handleClick(ele) {
    this.setState({
      name: !this.state.name
    });
    console.log(ele);
    console.log(this.state.name);
  }
  render() {
    return (
      <h1 onClick={this.handleClick}>
        {this.state.name ? this.state.realName : this.state.otherName}
      </h1>
    );
  }
}

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      site: "https://www.runoob.com"
    };
  }
  render() {
    return <a href={this.state.site}>{this.state.site}</a>;
  }
}

function changeTime() {
  var mystyle = {
    color: "#666666",
    fontSize: 16
  };
  ReactDOM.render(
    <div>
      <h1 style={mystyle}> Hello, world! </h1>
      <Name />
      <Link />
      <Clock date={new Date()} />
    </div>,
    document.getElementById("example")
  );
}
changeTime();

//login
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stated: false
    };
    this.loginIn = this.loginIn.bind(this, this.state);
    this.loginOut = this.loginOut.bind(this, this.state);
  }
  loginIn() {
    this.setState({
      stated: true
    });
  }
  loginOut() {
    this.setState({
      stated: false
    });
  }
  render() {
    const loginState = this.state.stated;
    let button = null;
    if (loginState) {
      button = <LogoutButton onClick={this.loginOut} />;
    } else {
      button = <LoginButton onClick={this.loginIn} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={loginState} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("login"));

function UserGreeting(props) {
  return <h1>欢迎回来!</h1>;
}

function GuestGreeting(props) {
  return <h1>请先注册。</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

function LoginButton(props) {
  return <button onClick={props.onClick}>登陆</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>退出</button>;
}
