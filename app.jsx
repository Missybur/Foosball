// // import React from 'react';
// // import ReactDOM from 'react-dom';

// var PLAYERS = [
//   {
//     name: "Mary Miller",
//     score: 22,
//     id: 1,
//   },
//   {
//     name: "Ellie Grace",
//     score: 20,
//     id: 2,
//   },
//   {
//     name: "Ben Pine",
//     score: 18,
//     id: 3,
//   },
//   {
//     name: "Rachel Slater",
//     score: 17,
//     id: 4,
//   },
//   {
//     name: "Lisette Ven",
//     score: 10,
//     id: 5,
//   },
// ];

// // var nextId = 6;

// // var AddPlayerForm = React.createClass({
// //   propTypes: {
// //     onAdd: React.PropTypes.func.isRequired,
// //   },

// //   getInitialState: function() {
// //     return {
// //       name: "",
// //     };
// //   },

// //   onNameChange: function(e) {
// //     this.setState({name: e.target.value});
// //   },

// //   onSubmit: function(e) {
// //     e.preventDefault();

// //     this.props.onAdd(this.state.name);
// //     this.setState({name: ""});
// //   },


// //   render: function() {
// //     return (
// //       <div className="add-player-form">
// //         <form onSubmit={this.onSubmit}>
// //           <input type="text" value={this.state.name} onChange={this.onNameChange} />
// //           <input type="submit" value="Add Player" />
// //         </form>
// //       </div>
// //     );
// //   }
// // });

// // function Header(props) {
// //   return (
// //     <div className="header">
// //       <h1>{props.title}</h1>
// //     </div>
// //   );
// // }

// // Header.propTypes = {
// //   title: React.PropTypes.string.isRequired,
// //   players: React.PropTypes.array.isRequired,
// // };

// // function Counter(props) {
// //   return (
// //     <div className="counter">
// //       <button className="counter-action decrement" onClick={function() {props.onChange(-1);}} > - </button>
// //       <div className="counter-score"> {props.score} </div>
// //       <button className="counter-action increment" onClick={function() {props.onChange(1);}}> + </button>
// //     </div>
// //   );
// // }

// // Counter.propTypes = {
// //   score: React.PropTypes.number.isRequired,
// //   onChange: React.PropTypes.func.isRequired,
// // }

// // function Player(props) {
// //   return (
// //     <div className="player">
// //       <div className="player-name">
// //         <a className="remove-player" onClick={props.onRemove}>✖</a>
// //         {props.name}
// //       </div>
// //       <div className="player-score">
// //         <Counter score={props.score} onChange={props.onScoreChange} />
// //       </div>
// //     </div>
// //   );
// // }

// // Player.propTypes = {
// //   name: React.PropTypes.string.isRequired,
// //   score: React.PropTypes.number.isRequired,
// //   onScoreChange: React.PropTypes.func.isRequired,
// //   onRemove: React.PropTypes.func.isRequired,
// // };



// // var Application = React.createClass({
// //   propTypes: {
// //     title: React.PropTypes.string,
// //     initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
// //       name: React.PropTypes.string.isRequired,
// //       score: React.PropTypes.number.isRequired,
// //       id: React.PropTypes.number.isRequired,
// //     })).isRequired,
// //   },

// //   getDefaultProps: function() {
// //     return {
// //       title: "Foosball Scoreboard",
// //     }
// //   },

// //   getInitialState: function() {
// //     return {
// //       players: this.props.initialPlayers,
// //     };
// //   },

//   onScoreChange: function(index, delta) {
//     let players = [...this.state.players]
//     players[index].score += delta;
//     players = players.sort((a,b) => b.score - a.score)
//     this.setState({players});
//   },

// //   onPlayerAdd: function(name) {
// //     this.state.players.push({
// //       name: name,
// //       score: 0,
// //       id: nextId,
// //     });
// //     this.setState(this.state);
// //     nextId += 1;
// //   },

// //   onRemovePlayer: function(index) {
// //     this.state.players.splice(index, 1);
// //     this.setState(this.state);
// //   },

// //   // reorderPlayers

// //   render: function() {
// //     return (
// //       <div className="scoreboard">
// //         <Header title={this.props.title} players={this.state.players} />

// //         <div className="players">
// //           {this.state.players.map(function(player, index) {
// //             return (
// //               <Player
// //                 onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
// //                 onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
// //                 name={player.name}
// //                 score={player.score}
// //                 key={player.id} />
// //             );
// //           }.bind(this))}
// //         </div>
// //         <AddPlayerForm onAdd={this.onPlayerAdd} />
// //       </div>
// //     );
// //   }
// // });



// // ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));