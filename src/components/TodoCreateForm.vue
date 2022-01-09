<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#todo-create-offcanvas" aria-controls="#todo-create-offcanvas">
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="todo-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Task</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="todo-create-form" novalidate>
        <div class="mb-3">
          <label for="title" class="form-label">Task</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
          <div class="invalid-feedback">
            Please provide the task name.
          </div>
        </div>
        <div class="mb-3">
          <label for="deadline" class="form-label">Deadline</label>
          <input type="date" class="form-control" id="deadline" v-model="deadline" required>
          <div class="invalid-feedback">
            Please provide the deadline.
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="completed" v-model="completed">
            <label class="form-check-label" for="completed">
              Completed
            </label>
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createTodo">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCreateForm',
  data () {
    return {
      title: '',
      deadline: '',
      completed: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createTodo () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/todos'
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const todo = JSON.stringify({
          title: this.title,
          deadline: this.deadline,
          completed: this.completed
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: todo,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
        window.location.reload()
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('todo-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;}
</style>
