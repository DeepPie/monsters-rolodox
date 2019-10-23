import React, {Component} from 'react';

import { CardList } from './components/card-list/card-lists.component'

import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
 constructor(){
     super();

     this.state = {
         monsters: [],
         searchField: ''
    }
  }

   componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState( {monsters:users} ))
   }
  
// onSearchChange = event => {
//     this.setState({ searchField: event.target.value })
// }  

render() {
    const { monsters, searchField } = this.state 
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
        <div className ='App'>
            <h1> Monsters Rolodox </h1>
            <SearchBox
              placeholder ='search monsters' 
              handleChange = {e => { 
                this.setState({ searchField: e.target.value } )
              }}
            />
            <CardList monsters = {filteredMonsters}> </CardList>
        </div>  
    )
  };
}
export default App;
