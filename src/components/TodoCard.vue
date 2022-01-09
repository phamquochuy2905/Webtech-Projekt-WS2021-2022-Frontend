<template>
        <img :src="getToDoList()" class="card-img-top" :alt="toDoList.title">
        <div class="card-body">
          <h5 class="card-title">{{ toDoList.title}} </h5>
          <p class="card-text">
             {{ toDoList.title }} is due by {{ toDoList.deadline }}.
          </p>
          <div class="mt-1">
            <button type="button" @click.prevent="deleteTodo" class="btn btn-danger">Delete</button>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        </div>
        </div>
</template>

<script>
export default {
  name: 'TodoCard',
  props: {
    toDoList: {
      type: Object,
      required: true
    }
  },
  methods: {
    getToDoList () {
      return require('../assets/todoPng.png')
    },
    deleteTodo () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todos/' + this.toDoList.id
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }

}
</script>

<style scoped>

</style>
