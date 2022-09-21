fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter(function(todo) { return todo.completed === true });
     var completedNo = 0;
     completed.forEach( (todo, index) => {
      completedNo++;
     })
     console.log(completedNo);
  })
  .catch(function(err) { 
    console.log(err);
  });