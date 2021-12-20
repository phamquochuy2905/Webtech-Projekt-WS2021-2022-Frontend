<template>
  <h1>Welcome to your Todo list</h1>
  <div class="container-fluid">
      <div class="col" v-for="toDoList in toDoLists" :key="toDoList.id">
        <div class="card h-100">
          <img :src="getToDoList(toDoList)" class="card-img-top" :alt="toDoList.title">
          <div class="card-body">
            <h5 class="card-title">{{ toDoList.title}} </h5>
            <p class="card-text">
              {{ toDoList.title }} ist am {{toDoList.deadline}} fällig.
              Fertigstellungsstatus: {{toDoList.completed ? 'fertig' : 'noch nicht fertig'}}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data () {
    return {
      toDoLists: []
    }
  },
  methods: {
    getToDoList (toDoList) {
      if (toDoList.id.exists) {
        return require('../assets/todoPng.png')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/todos'
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
