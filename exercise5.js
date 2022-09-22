fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json.reduce((accumulator, curValue) => {
        if (curValue.completed === false) {
            accumulator.push(curValue);
        }
        return accumulator;
     },[]);
     console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });