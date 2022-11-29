
var app = new Vue({
    el: "#toDoApp",
    data: {
      url: "https://jsonplaceholder.typicode.com/todos?&_limit=5",
      dataIsLoaded: false,
      isValidInput: true,
      todos: [],
      unsolvedTodos: [],
      newTitle: "",
    },
    mounted() {
      axios.get(this.url)
        .then((response) => {
          this.todos = response.data;
        })
        .then(this.getUnsolvedTodos);
      this.dataIsLoaded = true;
    },
    methods: {
      getUnsolvedTodos: function() {
        this.unsolvedTodos = this.todos.filter(todo => {
          return todo.completed === false;
        });
      },
      // toggle todo
      toggleTodo: function(todo) {
        todo.completed = !todo.completed;
        // Update unsolved count
        this.getUnsolvedTodos();
      },
      // delete todo
      deleteTodo: function(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        // Update unsolved count
        this.getUnsolvedTodos();
      },
      // validate todo title
      validateInput: function() {
        this.isValidInput = this.newTitle.length >= 3 ? true : false;
      },
      // add todo
      addTodo: function() {
        let lastId = this.todos.length === 0 ? 0 : this.todos[this.todos.length - 1].id;
        const newToDo = {
          id: lastId + 1,
          title: this.newTitle,
          completed: false
        }
  
        this.validateInput();
  
        if (this.isValidInput) {
          this.todos.push(newToDo);
          this.newTitle = "";
        }
  
        // Update unsolved count
        this.getUnsolvedTodos();
      }
  
    },
    created() {},
    watch: {}
  });