import { mount } from '@vue/test-utils'
import TodoCard from '@/components/TodoCard'

describe('TodoCard.vue test', () => {
  it('should render todo name', () => {
    const wrapper = mount(TodoCard, {
      propsData: {
        toDoList: {
          id: 2,
          title: 'Project',
          deadline: '2022-01-09',
          completed: false
        }
      }
    })
    const title = wrapper.find('.card-title')
    expect(title.text()).toBe('Project')
  })
})
