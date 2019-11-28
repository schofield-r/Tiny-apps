import React from "react";
//import logo from "./logo.svg";
import Header from "./components/Header"
import List from "./components/List"
import ItemAdder from "./components/ItemAdder"
import "./App.css";


class App extends React.Component {
  state = {
    items: [
      {
        item: "Milk",
        Due: "Friday"
      },
      {
        item: "Bread",
        Due: "Monday"
      }
    ]
  }

  addItem = newItem => {
    this.setState(currentState => {
      return { items: [newItem, ...currentState.items]}
    })
  }


  render() {
    return(
      <div className = "App">
        <Header/>
        <ItemAdder addItem = {this.addItem}/>
        <List
        items = {this.state.items} />
      </div>
    )
  }}

   
 
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>oioioio</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

export default App;
