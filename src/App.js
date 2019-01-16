import React, { Component } from 'react';
import Navbar from './components/navbar';
import NotebookForm from './components/notebookForm';
import NoteForm from './components/noteForm';
import Shelf from './containers/shelf';
import Modal from './components/modal';
import './css/App.css';

class App extends Component {

  state = {
    currNotebook: "",
    notes: [],
    title: "",
    content: "",
    loggedIn: false,
    toggleNotebookForm: false 
  }

  componentDidMount(){
    const { loggedIn } = this.state;
  }

  addNotes = noteObj => {
    // logic for the fetch request would connect here to post a new note
    this.setState({notes: [...this.state.notes, noteObj]});
  }

  toggleNotebookForm = () => {
    this.setState({toggleNotebookForm : !this.state.toggleNotebookForm})
  }

  setNotebook = (currNotebook) => {
    this.setState({ currNotebook })
  }

  render() {
    const {currNotebook, loggedIn, toggleNotebookForm} = this.state
    return (<>
      <Navbar loggedIn={loggedIn} toggleNotebookForm={this.toggleNotebookForm}/>
      {toggleNotebookForm && <NotebookForm/>}
      <div className=" note-container">
        <Shelf setNotebook={this.setNotebook}/>
        <NoteForm addNotes={this.addNotes}/>
      </div>
      <Modal notebook={currNotebook}/>
    </>);
  }
}

export default App;
