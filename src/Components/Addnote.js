import "./Addnote.css";
import { useRef } from "react";
const Addnote = ({addNote}) => {

  const NotetitleElement = useRef();
  const NotecontentElement = useRef(); 

  const handleAddbuttonClick = () => {
    const noteTitle = NotetitleElement.current.value;
    const noteContent = NotecontentElement.current.value;
    NotetitleElement.current.value = "";
    NotecontentElement.current.value = "";
    addNote(noteTitle,noteContent);
  }
    return (
      <div className="input-container">
       
        <label>Title</label>
        <input className="title" placeholder="Enter the title" ref={NotetitleElement}></input>
        <br/><br/>
        <label>Content</label>
        <textarea className="content" placeholder="Content" ref={NotecontentElement}></textarea>
        <br/><br/>
        <button className="add" onClick={handleAddbuttonClick}><h3>Add</h3></button>
        
       
      </div>
    );

};

export default Addnote;