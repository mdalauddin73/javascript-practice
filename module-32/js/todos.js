function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // get the container
    const todoContainer = document.getElementById('todo-container');
    // create the child element
    for (const todo of todos) {
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3> Title: ${todo.title} </h3>
            <p>User: ${todo.userId}</p>
            <p>Is Completed: ${todo.completed === true ? 'Completed' : 'Not Completed'}</P
        `;
        // appendChild
        todoContainer.appendChild(todoDiv);
    }

}
loadTodos();

