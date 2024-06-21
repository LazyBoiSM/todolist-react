import { useContext } from "react";
import Context from "./Context";
import List from "./List";

function Form() {
    const {text, setText, itemList,editId,setEditMode, editMode,setItemList} = useContext(Context);

    function submitHandler(e) {
        e.preventDefault();
        if(text.length === 0) {
            return;
        }
        setItemList([...itemList, {id: Math.random().toString(), name: text}]);
        setText("");
    }

    function editHandler(e) {
        e.preventDefault();

        setItemList(itemList.map((item) => {
            if(item.id ===  editId ) {
                return {...item, name: text};
            } else {
                return item;
            }
        }))
        setEditMode(false);
        setText("");
    }
    const handler = editMode ? editHandler : submitHandler;
    return (
      <div className="container">
        <h3>Just type it...</h3>
        <form className="formContainer" onSubmit={handler}>
          <input className="formControl" value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="enter text"/>
          <button className="btn" type="submit">
            {editMode ? "Update" : "Submit"}
          </button>
        </form>
        <List/>
      </div>
    );
}

export default Form;