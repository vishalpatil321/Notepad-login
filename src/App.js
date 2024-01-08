
import {useState} from "react";
import './App.css';
import Appname from './Components/Appname';
import Notepadcontainer from './Components/Notepadcontainer';

function App() {

  const [noteItem , setNoteItem] = useState([]);
  const handleNewItem = (itemTitle , itemContent) => {
      
    setNoteItem((currValue) => {
     const NewnoteItem = [
      ...currValue,{
        title:itemTitle,
        content:itemContent,
      },
     ];
     return NewnoteItem;
  })
};

   const handleDeletebutton = (noteItemTitle) => {
    const NewnoteItem = noteItem.filter(item => item.title !== noteItemTitle);
    console.log(`Item Deleted : ${noteItemTitle}`);
    setNoteItem(NewnoteItem);
}
 
  
  return (
    <div className="App">
      <header>
        <Appname/>
      </header>
      <section>
      <Notepadcontainer addNewitem={handleNewItem} noteItems={noteItem} deleteButtonclick={handleDeletebutton}/>
      </section>
    </div>
  );
}

export default App;
