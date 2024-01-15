/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
//  todo first visit class videos and attemp

class Todo {
   constructor() {
      this.myToDos = [];
   }
   add(todo) {
      this.myToDos.push(todo);
   }

   remove(indexOfTodo) {
      this.myToDos.splice(indexOfTodo, 1);
   }

   update(index, updatedToDo) {
      if (index < this.myToDos.length) {
         this.myToDos[index] = updatedToDo;
      }
      return 0;
   }

   getAll() {
      // console.log(this.myToDos);
      return this.myToDos;
   }

   get(indexOfTodo) {
      // console.log(this.myToDos[indexOfTodo]);
      if (indexOfTodo < this.myToDos.length) {
         return this.myToDos[indexOfTodo];
      }
      return null;
   }

   clear() {
      this.myToDos.splice(0, this.myToDos.length);
   }
}

module.exports = Todo;
