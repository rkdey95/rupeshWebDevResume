import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.
function App() {
  // const [entry, updateEntry] = useState({
  //   title: "",
  //   content: ""
  // });
  // const [listNotes, updateListNotes] = useState([]);
  // function handleChange(event) {
  //   const { name: fieldName, value } = event.target;
  //   updateEntry((prevValue) => {
  //     return { ...prevValue, [fieldName]: value };
  //   });
  // }
  // function addNote() {
  //   updateListNotes((prevItems) => {
  //     return [...prevItems, entry];
  //   });
  //   updateEntry({
  //     title: "",
  //     content: ""
  //   });
  // }

  // function deleteNote(id) {
  //   updateListNotes((prevItems) => {
  //     return prevItems.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  // return (
  //   <div>
  //     <Header />
  //     <CreateArea onClick={addNote} onChange={handleChange} value={entry} />
  //     {/* <Note key={1} title="Note title" content="Note content" /> */}
  //     {listNotes.map((note, index) => (
  //       <Note
  //         onClick={deleteNote}
  //         key={index}
  //         id={index}
  //         title={note.title}
  //         content={note.content}
  //       />
  //     ))}
  //     <Footer />
  //   </div>
  // );
  return(<div id="AppContainer"><Header /><Content /><Footer /></div>)
}

export default App;
