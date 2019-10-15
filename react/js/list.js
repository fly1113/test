class ListControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          name: "这是第0行",
          id: "0"
        },
        {
          name: "这是第1行",
          id: "1"
        },
        {
          name: "这是第2行",
          id: "2"
        }
      ]
    };
  }
  render() {
    const lists = this.state.lists;
    let str = null;
    str = lists.map(item => (
      <ListItem key={item.id.toString()} name={item.name} />
    ));
    return (
      <div>
        <ul>{str}</ul>
      </div>
    );
  }
}

class ListItem extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}
// function ListItem(props) {
//   return <li>{props.name}</li>;
// }

ReactDOM.render(<ListControl />, document.getElementById("list"));
