import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const createNote = (note) => {
  return (
    <Note key={note.key} title={note.title} content={note.content} />
  );
}

const App = () => {
  return (
    <>
    <Header/>
    {notes.map(createNote)}
    <Footer/>
     </>
  )
  };

export default App;
