// fetch("http://localhost:3000/todos")
//    .then(function (res) {
//       const todos = res.json();
//       //    setTodos(todos.todos);
//    })
//    .then(function (data) {
//       console.log(data.todos);
//    });

fetch("http://localhost:3000/todos")
   .then(function (res) {
      return res.json();
   })
   .then(function (data) {
      console.log(data.todos);
      setTodos(data.todos);
   })
   .catch(function (error) {
      console.error("Error fetching todos:", error);
      setTodos([]); // Set todos to an empty array in case of an error
   });
