
function addCategory(){
    let projectCategories = ["default"];
    let cat = prompt("What is the category name? ", "Category");
    projectCategories.push(cat);
    console.log(projectCategories);
    
}
export default addCategory;