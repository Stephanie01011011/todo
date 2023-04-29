let projectCategories = ["default"];

function addCategory(){
    let cat = prompt("What is the category name? ", "Category");
    projectCategories.push(cat);
    console.log(projectCategories);

   
    
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

}
export default addCategory;