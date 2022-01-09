<template>
        <div class="card h-100">
        <img :src="getToDoList(toDoList)" class="card-img-bot" :alt="toDoList.title">
        <div class="card-body">
          <h5 class="card-title">{{ toDoList.title}} </h5>
          <p class="card-text">
            {{ toDoList.title }} ist am {{ toDoList.deadline }} fällig.
            Fertigstellungsstatus: {{toDoList.completed ? 'fertig' : 'noch nicht fertig'}}
          </p>
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
    getToDoList (toDoList) {
      if (toDoList.id.exists) {
        return require('../assets/todoPng.png')
      }
      return require('../assets/todoPng.png')
    }
  }
}
</script>

<style scoped>

</style>
