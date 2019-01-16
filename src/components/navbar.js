import React from 'react';

const handleAddNotebook = (evt, props) => {
  evt.preventDefault();
  props.toggleNotebookForm();
}

export default function Navbar (props) {  
  const { loggedIn }  = props;
    return (
      <nav id="navbar">
        <ul>
          <li onClick={evt => handleAddNotebook(evt, props)}>Add Notebook</li>
        {loggedIn && <li><a href="/logoff">Log Off</a></li>}
        </ul>
      </nav>
    )
}
