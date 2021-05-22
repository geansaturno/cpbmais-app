import HeaderMenu from './HeaderMenu.vue'

export default {
  title: 'Menu',
  component: HeaderMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderMenu },
  template: '<header-menu v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  menu: [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Biblioteca',
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
}
