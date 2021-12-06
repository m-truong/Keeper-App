import React from "react";

function Note({handleDelete, key, title, content}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
