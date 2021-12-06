import React, { useState, useContext, useForm } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const cl = console.log

  // *** Use Complex State Object
  const [textData, setTextData] = useState({
    title: '',
    content: ''
  })

  const [notesList, setNotesList] = useState([]) // CREATED ARRAY OF OBJECTS with Title/Content!

  // *** Use RE-usable Function Handler
  const handleInputChange = (e) => {
    cl(e.target)

    const { name, placeholder, value } = e.target

    if (name === "title") {
      setTextData((prevState) => {
        return {
          ...prevState,
          [name]: value
        }
      })
    } else if (name === "content") {
      setTextData((prevState) => {
        return {
          ...prevState,
          [name]: value
        }
      })
    }
  }

  const handleSubmit = (e) => {
    cl(`Does this occur?`)
    setNotesList((prevNotes) => {
      return [...prevNotes, textData]
    })

    setTextData({ title: '', content: '' })
    e.preventDefault();
  }

  const handleDelete = (e) => {
    cl(`Does this occur?`)
    
  }
  return (
    <div>
      <Header />
      <CreateArea
        title={textData.title}
        content={textData.content}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} />
      {notesList.map((currNote, index) => (<Note handleDelete={handleDelete} key={1} title={currNote.title} content={currNote.content} />))}
      <Footer />
    </div>
  );
}

export default App;
