export function Todo({todos}){
    return <div>
        {todos.map(function(i) {
        return <div>
            <h1>{i.title}</h1>
            <h2>{i.description}</h2>
            <button>{i.completed == true ? "completed":"Mark as completed"}</button>


        </div>
    })}
    </div>



}