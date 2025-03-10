window.addEventListener('load', init);

//Global variables
let inputField;
let list;
let todoItems = [];


/**
 * Initialize the application
 */
function init() {
    if (typeof window.localStorage === 'undefined') {
        console.error('Local storage is not available in your browser');
        return;
    }

    //Get elements from HTML
    const toDoForm = document.querySelector('#todo-form');
    inputField = document.querySelector('#todo-field');
    list = document.querySelector('#list');


    getTodoItemsFromLocalStorage();
    //Event Listeners
    toDoForm.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', todoItemClickHandler);



}

/**
 * Handler for when the form is submitted
 *
 * @param e
 */
function formSubmitHandler(e){
    e.preventDefault();

    const inputValue = inputField.value

    // form validation (is it empty?)
    if (inputValue !== ''){
        addListItem(inputValue);
        addTodoItemToLocalStorage(inputValue);

        inputField.value = '';
        inputField.classList.remove('error');
    } else {
        // warning feedback
        inputField.classList.add('error');
    }
}

function addListItem(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    list.appendChild(listItem);
}

function addTodoItemToLocalStorage(value) {
    todoItems.push(value);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function getTodoItemsFromLocalStorage(array) {
    const todoItemsString = localStorage.getItem('todoItems');
    if (todoItemsString !== null){
        todoItems = JSON.parse(todoItemsString);
        for (let todoItem of todoItems) {
            addListItem(todoItem);
        }
    }
}

function todoItemClickHandler(e){
    const target = e.target;

    //Return when no list item is clicked
    if (target.nodeName !== 'LI'){
        return;
    }

    removeTodoItemFromLocalStorage(target.innerText);

    target.remove();
}




  function removeTodoItemFromLocalStorage(value){
      const itemIndex =todoItems.indexOf(value);
      todoItems.splice(itemIndex, 1);
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }
