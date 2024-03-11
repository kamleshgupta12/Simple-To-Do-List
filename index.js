
function add() {
    
    var taskInput = document.getElementById('input');
  
    let inputValue =taskInput.value;

    
    if (inputValue.length < 4) {
        
        alert("Please Enter  Task...");
        
    }
    else {
        const taskInput = document.getElementById('input').value;
        
        let todoItems = document.getElementById('tableBody');
        
        let tableRow = todoItems.insertRow(0);
        let tableData1 = tableRow.insertCell(0);
        let tableData2 = tableRow.insertCell(1);
        tableData1.innerHTML = taskInput;
   

       
        tableData2.innerHTML = '<button onclick="updateButton(this)">Update</button>' +
            '<button onclick="deleteButton(this)">Delete</button>';

            


    }

    taskInput.value = "";

}


function deleteButton(button){
    let Row = button.parentNode.parentNode;
    Row.parentNode.removeChild(Row);

}


function updateButton(button){
    let Row = button.parentNode.parentNode;
    let newTask = prompt("Update New Task......");
    if (newTask.trim() !== "" ) {
        Row.cells[0].innerHTML=newTask;


    }
    

}

















    // const taskInput = document.getElementById('input');
    // const taskList = document.getElementById('list');
    // let table = document.getElementsByTagName('tbody');
    // let tableRow = table.insertRow();
    // let tableData = tableRow.insertCell
    // console.log(taskList);

    // create li items 

//     const createLi = document.createElement('li');
//     createLi.innerHTML = taskInput.value;
//     // console.log(createLi);



//     //  create delete btn 

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';


//     // console.log(deleteButton);

//     deleteButton.addEventListener('click', function () {
//         taskList.removeChild(createLi);
//     });

//     createLi.appendChild(deleteButton);


//     //   create update btn 

//     const updateButton = document.createElement('button');
//     updateButton.textContent = 'Update';
//     // console.log(updateButton);
//     updateButton.style.backgroundColor = "green";

//     updateButton.addEventListener('click', function () {
//         const updateTask = prompt('Update New Task....');
//         if (updateTask !== '') {
//             createLi.innerHTML = updateTask;
//             createLi.appendChild(deleteButton);
//             createLi.appendChild(updateButton);

//         }
//     });


//     createLi.appendChild(deleteButton);
//     createLi.appendChild(updateButton);
//     taskList.appendChild(createLi);
//     taskInput.value = '';

// }
// }




