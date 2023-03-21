import React from 'react';
import "./styles/style.css";
import './App.css';
import Editor from "./component/editor"
import Sidebar from "./component/slidebar"
import { nanoid } from 'nanoid'

import Split from 'react-split'

function App() {


  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("notes")) || []);

  const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id);

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));

  }, [notes])


  function createNewNote() {

    const newNote = {

      id: nanoid(),
      body: "#type your note"
    }

    setNotes((prevNotes) => [newNote, ...prevNotes]);
  }


  function deleteNote(event, noteId) {

    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));



    // const tasks = [
    //   {
    //     taskId : 1,
    //     taskName : 'Clean the bathroom',
    //     taskStatus: 'Complete'
    //   },
    //   {
    //     taskId : 2,
    //     taskName : 'Learn filtering data in React',
    //     taskStatus: 'To do'
    //   },
    //   {
    //     taskId : 3,
    //     taskName : 'Fix the bug on React project',
    //     taskStatus: 'To do'
    //   },
    //   {
    //     taskId : 4,
    //     taskName : 'Fix the car',
    //     taskStatus: 'Complete'
    //   }
    // ]
    // const arrayfilter = tasks.filter(task=> task.taskStatus === "To do")
    // console.log("filter", arrayfilter);

  }


  deleteNote();


  // arrow funcition alistirma

  function counterFunc(counter) {

    if (counter > 10) {

      counter = 0;

    }

    else {

      counter++;
    }
    return counter;

  }

  //aroowa donustur

  //()=> bu bir arrow 
  // { bu bir obje}

  //(parametre)=> {logic}

  const counterFunc = (counter) => {

    if (counter > 10) {

      counter = 0;

    }

    else {

      counter++;
    }
    return counter;
   }

   const counterFunc = (counter) => {counter > 100 ? 0 : counter++;}


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
              <Sidebar notes={notes} newNote={createNewNote} deleteNote={deleteNote} />
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
