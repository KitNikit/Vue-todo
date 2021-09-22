<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input
        type="checkbox"
        @change="todoLocal.completed = !todoLocal.completed"
      />
      <strong>{{ index + 1 }}</strong>
      {{ filteredTodo }}
    </span>
    <button class="rm" @click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  computed: {
    filteredTodo() {
      return this.todo.title.toUpperCase();
    },
  },
  data() {
    return {
      todoLocal: this.todo,
    };
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.rm {
  border: none;
  width: 25px;
  height: 25px;
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
input {
  cursor: pointer;
  margin-right: 1rem;
}</style
>>
