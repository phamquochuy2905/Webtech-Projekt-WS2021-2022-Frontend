import { mount } from '@vue/test-utils'
import TodoCreateForm from '@/components/TodoCreateForm'

describe('TodoCreateForm.vue Test', () => {
  it('should not show form by default', () => {
    const wrapper = mount(TodoCreateForm)
    expect(wrapper.find('#todo-create-offcanvas').classes()).not.toContain('show')
  })
})
