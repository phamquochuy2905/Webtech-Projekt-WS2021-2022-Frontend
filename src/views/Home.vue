<template>
  <div class="home">
    <HelloWorld msg="Welcome to Todo App"/>
    <img alt="To-do-list Logo" src="../assets/todoPng.png">
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

//png from "https://pngtree.com/freepng/checklist-on-to-do-list-form-illustration-with-man-signing-a-paper-work-document-vector-modern-flat-design-concept-for-web-banners-web-sites-printed-materials-infographics_5093260.html"
