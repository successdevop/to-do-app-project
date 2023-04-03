// selecting elements
const addTask = document.getElementById("new-task-form");
const taskInputValue = document.getElementById("newTask");
const taskContainer = document.querySelector(".tasks");
const deleteAllTask = document.querySelector(".deleteAll button");
let savedTask = localStorage.getItem("todoTask");

// clear every task not in the local storage
taskContainer.innerHTML = "";

// load saved task
savedTask = JSON.parse(localStorage.getItem("todoTask")) || [];

// load on window refresh or reopening page
savedTask.forEach(displayTodoUI);

// implementing functionalites
addTask.addEventListener("submit", function (e) {
  e.preventDefault();
  // check if task input has a value
  let taskValue = taskInputValue.value;
  if (!taskValue) {
    alert("Please enter a task before submitting");
    return false;
  } else {
    savedTask.push(taskValue);
    localStorage.setItem("todoTask", JSON.stringify(savedTask));
    taskInputValue.value = "";
    displayTodoUI(taskValue);
  }
});

// implementing display UI functionality
function displayTodoUI(taskValue) {
  let htmlCode = "";
  htmlCode += `
      <div class="task">
          <div class="task-content">
            <input type="text" class="text" value="${taskValue}" readonly />
          </div>
          <div class="task-action-btns">
            <button type="" class="edit">Edit</button>
            <button type="" class="delete">Delete</button>
          </div>
      </div>`;

  taskContainer.insertAdjacentHTML("beforeend", htmlCode);

  // implementing task button functionalities
}

taskContainer.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("edit")) {
    const myTarget =
      element.parentElement.previousElementSibling.firstElementChild;

    myTarget.removeAttribute("readonly");
    myTarget.focus();
    element.innerText = "save";
  }
  // else {
  //   const myTarget =
  //     element.parentElement.previousElementSibling.firstElementChild;
  //   myTarget.setAttribute("readonly", "readonly");
  //   element.innerText = "edit";
  // }
});

deleteAllTask.addEventListener("click", function () {
  if (taskContainer.childElementCount === 0) {
    alert("no task added");
  } else {
    taskContainer.replaceChildren();
    localStorage.clear();
  }
});

// function displayTodo() {
//   let todoTask = localStorage.getItem("todoTask");
//   if (todoTask === null) {
//     todoArray = [];
//   } else {
//     todoArray = JSON.parse(todoTask);
//   }
//   // creating a dynamic element
//   let htmlCode = "";
//   todoArray.forEach((task) => {
//     htmlCode += `
//       <div class="task">
//           <div class="task-content">
//             <input type="text" class="text" value="${task}" readonly />
//           </div>
//           <div class="task-action-btns">
//             <button type="" class="edit">Edit</button>
//             <button type="" class="delete">Delete</button>
//           </div>
//       </div>`;
//   });
//   taskContainer.insertAdjacentHTML("beforeend", htmlCode);

//   //implementing button functionalities
//   const btn = taskContainer.querySelectorAll(".task-action-btns");
//   btn.forEach((eachBtnDiv) => {
//     eachBtnDiv.addEventListener("click", function (e) {
//       const target = e.target;
//       if (target.classList.contains("delete")) {
//         target.parentElement.parentElement.remove();
//         // todoArray = todoArray.filter(e=>e!==)
//       }
//     });
//   });
// }

// function displayTodo() {
//   //creating dynamic element

//   // creating the task element
//   const taskElement = document.createElement("div");
//   taskElement.classList.add("task");
//   // creating task input element div
//   const taskContentElement = document.createElement("div");
//   taskContentElement.classList.add("task-content");
//   // creating task input element
//   const task_input = document.createElement("input");
//   task_input.type = "text";
//   task_input.setAttribute("readonly", "readonly");
//   task_input.classList.add("text");

//   for (let i = 0; i < todoArray.length; i++) {
//     task_input.value = todoArray[i];
//   }
//   // creating the task action buttons div
//   const childActionBtns = document.createElement("div");
//   childActionBtns.classList.add("task-action-btns");
//   // creating the task edit button
//   const btnEdit = document.createElement("button");
//   btnEdit.classList.add("edit");
//   btnEdit.innerText = "Edit";
//   // creating the task delete button
//   const btnDelete = document.createElement("button");
//   btnDelete.classList.add("delete");
//   btnDelete.innerText = "Delete";
//   // appending task buttons to task action buttons div
//   childActionBtns.appendChild(btnEdit);
//   childActionBtns.appendChild(btnDelete);
//   //appending task input to task input div
//   taskContentElement.appendChild(task_input);
//   // appending both task input element div and task action buttons div to task element
//   taskElement.appendChild(taskContentElement);
//   taskElement.appendChild(childActionBtns);
//   // appending task element to task container div
//   taskContainer.appendChild(taskElement);

//   // seting back our task input element to empty string
//   taskInputValue.value = "";

//   // implementing functionality on the child buttons
//   childActionBtns.addEventListener("click", function (e) {
//     const target = e.target;

//     if (target.classList.contains("edit")) {
//       if (btnEdit.innerText.toLowerCase() === "edit") {
//         task_input.removeAttribute("readonly");
//         task_input.focus();
//         btnEdit.innerText = "save";
//       } else {
//         task_input.setAttribute("readonly", "readonly");
//         btnEdit.innerText = "edit";
//       }
//     }

//     if (target.classList.contains("delete")) {
//       taskContainer.removeChild(taskElement);
//     }
//   });
// }
