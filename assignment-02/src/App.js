import React, { Component } from 'react';
import './App.css';

import TextInput from './TextInput/TextInput';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textInputed: ''
  };

  changeTextInputHandler = (event) => {
    this.setState({textInputed: event.target.value});
  }
  
  deleteCharHandler = (charIndex) => {
    const charsArray = this.state.textInputed.split('');
    
    charsArray.splice(charIndex, 1);
    this.setState({textInputed: charsArray.join('')});
  }

  render() {
    const charsArray = this.state.textInputed.split('');
    const charComponents = charsArray.map((c, index) => {
      return <CharComponent char={c} key={index} click={() => this.deleteCharHandler(index)} />
    });
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div>
          <TextInput textInputed={this.state.textInputed} changed={(event) => this.changeTextInputHandler(event)} />&emsp;
          <span>{this.state.textInputed.length}</span>
          <br />
          <Validation textLength={this.state.textInputed.length} /><br />
          <div className="charBoxes">{charComponents}</div>          
        </div>
      </div>
    );
  }
}

export default App;
