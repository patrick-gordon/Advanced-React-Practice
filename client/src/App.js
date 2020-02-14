import React from 'react';
import axios from 'axios';

import './App.css';
import PlayerCard from './components/PlayerCard';

class App extends React.Component {
    state = {
      players: []
    }

  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/footballers`)
    .then( res => {
      console.log(res);
      this.setState ({ players: res.data })

    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidUpdate(){
    console.log('state updated', this.state.players)
  }
  render (){
    return (
    <div className="App">
      <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
      {this.state.players.map((item) => {
        return(
          <PlayerCard name={item.name} rank={item.rank} team={item.team} key={item.id}/>
        )
      })}
    </div>
  );
}
}

export default App;
