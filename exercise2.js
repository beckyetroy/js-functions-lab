fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => { 
    const todoTitles = [];
     json.forEach( (todo, index) => {
      todoTitles.push(todo.title);
    })
     console.log(todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });