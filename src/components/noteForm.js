import React, { Component } from 'react';
import '../css/noteForm.css';

export default class NoteForm extends Component {

  state = {
    title: "",
    content: ""
  }

  handleSubmit = evt => {
    const { addNotes } = this.props;
    const newNote = {...this.state}
    addNotes(newNote);
    this.setState({ title: "" }, () => {
      this.setState({ content: "" })
    })
    evt.preventDefault();
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="formbox">
        <form className="formbody" onSubmit={this.handleSubmit}>
          <input value={title} id="note-title" className="form-spacer" type="text" placeholder="type a title" name="title" onChange={this.handleChange}/>
          <textarea value={content} id="note-content" className="form-spacer" name="content" placeholder="note content goes here..." cols="" rows="100"onChange={this.handleChange}/>
          <button className="button-primary" type="submit" value="submit">Submit</button>
        </form>
      </div>)
  }
}
