import React from 'react';
import "./styles/style.css";
import './App.css';
import Editor from "./component/editor"
import Sidebar from "./component/slidebar"
import { nanoid } from 'nanoid'

import Split from 'react-split'

function App() {


  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes])


  function createNewNote() {

    const newNote = {

      id: nanoid(),
      body: "type your note"
    }

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }

  return (


    <main>

      {

        notes.length > 0 ? (

          <div>

            <Split

              direction="horizontal"
              sizes={[25, 75]}

              className="split"
            >
              <Sidebar notes={notes} newNote={createNewNote} />
              <Editor />
            </Split>
          </div>
        ) :

          (
            <div className="no-notes" >


              <h1> you have no notes</h1>

              <button className="first-note" onClick={createNewNote}> create one now</button>



            </div>

          )
      }


    </main>
  );
}

export default App;
