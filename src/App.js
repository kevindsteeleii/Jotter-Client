import React, { Component } from 'react';
import NoteForm from './components/noteForm';
import './css/App.css';
import './css/skeleton.css';
import './css/normalize.css';

class App extends Component {

  state = {
    currNotebook: 'default',
    notes: []
  }

  handleSubmit = evt => {

  }

  addNotes = noteObj => {
    this.setState({notes: [...this.state.notes, noteObj]})
  }

  render() {
    return (
      <div className="container">
        <NoteForm addNotes={this.addNotes}/>
      </div>
    );
  }
}

export default App;
