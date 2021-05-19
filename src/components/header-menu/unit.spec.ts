import 'jest'
import { mount } from '@vue/test-utils'
import HeaderMenu from './HeaderMenu.vue'
import { Menu } from '@/custom-types'

describe('HeaderMenu.vue', () => {
  it('deve exibir o menu', () => {
    const menu: Menu[] = [
      {
        label: 'Home',
        link: '/'
      },
      {
        label: 'biblioteca',
        link: '/lib'
      },
      {
        label: 'Meditações',
        internal: [
          {
            label: 'Até que ele volte',
            link: '/meditacoes/ate-que-ele-volte'
          },
          {
            label: 'Sublime beleza',
            link: '/meditacoes/sublime-beleza'
          }
        ]
      }
    ]

    const wrapper = mount(HeaderMenu, {
      propsData: {
        menu
      }
    })

    expect(wrapper).toMatchSnapshot()
  })
})
