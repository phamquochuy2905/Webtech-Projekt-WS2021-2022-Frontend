import { mount } from '@vue/test-utils'
import TodoCardList from '@/components/TodoCardList'
import Todo from '@/views/Todo'
import TodoCreateForm from '@/components/TodoCreateForm'

describe('Todo.vue Test', () => {
  it('should show title', () => {
    const wrapper = mount(Todo)

    expect(wrapper.text()).toMatch('Todo')
  })

  it('should have todo card list component', () => {
    const wrapper = mount(Todo)

    const cardList = wrapper.findComponent(TodoCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have todo create form component', () => {
    const wrapper = mount(Todo)

    const createForm = wrapper.findComponent(TodoCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
