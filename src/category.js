let projectCategories = ["default"];

import { createDefaultTable } from "./tables"

function addCategory(){
    let cat = prompt("What is the category name? ", "Category");
    projectCategories.push(cat);
    

   
    
}

export function viewCat(){
    let main = document.getElementById("main");
    main.innerHTML = "";
    let catText = document.createElement("h1");
    catText.textContent = "Project Categories";
    main.appendChild(catText);

    let categoryList = document.createElement("ul");
    main.appendChild(categoryList);
    
    var str = '<h1>Project Categories:</h1><ul>'

    projectCategories.forEach(function(cat) {
    str += '<li>'+ cat + '</li>';
}); 

str += '</ul>';
document.getElementById("main").innerHTML = str;

main.querySelectorAll("li")[0].addEventListener("click", createDefaultTable);
}
export default addCategory;