const get = () => {
    fetch('http://localhost:3000/todos')
        .then(function (response) {
            console.log('get response', response);
            return response.json();
        })
        .then(function (data) {
            console.log('get data', data);
            const ulEl = document.getElementById('todo-list');

            data.forEach(element => {
                const li = document.createElement('li');
                ulEl.appendChild(li);
                li.innerHTML = element.title;
                if (element.completed) {
                    li.setAttribute('class', 'completed');
                }
            });

        });
};
const addTodoList = () => {
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const input = document.getElementById('add_title');
    console.log('input addTodoList', input.value);
    createTodoList(input.value);
    
});
};
const createTodoList = (todoItem)=>{
    fetch('http://localhost:3000/todos',{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(
            {
                title: todoItem,
                completed: false,

            }
        ),
    }).then(function(response){
        console.log('createTodoList response',response);
        return response.json();
    })
}

get();
addTodoList();