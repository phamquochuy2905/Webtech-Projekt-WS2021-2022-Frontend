import { mount } from '@vue/test-utils'
import TodoCard from '@/components/TodoCard'
import TodoCardList from '@/components/TodoCardList'

describe('TodoCardList.vue test', () => {
  it('should render a todo card for each todo', () => {
    const wrapper = mount(TodoCardList, {
      propsData: {
        toDoLists: [
          {
            id: 2,
            title: 'Project',
            deadline: '2022-01-09',
            completed: false
          },
          {
            id: 3,
            title: 'Meilstone',
            deadline: '2021-12-12',
            completed: true
          }
        ]
      }
    })

    const toDoCard = wrapper.findAllComponents(TodoCard)
    expect(toDoCard.length).toBe(2)
  })
})
