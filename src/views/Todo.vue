<template>
  <h1>Your Todo list</h1>
  <div class="container-fluid">
    <todo-card-list :toDoLists="this.toDos"></todo-card-list>
  </div>
    <todo-create-form @created="addTodo"></todo-create-form>
</template>

<script>
import TodoCreateForm from '@/components/TodoCreateForm'
import TodoCardList from '@/components/TodoCardList'

export default {
  name: 'Todo',
  components: { TodoCardList, TodoCreateForm },
  data () {
    return {
      toDos: []
    }
  },
  methods: {
    addTodo (todoLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + todoLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(todo => this.toDos.push(todo))
        .catch(error => console.log('error', error))
    }
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

</style>

//png from "https://pngtree.com/freepng/checklist-on-to-do-list-form-illustration-with-man-signing-a-paper-work-document-vector-modern-flat-design-concept-for-web-banners-web-sites-printed-materials-infographics_5093260.html"
