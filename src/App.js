
import React, {Component} from 'react'
import CardList from './components/card-list/card-list.jsx'
import SearchBox from './components/search-box/search-box.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
			monsters: [],
      searchField: ''
		};
  }

  //have access to componentDidMount from Component class
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
			<div className='App'>
				<SearchBox
					placeholder='search monsters'
					handleChange={e => this.setState({searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
  }
}

export default App;
