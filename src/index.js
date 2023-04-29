import getObject from "./tables";
import addCategory from "./category";
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

let addCat = document.getElementById("add-category");
addCat.addEventListener("click", addCategory);



