import TodoModel from './model.js';
import TodoView from './view.js';

class TodoController {
    todoList = document.querySelector('#todo-list');

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.buttonClick();
    }

    buttonClick() {
        document.querySelector('#filter').addEventListener('change', (e) => {
            document.querySelector('[data-value ="' + e.target.value + '"]').click();
        })
        document.querySelector('#todo-add').addEventListener('click', this.add.bind(this));
        document.querySelector('#todo-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.add.apply(this);
            }
        });
        document.querySelector('#clear').addEventListener('click', this.clear.bind(this));
        document.querySelector('#no-completed').addEventListener('click', this.noCompleted.bind(this));
        document.querySelector('#show-all').addEventListener('click', this.showAll.bind(this));
        document.querySelector('#sort-date').addEventListener('click', this.sortByDate.bind(this));
        document.querySelector('#sort-name').addEventListener('click', this.sortByName.bind(this));
    }

    add() {
        let name = document.querySelector("#todo-input").value;
        if (name === "") return;
        this.model.addTodo(name);
        document.querySelector("#todo-input").value = "";
    }

    clear() {
        this.model.clearTodos();
    }

    noCompleted() {
        this.todoList.innerHTML = "";
        this.model.todos.filter(todo => !todo.complete).forEach(todo => {
            this.view.createTask(todo.text, todo.id, todo.date, todo.complete);
        });
    }

    showAll() {
        this.todoList.innerHTML = "";
        this.model.todos.forEach(todo => {
            this.view.createTask(todo.text, todo.id, todo.date, todo.complete);
        });
    }

    sortByDate() {
        this.model.todos.sort((a, b) => b.date.getTime() - a.date.getTime())
        this.showAll();
    }

    sortByName() {
        this.model.todos.sort((a, b) => a.text.localeCompare(b.text));
        this.showAll();
    }
}

const model = new TodoModel();
const view = new TodoView(model);
const app = new TodoController(model, view);

export default TodoController;
