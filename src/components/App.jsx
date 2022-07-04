import react,{useState} from "react";
import reactDom from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
  const [notes,setNotes]=useState([]);
function addnote(newNote){
setNotes(prevNotes=>{
   return [...prevNotes,newNote];
});}

function deleteNote(id){
  setNotes(prevNotes=>{
    return  prevNotes.filter((noteItem,index)=>{
          return index!==id;
      });
  });
}
    return(<div>
        <Header />
        <CreateArea
        onAdd={addnote} />
       { notes.map((noteItem,index)=>{
            return( <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />)
        })}
        
        <Footer />
    </div>
    );
}
export default App;