const todos = [];

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let list = document.querySelector("ul")
    const input = document.querySelector("input").value
    console.log(list);
    // get the value that was typed in the input
    // push the value into the todos array
    todos.push(input);
    console.log(todos);
    // Call the function that I wrote
    function renderTodos(){ 
        const template=todos.map(todos => `<li>${todos}</li>`);
        list.innerHTML = template.join('');
    } 

    renderTodos()
});

;

//Write a function that maps over the array, and creates template that is put on the page.