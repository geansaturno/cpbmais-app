import CpbHeader from './CpbHeader.vue'

export default {
  component: CpbHeader,
  title: 'Header'
}

const Template = () => ({
  components: { CpbHeader },
  template: '<cpb-header/>'
})

export const Default = Template.bind({})
