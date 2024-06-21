import { useState } from "react";
import Context from "./Context";
import Form from "./Form";


function App() {
  const [text, setText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");
  return ( 
    <Context.Provider value={{text, setText, itemList, setItemList,editId, setEditId, editMode, setEditMode}}>
      <Form/>
    </Context.Provider>
  );
}

export default App;
