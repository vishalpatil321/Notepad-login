import Note from "./Note";
import "./Shownote.css";
const Shownotes = ({addNewitem , clickOnDelete}) =>{
    return(
      <div className="output-container">
        {
       addNewitem.map(item => 
          <Note key={item} noteTitle={item.title} noteContent={item.content} onDeleteclick={clickOnDelete}>

          </Note>)
        }
      </div>
    );
};

export default Shownotes;