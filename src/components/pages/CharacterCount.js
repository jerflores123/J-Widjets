import React, { Component } from 'react';

class CharacterCount extends Component {
  
constructor(props) {
  super(props)

  this.state = {
     character: ''
  }
}

handleCharacterChange = (event) => {
  this.setState({
  character: event.target.value,
})
}

handleSubmit = (event) => {
    event.preventDefault();   
}

count = (event) => {
  let numCount = 0;
  for(let i = 0; i <= this.state.character.length - 1; i++){
    numCount ++;
  }
  return document.getElementById("result").innerHTML = "Character Count is: " + numCount;
}
  render() {
      return (
        <form className="character-count" onSubmit={this.handleSubmit}>
          <div >
            <label>Type to see character count! </label>
            <input type='text' value={this.state.character}
            onChange={this.handleCharacterChange}/>
          </div>
          <button onClick={this.count} className="reverse-button">Count</button>
          <div id="result"></div>
        </form>
                
      )
  }
}

export default CharacterCount