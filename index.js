var inputTag = document.getElementById("input");
var listItems = document.getElementById("list");
// console.log(listItems);

function add() {
    var taskInput = document.getElementById('input').value;
    if (taskInput.length < 4) {
        alert("Please Enter vailid Task...");
    }
    else {
        const taskInput = document.getElementById('input');
        const taskList = document.getElementById('list');
        // console.log(taskList);

        // create li items 

        const createLi = document.createElement('li');
        createLi.innerHTML = taskInput.value;
        // console.log(createLi);



        //  create delete btn 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';


        // console.log(deleteButton);

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(createLi);
        });

        createLi.appendChild(deleteButton);


        //   create update btn 

        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        // console.log(updateButton);
         updateButton.style.backgroundColor = "green";

        updateButton.addEventListener('click', function () {
            const updateTask = prompt('Please Enter New Task....');
            if (updateTask !== '') {
                createLi.innerHTML = updateTask;
                createLi.appendChild(deleteButton);
                createLi.appendChild(updateButton);
              
            }
        });


        createLi.appendChild(deleteButton);
        createLi.appendChild(updateButton);
        taskList.appendChild(createLi);
        taskInput.value = '';

    }
}




