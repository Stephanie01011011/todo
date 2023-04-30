import { createTodo, getTodos} from "./addList"

function getObject(obj){
    let list = obj;
    
   // createTable(list);
    
}

/*function createTable(list){
    let main = document.getElementById("main");
    let table = document.createElement("table");
    main.appendChild(table);

    
   /* let tableRowHead = document.createElement("tr");
    table.appendChild(tableRowHead);
    let tableHead = document.createElement("th");
    tableHead.textContent = list.title
    tableRowHead.appendChild(tableHead);
    let tableRowData = document.createElement("tr");
    table.appendChild(tableRowData);
    let tableData = document.createElement("td");
    tableData.textContent = list.description
    tableRowData.appendChild(tableData);*/
   /* getData(table, list);
}

function getData(table, list){
    
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of list) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
}*/
let todos = getTodos();
console.log(todos);
console.log(todos[0]);
console.log(todos[0][0]);
export function createDefaultTable(){
    
    let body = document.getElementById("main");
    body.innerHTML = "";
    let textString = "<h1>Default Project</h1><ul>";
    
    
   
    
    for(let i = 0; i < todos.length; i++){
        console.log(todos[i][0]);
        textString += "<li>" + todos[i][0]+ "</li>";

    }
    textString += "</ul>";
    body.innerHTML = textString;

    
}

export function createOtherTables(){

}

export default getObject;
