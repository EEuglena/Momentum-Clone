const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
	const li = event.target.parentNode;
	todos = todos.filter((item) => item.id !== parseInt(li.id));
	saveTodos();
	li.remove();
}

function paintTodo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	span.innerHTML = newTodo.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function onTodoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	const newTodoObj = { text: newTodo, id: Date.now() };
	todoInput.value = "";
	todos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos);
	todos = parsedTodos;
	parsedTodos.forEach(paintTodo);
}
