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
    count(this.state.character);
    event.preventDefault();   
}

    render() {
        return (
          <form className="character-count" onSubmit={this.handleSubmit}>
            <div >
              <label>Type to see character count! </label>
              <input type='text' value={this.state.character}
              onChange={this.handleCharacterChange}/>
            </div>
            <button className="count-button" type="submit">Count</button>
            <div id="result"></div>
          </form>
                  
        )
    }
}

function count(str){
  let numCount = 0;
  for(let char of str){
    numCount ++;
  }
  document.getElementById("result").innerHTML = "Character Count is: " + numCount;
}

export default CharacterCount