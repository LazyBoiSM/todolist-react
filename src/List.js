import { useContext } from "react";
import Context from "./Context";


function List() {
    const {text, setText, itemList, editId, setEditId,setItemList,editMode, setEditMode} = useContext(Context);

    function deleteItem(id) {
        setItemList(itemList.filter((item) => {
            if(item.id !== id) {
                return item;
            }
        }))
        setText("");
        setEditMode(false);
    }

    function editItem(item) {
        setEditMode(true);
        setText(item.name);
        setEditId(item.id);
    }
    const nothingToShow = itemList.length === 0 ? <h4 className="nothing">nothing to show <i className="fa-solid fa-file-lines"></i> </h4>: "";

    
    return <>
        <div className="listContainer">
            <div >{nothingToShow}</div>
            {itemList.map((item) => {
                return (
                    <div key={item.id} className="listParent">
                        <div>{item.name}</div>
                        <div className="btnContainer">
                            <div className="btn editBtn" onClick={() => editItem(item)}>Edit <i className="fa-solid fa-pen-to-square"></i> </div>
                            <div className="btn deleteBtn" onClick={() => deleteItem(item.id)}>Delete <i className="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}

export default List;