class ListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          name: "hh",
          id: "0"
        },
        {
          name: "hhhh",
          id: "1"
        },
        {
          name: "hhhhhh",
          id: "2"
        }
      ]
    };
  }
  render() {
    const lists = this.state.lists;
    let str = null;
    str = lists.map(item => <li key={item.id.toString()}>{item.name}</li>);
    return (
      <div>
        <ul>{str}</ul>
      </div>
    );
  }
}

ReactDOM.render(<ListControl />, document.getElementById("list"));
