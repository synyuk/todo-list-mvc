class TodoModel {
    constructor(id) {
        this.todos = []
        this.id = id
    }

    addTodo(name,id){
        let todo = {
            id: id,
            text: name,
            date: new Date().getTime()
        };
        this.todos.push(todo);
        this.id++;
        console.log(this.todos);
    }

    deleteTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== Number(id));
        console.log(this.todos);
    }

    sortTodos() {
        this.todos.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
}


//let task = new TodoModel();
// task.addTodo('11')
// task.addTodo('22')
// task.deleteTodo(0)

export default TodoModel;
