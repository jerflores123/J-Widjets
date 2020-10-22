import React, { Component } from 'react';

class ReverseString extends Component {

constructor(props) {
  super(props)

  this.state = {
     string: ''
  }
}

handleStringChange = (event) => {
  this.setState({
  string: event.target.value,
})
}

handleSubmit = (event) => {
    event.preventDefault();   
}

reverse = (event) => {
  let reverse = '';
  if(this.state.string === ''){
      alert('You must type in a string for this to really work!');
  }else{
    for(let char of this.state.string){
      reverse = char + reverse;
    }
    return document.getElementById("result").innerHTML = " The reversed string is: " + reverse;
  }
  
}
  render() {
      return (
        <form className="reverse-string" onSubmit={this.handleSubmit}>
          <div>
            <label>Type to see it reversed! </label>
            <input type='text' value={this.state.string}
            onChange={this.handleStringChange}/>
          </div>
          <button onClick={this.reverse} className="reverse-button">Reverse</button>
          <div id="result"></div>
        </form>  
      )
  }
}

export default ReverseString