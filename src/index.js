import getObject from "./tables";
import addCategory from "./category";
import { viewCat } from "./category";
import createHome from "./homepage";
import addListForm from "./addList";
function Todo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
    };
}



let list1 = new Todo("Gym", "Go to gym", "12/05/2023", "low")

let defaultProjects = [];




defaultProjects.push(list1);

window.addEventListener("load", getObject(defaultProjects[0]));

//event handlers for all buttons in menu
let addCat = document.getElementById("add-category");
addCat.addEventListener("click", addCategory);

let projcat = document.getElementById("projcat");
projcat.addEventListener("click", viewCat);

let home = document.getElementById("home");
home.addEventListener("click", createHome);

let add = document.getElementById("add");
add.addEventListener("click", addListForm);