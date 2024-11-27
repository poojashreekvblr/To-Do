import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";

function Item({ item, setTodos }) {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);

    function toggleCompletion() {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
            )
        );
    }

    function handleDelete() {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    }

    function handleEdit() {
        setEditing(true);
    }

    React.useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);

    const handleInputSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    };

    const handleInputBlur = () => {
        setEditing(false);
    };

    const handleInputChange = (e) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id ? { ...todo, title: e.target.value } : todo
            )
        );
    };

    return (
        <li id={item?.id} className="todo-item">
            {editing ? (
                <form className="edit-form" onSubmit={handleInputSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
            ) : (
                <>
                    <button className="todo-left" onClick={toggleCompletion}>
                    {item.is_completed?<ImCheckboxChecked id="checkbox"/>:<RiCheckboxBlankLine id="checkbox"/>}
                        <p style={{ textDecoration: item.is_completed ? "line-through" : "none" }}>
                            {item?.title}
                        </p>
                    </button>
                    <div className="todo-right">
                        <button onClick={handleEdit}>
                            <FaEdit className="todo-edit" />
                        </button>
                        <button onClick={handleDelete}>
                            <MdDelete className="todo-delete" />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

function Todolist({ todos, setTodos }) {
    return (
        <ol className="list">
            {todos && todos.length > 0 ? (
                todos.map((item, index) => <Item key={index} item={item} setTodos={setTodos} />)
            ) : (
                <p id="p">Add the work......</p>
            )}
        </ol>
    );
}

export default Todolist;
