<template>
  <div class="home">
    <HelloWorld msg="Welcome to Todo App"/>
    <img alt="To-do-list Logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
