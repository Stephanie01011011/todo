let form = document.createElement("form");
function addListForm(){
    //create the popup form container
    let body = document.getElementById("body");
    let formDiv = document.createElement("div");
    formDiv.id = "form-div";
    body.appendChild(formDiv);

    //style the transparent background
    let menu = document.getElementById("side");
    menu.style.opacity ="35%";
    
    let main = document.getElementById("main");
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
    let taskInput = document.createElement("input");
    taskInput.setAttribute("name", "task");
    taskInput.setAttribute("id", "task");
    taskInput.setAttribute("type", "text");
    form.appendChild(taskInput);

    //second field
    let priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority: "
    form.appendChild(priorityLabel);
    let priorityInput = document.createElement("input");
    priorityInput.setAttribute("name", "priority");
    priorityInput.setAttribute("id", "priority");
    priorityInput.setAttribute("type", "text");
    form.appendChild(priorityInput);

    //third field
    let catLabel = document.createElement("label");
    catLabel.setAttribute("for", "category");
    catLabel.textContent = "Project Category: "
    form.appendChild(catLabel);
    let catInput = document.createElement("input");
    catInput.setAttribute("name", "category");
    catInput.setAttribute("id", "category");
    catInput.setAttribute("type", "text");
    form.appendChild(catInput);

    //fourth field
    let dueLabel = document.createElement("label");
    dueLabel.setAttribute("for", "due");
    dueLabel.textContent = "Due Date: "
    form.appendChild(dueLabel);
    let dueInput = document.createElement("input");
    dueInput.setAttribute("name", "due");
    dueInput.setAttribute("id", "due");
    dueInput.setAttribute("type", "date");
    form.appendChild(dueInput);

    //fifth field
    let descriptLabel = document.createElement("label");
    descriptLabel.setAttribute("for", "description");
    descriptLabel.textContent = "Description: "
    form.appendChild(descriptLabel);
    let descriptInput = document.createElement("input");
    descriptInput.setAttribute("name", "description");
    descriptInput.setAttribute("id", "description");
    descriptInput.setAttribute("type", "text");
    form.appendChild(descriptInput);

    //submit button
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    form.appendChild(submitBtn);
   
}

function closeForm(){
    form.style.display = "none";
}

export default addListForm;