import React from 'react';
import '../css/modal.css';

export default function Modal(props) {
  const { id, title, description } = props.notebook;
  return (
    <div className="modal unseen" id="modal">
      <div className="modal-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="exit-button" onClick={handleClick}>Exit</button>
      </div>
    </div>
  )
}

const handleClick = evt => {
  evt.preventDefault();
  console.log(evt);
  const modal = document.querySelector('#modal');
  modal.classList.add('unseen');
}

