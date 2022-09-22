fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((accumulator, curValue) => {
        if (curValue.completed === true) {
            accumulator[curValue.userId] = (accumulator[curValue.userId] || 0) + 1;
        }
        return accumulator;
     },{});
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });