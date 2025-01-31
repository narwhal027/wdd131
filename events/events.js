let tasks = []; 

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks() {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = tasks.map(taskTemplate).join("");
}

function newTask() {
  const taskInput = document.querySelector("#todo").value.trim();

  if (taskInput) {
    tasks.push({ detail: taskInput, completed: false });
    document.querySelector("#todo").value = "";
    renderTasks();
  }
}

function removeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText.trim();
  tasks = tasks.filter((task) => task.detail !== taskText);
  renderTasks();
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector("p").innerText.trim();
  const taskIndex = tasks.findIndex((task) => task.detail === taskText);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
  }

  renderTasks();
}

function manageTasks(e) {
  const taskElement = e.target.closest("li");
  if (!taskElement) return;

  const action = e.target.dataset.function;

  if (action === "delete") {
    removeTask(taskElement);
  } else if (action === "complete") {
    completeTask(taskElement);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks();