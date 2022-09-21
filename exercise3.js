fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.filter(function(todo) { 
        return todo.completed === false
     }).map(({userId, title}) => ({userId, title}));
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });