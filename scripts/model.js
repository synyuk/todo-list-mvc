class TodoModel {
    constructor(view) {
        this.todos = [];
        this.id = 0;
        this.view = view;
    }

    addTodo(name) {
        const todo = {
            id: this.id,
            text: name,
            date: new Date(),
            complete: false
        };
        this.todos.push(todo);
        this.id++;
        this.view.render();
    }

    changeName(id, value) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.text = value;
        }
        this.view.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.view.render();
    }

    clearTodos() {
        this.todos = [];
        this.view.render();
    }

    changeTodoStatus(id) {
        const todo = this.todos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        this.view.render();
    }

}

export default TodoModel;
