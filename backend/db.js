const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://anuj123:09876anuj@cluster0.8xivp.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,

})

const todo = mongoose.model("todos",todoSchema);

module.exports= {
    todo
}