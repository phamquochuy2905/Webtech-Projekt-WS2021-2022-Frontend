<template>
  <h1>Your Todo list</h1>
  <div class="container-fluid">
    <todo-list :toDoLists="this.toDos"></todo-list>
  </div>
    <todo-create-form></todo-create-form>
</template>

<script>
import TodoCreateForm from '@/components/TodoCreateForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'Todo',
  components: { TodoList, TodoCreateForm },
  data () {
    return {
      toDos: [
      ]
    }
  },
  methods: {
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todos'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(toDoList => {
        this.toDoLists.push(toDoList)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 16px;
  margin-bottom: 16px;
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
}

</style>

//png from "https://pngtree.com/freepng/checklist-on-to-do-list-form-illustration-with-man-signing-a-paper-work-document-vector-modern-flat-design-concept-for-web-banners-web-sites-printed-materials-infographics_5093260.html"
