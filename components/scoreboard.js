// Libs
import React from 'react';

const INITIAL_STATE = {
  players: [
    {
      name: "Mary Miller",
      score: 22,
      id: 1,
    },
    {
      name: "Ellie Grace",
      score: 20,
      id: 2,
    },
    {
      name: "Ben Pine",
      score: 18,
      id: 3,
    },
    {
      name: "Rachel Slater",
      score: 17,
      id: 4,
    },
    {
      name: "Lisette Ven",
      score: 10,
      id: 5,
    },
  ]
}


const Scoreboard = React.createClass({
  getInitialState: function () {
    return INITIAL_STATE;
  },

  onScoreChange: function (index, delta) {
    let players = [...this.state.players]
    players[index].score += delta;
    players = players.sort((a,b) => b.score - a.score)
    this.setState({players});
  },

  onAddPlayer: function (name) {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  },

  onRemovePlayer: function (index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  },

  render: function () {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(function(player, index) {
             return (
               <Player
                 name={player.name}
                 score={player.score}
                 key={player.name}
                 onScoreChange={(delta) => this.onScoreChange(index, delta)}
                 onRemove={() => this.onRemovePlayer(index)}
               />
             );
           }.bind(this))}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
});

function Header(props) {
  return (
    <div className="header">
      <h1>Foosball Scoreboard</h1>
    </div>
  );
}


function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter onChange={props.onScoreChange} score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
};

function Counter(props) {
  return (
    <div className="counter" >
      <button className="counter-action decrement" onClick={() => props.onChange(-1)}>
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => props.onChange(1)}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  score: React.PropTypes.number.isRequired,
}


const AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function () {
    return { name: "" };
  },

  onNameChange: function (e) {
    const name = e.target.value;
    this.setState({ name: name });
  },

  onSubmit: function (e) {
    if (e) e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  },

  render: function () {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Player Name"
          />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
});

export default Scoreboard;