const saveBtn = document.getElementById('btnSave');
const nameInput = document.getElementById('name');

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}
if(saveBtn){
saveBtn.addEventListener('click', () => {
    const myTodo = {
    id: getRandomInt(1,1000000000000),
    name: nameInput.value
}
    const currentTodoStr = localStorage.getItem('Todo');
    if(currentTodoStr){
        const currentTodos = JSON.parse(currentTodoStr)

        currentTodos.push(myTodo)
        localStorage.setItem('Todo',JSON.stringify (currentTodos))

    }else{
        localStorage.setItem('Todo',JSON.stringify ([myTodo]))
    }
window.location.href = '/index.html'
});
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem('Todo');
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);
        const tbody = document.querySelector("#todoList tbody");
    if(todoList && todoList.length){
    todoList.forEach((todo,index) => {
        tbody.innerHTML += ` 
        <tr>
                <td>${todo.id}</td>
                <td>${todo.name}</td>
                <td><button data-id = ${todo.id} class="btn-delete">Xóa</button></td>
        </tr>
`
    });
}
}
}
generateTodoTable();

const deleteBtns = document.querySelectorAll('.btn-delete');
if(deleteBtns && deleteBtns.length){
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            handleDeleteTodo(id)
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem('Todo');
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);
        const newTodo = todoList.filter((todo,index) => todo.id + "" !== id);
        localStorage.setItem('Todo', JSON.stringify(newTodo));
        window.location.reload();
    }}