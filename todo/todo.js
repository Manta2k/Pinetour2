const allowDrop = (event) => {
  event.preventDefault();
};
const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};
const drop = (event) => {
  event.preventDefault();
  const inner = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(inner));
};
const show = () => {
  modalContainer.classList.add("show");
};
const modalContainer = document.getElementsByClassName("modalContainer")[0];
window.onclick = function hide(event) {
  if (event.target == modalContainer) {
    modalContainer.classList.remove("show");
  }
};
const addTodo = () => {
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;
  const status = document.getElementById("Status-input").value;
  const priority = document.getElementById("Priority-input").value;
  const newTodo = document.createElement("div");
  newTodo.classList.add("inner");
  newTodo.draggable = true;
  newTodo.id = "inner";
  newTodo.setAttribute("ondragstart", "drag(event)");
  newTodo.innerHTML = `
      <div class="checkCircle" onclick="clickDone(event)">&#10003;</div>
      <div class="mini-todo">
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Status: ${status}</p>
        <p>Priority: ${priority}</p>
      </div>
      <div class="delete" onclick="deleteTodo(event)">&#10060;</div>
    `;
  if (status === "To do") {
    document.getElementById("ToDo").appendChild(newTodo);
  } else if (status === "In progress") {
    document.getElementById("InProgress").appendChild(newTodo);
  } else if (status === "Stuck") {
    document.getElementById("Stuck").appendChild(newTodo);
  } else if (status === "Done") {
    document.getElementById("Done").appendChild(newTodo);
  }
  modalContainer.classList.remove("show");
  clearInputs();
};

const clickDone = (event) => {
  const todoDone = event.target.parentElement;
  document.getElementById("Done").appendChild(todoDone);
};
const deleteTodo = (event) => {
  const todoToDelete = event.target.parentElement;
  todoToDelete.parentNode.removeChild(todoToDelete);
};
const clearInputs = () => {
  document.getElementById("title-input").value = "";
  document.getElementById("description-input").value = "";
  document.getElementById("Status-input").value = "";
  document.getElementById("Priority-input").value = "";
};
document.addEventListener("click", hide);
const showModal = () => {
  modalContainer.classList.add("show");
};
