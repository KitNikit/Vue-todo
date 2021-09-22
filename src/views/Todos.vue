<template>
  <h1>Todo application</h1>
  <hr />
  <AddTodo @add-todo="addTodo" />
  <center>
    <select v-model="filter">
      <option value="all">ALL</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
  </center>
  <hr />
  <Loader v-if="loading" />
  <TodoList
    v-else-if="filteredTodos.length"
    v-bind:todos="filteredTodos"
    @remove-todo="removeTodo"
  />
  <p v-else>No todos!</p>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all',
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredTodos() {
      let filter;

      if (this.filter === 'all') {
        filter = this.todos;
      }

      if (this.filter === 'completed') {
        filter = this.todos.filter((t) => t.completed);
      }

      if (this.filter === 'not-completed') {
        filter = this.todos.filter((t) => !t.completed);
      }

      return filter;
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

<style scoped>
#app {
  color: red;
}
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

select {
  text-align: center;
  margin-top: 10px;
  width: 200px;
  height: 25px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
