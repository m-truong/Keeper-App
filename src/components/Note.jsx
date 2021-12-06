import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note({handleDelete, key, id, title, content}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </div>
  );
}

export default Note;
