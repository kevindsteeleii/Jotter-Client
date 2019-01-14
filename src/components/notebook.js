import React from 'react';
import '../css/notebookShelf.css'

export default function Notebook (props){
  return (
    <div className="notebook"> 
      <p>Notebook test</p>
      <button data-tooltip={`Number is: ${props.number}`} className="description-button" onClick={ evt => props.handleClick(evt, props)}>Description</button>
    </div>
  )
}
