class TodoView{
    id = 0;
    constructor(text, id) {
        this.text = text;
        this.isDone = false;
        this.div = null;
    }

    createTask(name, id) {
        this.div = document.createElement("div");
        this.div.classList.add("task");
        this.div.dataset.id = this.id;

        let input = document.createElement("input");
        input.addEventListener("click", (e) => this.changeState(e.target.closest(".task")));
        input.type = "checkbox";

        let p = document.createElement("p");
        p.innerText = name;

        let btnDelete = document.createElement("div")
        btnDelete.classList.add("delete");

        let date = document.createElement("div");
        let timeNow = new Date();
        let hours = String(timeNow.getHours()).padStart(2, '0');
        let minutes = String(timeNow.getMinutes()).padStart(2, '0');
        let seconds = String(timeNow.getSeconds()).padStart(2, '0');
        date.innerText = hours+ ':' +minutes+ ':' +seconds;

        this.div.append(input);
        this.div.append(p);
        this.div.append(btnDelete);
        this.div.append(date);
        document.querySelector('#todo-list').append(this.div);
    }

    changeState(element) {
        this.isDone = !this.isDone;
        element.classList.toggle("completed");
    }

}

// let arr = new TodoView("asdasdasdasd");
// let arr2 = new TodoView("111");
// arr.createTask();
// arr2.createTask();

export default TodoView;