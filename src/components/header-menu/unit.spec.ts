import 'jest'
import { mount, Wrapper } from '@vue/test-utils'
import HeaderMenu from './HeaderMenu.vue'
import { Menu } from '@/custom-types'

interface MenuModel {
  menu: Menu[]
}

describe('HeaderMenu.vue', () => {
  let wrapper: Wrapper<HeaderMenu>
  let menu :Menu[]

  function getWrapper (propsData: MenuModel): Wrapper<HeaderMenu> {
    return mount(HeaderMenu, { propsData })
  }

  it.skip('deve exibir o menu', () => {
    menu = [
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

    wrapper = getWrapper({ menu })
    expect(wrapper).toMatchSnapshot()
  })

  describe('Quando tem link no menu', () => {
    beforeEach(() => {
      menu = [
        {
          label: 'Biblioteca',
          link: '/lib'
        }
      ]
      wrapper = getWrapper({ menu })
    })

    it('Deve exibir uma tag link', () => {
      expect(wrapper.get('.menu__item').element.tagName.toLocaleLowerCase()).toBe('a')
    })

    it('Deve exibir o label do item', () => {
      expect(wrapper.get('.menu__item').text()).toBe(menu[0].label)
    })
  })

  describe('Quando não tem link no menu', () => {
    beforeEach(() => {
      menu = [
        {
          label: 'Meditações'
        }
      ]
      wrapper = getWrapper({ menu })
    })

    it('Deve exibir uma tag span', () => {
      expect(wrapper.get('.menu__item').element.tagName.toLocaleLowerCase()).toBe('span')
    })
    it('Deve exibir o label do item', () => {
      expect(wrapper.get('.menu__item').text()).toBe(menu[0].label)
    })
  })

  describe('Internas', () => {
    describe('Quando tem internas', () => {
      it('Deve exibir as internas', () => {
        menu = [
          {
            label: 'Meditações',
            internal: [
              {
                label: 'Até que ele volte',
                link: '/até-que-ele-volte'
              }
            ]
          }
        ]

        wrapper = getWrapper({ menu })

        expect(wrapper.get('.menu__internal').exists()).toBe(true)
      })
    })

    describe('Quando as internas tem link', () => {
      beforeEach(() => {
        menu = [
          {
            label: 'Meditações',
            internal: [
              {
                label: 'Até que ele volte',
                link: '/até-que-ele-volte'
              }
            ]
          }
        ]
        wrapper = getWrapper({ menu })
      })

      it('Deve exibir uma tag a', () => {
        expect(wrapper.get('.menu__internal').element.tagName.toLocaleLowerCase()).toBe('a')
      })

      it('Deve exibir o label do item', () => {
        expect(wrapper.get('.menu__internal').text()).toBe(menu[0].internal?.[0].label)
      })
    })

    describe('Quando as internas não tem link', () => {
      beforeEach(() => {
        menu = [
          {
            label: 'Meditações',
            internal: [
              {
                label: 'Até que ele volte'
              }
            ]
          }
        ]
        wrapper = getWrapper({ menu })
      })

      it('Deve exibir um span', () => {
        expect(wrapper.get('.menu__internal').element.tagName.toLocaleLowerCase()).toBe('span')
      })
      it('Deve exibir o label do item', () => {
        expect(wrapper.get('.menu__internal').text()).toBe(menu[0].internal?.[0].label)
      })
    })
  })
})
