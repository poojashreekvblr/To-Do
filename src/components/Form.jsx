import { CiSquarePlus } from "react-icons/ci";
function Form({setTodo}){
    function handleSubmit(event){
        event.preventDefault();
        const value=event.target['form-input'].value;
        setTodo((prevTodos)=>[
            ...prevTodos,
            {id:crypto.randomUUID(),title:value,is_completed:false},
        ])
        event.target.reset();
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label for="form-input">
                <input type="text" id="form-input" name="form-input" placeholder="Write your task here...." />
            </label>
            <button className="button">
            <CiSquarePlus className="plus" />
            </button>
        </form>
    );
}

export default Form;