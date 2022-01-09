<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="todo in toDoLists" :key="todo.id">
     <todo-card :todo="todo" to-do-list></todo-card>
    </div>
  </div>
</template>

<script>
import TodoCard from '@/components/TodoCard'

export default {
  name: 'TodoCardList',
  components: {
    TodoCard
  },
  props: {
    toDoLists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
