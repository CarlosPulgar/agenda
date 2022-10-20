import { displayTask } from "./readTask.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () => deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  const li = document.querySelector("[data-list]")
 const task = JSON.parse(localStorage.getItem("task"));
 const index=task.findIndex((item) => item.id ===id);
 const newtask=task.splice(index,1);
 li.innerHTML = ""
 localStorage.setItem("task", JSON.stringify(task));
 displayTask()
};

export default deleteIcon;
