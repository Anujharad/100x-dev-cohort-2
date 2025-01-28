const { createTodo,updateTodo } = require ("./types");
const express = require ('express');
const { todo } = require ('./db');
const cors = require ('cors');



const app = express();

app.use(express.json());
app.use(cors());


app.post('/todo',async (req,res)=>{
    const createPlayload = req.body;
    const parsedPlayload = createTodo.safeParse(createPlayload);

    if(!parsedPlayload.success){
    res.status(411).json({
        msg: "You sent the wrong input",
    });
    return ;
}
 await todo.create({
    title: createPlayload.title,
    description: createPlayload.description,
    completed: false
})

res.json({
    msg: "todo created"
})


})

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({});
    console.log(todos);
    res.json({
        msg: todos
    })

})

app.put('/completed',async (req,res)=>{
    const updatePlayload = req.body;
    const parsedPlayload = createTodo.safeParse(updatePlayload);

    if(!parsedPlayload.success){
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return ;

    }
    await todo.update({
        _id: req.body._id
    },{
        completed: true
    })
    res.json({
        msg: "todo mark as completed"
    })

})
app.listen(3000);