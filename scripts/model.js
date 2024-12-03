class TodoModel {
    constructor() {
        this.todos = [];
        this.id = 0;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(callback => callback());
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
        this.notifyObservers();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.notifyObservers();
    }

    clearTodos() {
        this.todos = [];
        this.notifyObservers();
    }

    changeTodoStatus(id) {
        const todo = this.todos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        this.notifyObservers();
    }

}

export default TodoModel;
