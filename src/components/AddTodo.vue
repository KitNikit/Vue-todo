<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Enter you todo" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit('add-todo', newTodo);
        this.title = '';
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}
input {
  width: 500px;
  height: 30px;
  border: 2px solid cornflowerblue;
  border-radius: 6px;
  font-size: 16px;
}
input:focus {
  outline: none;
}
button {
  margin-left: 10px;
  background: transparent;
  border: 2px solid cornflowerblue;
  border-radius: 6px;
}
button:hover {
  cursor: pointer;
  background: cornflowerblue;
  color: #fff;
}
</style>
