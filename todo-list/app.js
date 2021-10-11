//get a reference to the form via the .add-todo class
const addForm = document.querySelector('.add-todo');

//get a reference to the ul tag
const todoList = document.querySelector('.todos')


//function that generates a html template
//this function takes a todo--> refer to line 32
function createTemplate(todo) {
    //generate a template and inject todo into it
    const html = `<li class="list-item">
                    <span>${todo}</span>
                       <i class="fas fa-trash-alt remove"></i>
                </li>`

    //append the html created to the ul
    todoList.innerHTML += html 
}

//add a submit event listener to the add form
addForm.addEventListener('submit', (e) => {
    //this prevents the page from refreshing
    e.preventDefault()

    //get a reference to the input value
    // trim() removes all whitespaces before the todo
    const todo = addForm.add.value.trim();

    //check if the form is empty or not..if it is empty nothing will be added else add todos
    if (todo.length) {
        createTemplate(todo);

        //clear the form after submission
        addForm.reset()
    }  
});

//delete todos
//attach an event listener to the list
todoList.addEventListener('click', (e) => {
    //check to see if what is been clicked contains the remove class
    if (e.target.classList.contains('remove')) {
        //remove/delete the parent element which is the li tag
        e.target.parentElement.remove()
    }
})