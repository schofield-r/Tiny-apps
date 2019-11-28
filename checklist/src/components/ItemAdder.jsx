import React from "react";

class ItemAdder extends React.Component {
  state = { item: "", Due: "" };

  manageSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({ item: "", Due: "" });
  };
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    const { item, Due } = this.state;
    return (
      <form onSubmit={this.manageSubmit}>
        <label htmlFor="item">Item:</label>
        <input
          value={item}
          onChange={this.handleChange}
          id="item"
          type="text"
        ></input>
        <label htmlFor="Due">Due:</label>
        <input
          value={Due}
          id="Due"
          type="text"
          onChange={this.handleChange}
        ></input>
        <button>Add Item</button>
      </form>
    );
  }
}

export default ItemAdder;
