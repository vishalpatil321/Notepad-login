import Addnote from "./Addnote";
import "./Notepadcontainer.css";
import Shownotes from "./Shownote";
const Notepadcontainer = ({addNewitem,noteItems,deleteButtonclick}) => {
    return(
      <div className="notepad-container">
         <Addnote addNote={addNewitem}/>
         <Shownotes addNewitem={noteItems} clickOnDelete={deleteButtonclick}/>
      </div>
    );
};

export default Notepadcontainer;