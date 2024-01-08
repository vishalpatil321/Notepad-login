import "./Note.css";
const Note = ({noteTitle,noteContent,onDeleteclick}) => {
    return(
        <div className="note">
            <div className="top">
               <h3>{noteTitle}</h3> 
               <button onClick={()=>onDeleteclick(noteTitle)}>Delete</button>
            </div>
            <div className="content1">
                <p>{noteContent}</p>
            </div>
        </div>
    );
};

export default Note;