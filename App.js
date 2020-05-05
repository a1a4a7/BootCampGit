import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cardlist } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      monsters: []
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      }).then(users => /* console.log(users) */
        this.setState({ monsters: users })
      )
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    console.log(monsters)
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <SearchBox handleChange={this.handleChange} ></SearchBox>

          <Cardlist monsters={filteredMonsters}>
          </Cardlist>

          <button onClick={() => this.setState({ string: 'HoHoHo' })}>Change state</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div >
    );
  }
}
export default App;
