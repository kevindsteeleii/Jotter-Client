import React from 'react';
import Notebook from '../components/notebook';
import '../css/shelf.css';

export default function Shelf(props) {
  return (
    <div id="shelf">
      {books(props)}
    </div>
  )
}

const books = (props) => {
  let books = [];
  for (let i = 0; i < 20; i++){
    books.push(<Notebook key={`notebook-${i}`} number={i} setNotebook={props.setNotebook} handleClick={handleClick}/>);
  }
  return books;
}

const handleClick = (evt, props) => {
  evt.preventDefault();
  // debugger
  const { number } = props;
  let notebook = {
    id: number,
    title: `test title: #${number}`,
    description: "lskdjlfjksjjflskdfjlskdfjsdijfksjlkfsdj"
  }
  props.setNotebook(notebook);
  const modal = document.querySelector('#modal');
  modal.classList.remove('unseen');
}
