
function Info({todo_completed,total_todo}){
    return(
        <div className="info">
            <div className="text">
           <h2>Task Done</h2>
           <h3>Keep it up</h3> 
           </div>
           <p>{todo_completed}/{total_todo}</p>
        </div>
    );
}

export default Info;