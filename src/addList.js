import { Todo } from "./index.js";
let todos = new Array;
let Categories = ["default"];
let form = document.createElement("form");
let formDiv = document.createElement("div");
let menu = document.getElementById("side");
let main = document.getElementById("main");
let catInput = document.createElement("input");
let taskInput = document.createElement("input");
let priorityInput = document.createElement("input");
let dueInput = document.createElement("input");
let descriptInput = document.createElement("input");
let List = []
function addListForm(){
    //create the popup form container
    let body = document.getElementById("body");
    
    formDiv.id = "form-div";
    body.appendChild(formDiv);

    //style the transparent background
    
    menu.style.opacity ="35%";
    
    
    main.style.opacity = "85%";
    main.style.backgroundColor = "black";

    //add form fields
    
    form.id = "form";
    formDiv.appendChild(form);

    //first field
    let taskLabel = document.createElement("label");
    taskLabel.setAttribute("for", "task");
    taskLabel.textContent = "Task: "
    form.appendChild(taskLabel);
    
    taskInput.setAttribute("name", "task");
    taskInput.setAttribute("id", "task");
    taskInput.setAttribute("type", "text");
    form.appendChild(taskInput);

    //second field
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority: "
    form.appendChild(priorityLabel);
    
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("id", "priority");
    priorityInput.setAttribute("type", "text");
    form.appendChild(priorityInput);

    //third field
    let catLabel = document.createElement("label");
    catLabel.setAttribute("for", "category");
    catLabel.textContent = "Project Category: "
    form.appendChild(catLabel);
    
    catInput.setAttribute("name", "category");
    catInput.setAttribute("id", "category");
    catInput.setAttribute("type", "text");

    form.appendChild(catInput);
    
    //fourth field
    let dueLabel = document.createElement("label");
    dueLabel.setAttribute("for", "due");
    dueLabel.textContent = "Due Date: "
    form.appendChild(dueLabel);
    
    dueInput.setAttribute("name", "due");
    dueInput.setAttribute("id", "due");
    dueInput.setAttribute("type", "date");
    form.appendChild(dueInput);

    //fifth field
    let descriptLabel = document.createElement("label");
    descriptLabel.setAttribute("for", "description");
    descriptLabel.textContent = "Description: "
    form.appendChild(descriptLabel);
    
    descriptInput.setAttribute("name", "description");
    descriptInput.setAttribute("id", "description");
    descriptInput.setAttribute("type", "text");
    form.appendChild(descriptInput);

    //submit button
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.textContent = "Add";
    form.appendChild(submitBtn);
    submitBtn.addEventListener("click", cat);
   
}


function cat(){
    Categories.push(catInput.value);
    //createTable(Categories);
    createTodo();
    closeForm();
}

export function createTodo(){
    
    let newTodo = new Todo(taskInput.value, descriptInput.value, dueInput.value, priorityInput.value, catInput.value));
    List.push(newTodo);
    
} 

export function getTodos(){
    return List;
}



//create an exit button and use this function to close form
function closeForm(){
    formDiv.style.display = "none";
    menu.style.opacity ="100%";
    main.style.opacity = "100%";
    main.style.backgroundColor = "white";
}

export default addListForm;