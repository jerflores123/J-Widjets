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
    rev(this.state.string);
    event.preventDefault();   
}

    render() {
        return (
          <form className="reverse-string" onSubmit={this.handleSubmit}>
            <div>
              <label>Type in anything to see it reversed! </label>
              <input type='text' value={this.state.string}
              onChange={this.handleStringChange}/>
            </div>
            <button className="reverse-button" type="submit">Reverse</button>
            <div id="result"></div>
          </form>  
        )
    }
}

function rev(str){
  let reverse = '';
  if(str === ''){
      alert('You must type in a string for this to really work!');
  }else{
      for(let char of str){
        reverse = char + reverse;
      }
    document.getElementById("result").innerHTML = " The reversed string is: " + reverse + " ";
  }
}

export default ReverseString