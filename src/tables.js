
function getObject(obj){
    let list = obj;
    console.log(list);
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

export default getObject;
