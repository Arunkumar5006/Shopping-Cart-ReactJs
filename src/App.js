import React from "react";
import "./styles.css";
import Products from "./product";

function ListItems(props) {
  const items = props.items;
  //return <div id="Items">{items}</div>;
  const listItems = items.map(item => {
    return (
      <div className="List" key={item.id}>
        <p id="Items">
          {item.text}
          <button
            onClick={() => {
              props.deleteItem(item.id);
            }}
          >
            Del
          </button>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    //this.quantItem = this.quantItem.bind(this);
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.id !== key);
    this.setState({
      items: filteredItems
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = { text: e.target.alt, id: Date.now() };
    const items = [...this.state.items, newItem];
    this.setState({
      items: items
    });
    console.log(items);
  }
  render() {
    return (
      <div>
        <h2>Grocessory Store</h2>
        <div className="App">
          <table>
            <tr>
              <td>
                <div className="Itempanel">
                  <Products addItem={this.addItem} />
                </div>
              </td>
              <td valign="top">
                <div className="Listpanel">
                  <h3>cart</h3>
                  <ListItems
                    items={this.state.items}
                    deleteItem={this.deleteItem}
                    quantItem={this.quantItem}
                  />
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
