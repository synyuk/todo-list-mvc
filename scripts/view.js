class TodoView {
    constructor(model) {
        this.model = model;
    }

    createTask(name, id, date, completed) {
        const div = document.createElement("div");
        div.classList.add("task");
        if(completed) {
            div.classList.add("completed");
        }
        div.dataset.id = id;

        let input = document.createElement("input");
        input.type = "checkbox";
        if(completed) {
            input.checked = true;
        }
        input.addEventListener("click", (e) => {
            this.changeState(e.target.closest(".task"));
            this.model.changeTodoStatus(id);
        });

        let p = document.createElement("p");
        p.innerText = name;

        let btnDelete = document.createElement("div")
        btnDelete.classList.add("delete");
        btnDelete.addEventListener("click", () => {
            this.model.deleteTodo(id);
        });

        let Date = document.createElement("div");
        let timeNow = date;
        let hours = String(timeNow.getHours()).padStart(2, '0');
        let minutes = String(timeNow.getMinutes()).padStart(2, '0');
        let seconds = String(timeNow.getSeconds()).padStart(2, '0');
        Date.innerText = hours+ ':' +minutes+ ':' +seconds;

        div.append(input, p, btnDelete, Date);
        document.querySelector('#todo-list').append(div);
    }

    changeState(element) {
        element.classList.toggle("completed");
    }

    render() {
        const todoList = document.querySelector('#todo-list');
        todoList.innerHTML = "";
        this.model.todos.forEach(todo => {
            this.createTask(todo.text, todo.id, todo.date, todo.complete);
        });
        console.log(this.model.todos);
    }
}

export default TodoView;
