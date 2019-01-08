import React, { Component } from 'react';
import '../css/noteForm.css';

export default class NoteForm extends Component {

  state = {
    title: "",
    content: ""
  }

  handleSubmit = evt => {
    evt.preventDefault();
    debugger
    const { addNotes } = this.props;
    const newNote = {...this.state}
    addNotes(newNote);
    
    console.log(evt);
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    return (
      <div className="formbox">
        <form className="formbody" onSubmit={this.handleSubmit}>
          <input id="note-title" className="form-spacer" type="text" placeholder="type a title" name="title" onChange={this.handleChange}/>
          <textarea id="note-content" className="form-spacer" name="content" placeholder="note content goes here..." cols="" rows="100"onChange={this.handleChange}/>
          <button className="button-primary" type="submit" value="submit">Submit</button>
        </form>
      </div>)
  }
}
