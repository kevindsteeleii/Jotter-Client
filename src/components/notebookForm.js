import React, { Component } from 'react';
import '../css/forms.css';

export default class NotebookForm extends Component {
  
  state = {
    title: "",
    description: ""
  }

  handleChange = evt =>  {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  }

  handleSubmit = evt => {
    // Logic for submitting a new notebook goes here...
  }

  render() {
    const { title, description } = this.state;
    return (
        <form id="notebook-form" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <input placeholder="title goes here..." value={title} type="text" name="title" id="notebook-title" onChange={this.handleChange}/>
          <textarea placeholder="a short description of what kind of notebook this is..." value={description} name="description" id="notebook-description" cols="" rows="10" onChange={this.handleChange}/>
          <button className="button-primary" type="submit">Add Notebook</button>
        </form>
    )
  }
}
