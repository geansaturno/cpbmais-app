import { mount, Wrapper } from '@vue/test-utils'
import 'jest'
import CpbHeader from './CpbHeader.vue'

describe('CpbHeader.vue', () => {
  const header: Wrapper<CpbHeader> = mount(CpbHeader)

  it.skip('Deve renderizar o heder', () => {
    expect(header).toMatchSnapshot()
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
