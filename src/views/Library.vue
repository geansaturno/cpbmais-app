<template>
  <div class="libriray">
    <h1>libriray</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Library'
})
export default class Library extends Vue {
  created (): void {
    console.log('created')
    this.$store.dispatch('getMeditations').then((meditations) => {
      console.log('meditations', meditations)
    })
  }
}
</script>
