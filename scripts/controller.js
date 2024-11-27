import TodoModel from './model.js';
import TodoView from './view.js';

class TodoController {

    constructor(model, view) {
        this.view = view;
        this.model = model;

        this.buttonClick();
    }

    buttonClick(){
        document.querySelector('#todo-add').addEventListener('click', this.add.bind(this));
        document.querySelector('#clear').addEventListener('click', this.clear.bind(this));
        document.body.addEventListener('click', (e) => this.delete(e));
        document.querySelector('#no-completted').addEventListener('click', this.noCompleted.bind(this));
        document.querySelector('#show-all').addEventListener('click', this.showAll.bind(this));
    }

    add(){
        let name = document.querySelector("#todo-input").value;
        if (name === "") return;
        this.view.createTask(name, this.model.id);
        this.model.addTodo(name, this.view.id);
        this.model.id++;
        this.view.id++;
        document.querySelector("#todo-input").value = "";
    }

    clear(){
        document.querySelector('#todo-list').innerHTML = "";
        this.model.todos = [];
        this.model.id = 0;
        this.view.id = 0;
    }

    delete(e){
        if(e.target && (e.target.classList.contains('delete'))){
            let id = Number(e.target.closest('.task').dataset.id);
            //console.log(typeof(id));
            e.target.closest('.task').remove();
            this.model.deleteTodo(id);
        }
    }

    noCompleted(){
        document.querySelectorAll('#todo-list .task').forEach( (item) => {
            if(item.classList.contains('completed')){
                item.classList.add('d-none')
            }
        });
    }

    showAll(){
        document.querySelectorAll('#todo-list .task').forEach( (item) => {
            if(item.classList.contains('d-none')){
                item.classList.remove('d-none')
            }
        });
    }

}

const app = new TodoController(new TodoModel(), new TodoView());