import { shallowMount, Wrapper, createLocalVue } from '@vue/test-utils'
import 'jest'
import CpbHeader from './CpbHeader.vue'
import Vuex from 'vuex'
import { state } from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state
})

describe('CpbHeader.vue', () => {
  const header: Wrapper<CpbHeader> = shallowMount(CpbHeader, { localVue, store })

  it('Deve renderizar o heder', () => {
    expect(header).toMatchSnapshot()
  })

  it('Deve passar os dados do menu como parametro', () => {
    expect(header.getComponent({ name: 'HeaderMenu' }).props('menu')).toBe(state.menu)
  })

  describe('Quando clicado no menu', () => {
    it('Deve exibir o menu', async (done) => {
      const menuComponent = header.getComponent({ name: 'HeaderMenu' })
      expect(menuComponent.isVisible()).toBe(false)
      await header.get('.header__menuButton').trigger('click')

      expect(menuComponent.isVisible()).toBe(true)
      done()
    })
  })
})
