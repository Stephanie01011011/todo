import getObject from "./tables";
import addCategory from "./category";
import { viewCat } from "./category";
import createHome from "./homepage";
import addListForm from "./addList";
export function Todo(title, description, dueDate, priority, category) {
    return {
        title,
        description,
        dueDate,
        priority,
        category
    };
}



let defaultProjects = [];


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