import React, { Component } from 'react';
import NoteForm from './components/noteForm';
import Shelf from './containers/shelf';
import Modal from './components/modal';
import './css/App.css';

class App extends Component {

  state = {
    currNotebook: "",
    notes: [],
    title: "",
    content: ""  
  }

  addNotes = noteObj => {
    // logic for the fetch request would connect here to post a new note
    this.setState({notes: [...this.state.notes, noteObj]});
  }

  setNotebook = (currNotebook) => {
    this.setState({ currNotebook })
  }

  render() {
    const {currNotebook} = this.state
    return (<>
      <div className=" note-container">
        <Shelf setNotebook={this.setNotebook}/>
        <NoteForm addNotes={this.addNotes}/>
      </div>
      <Modal notebook={currNotebook}/>
    </>);
  }
}

export default App;
