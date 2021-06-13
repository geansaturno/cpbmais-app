<template>
  <div class="libriray">
    <h2 class="contentTitle">Meditações</h2>
  </div>
</template>

<script lang="ts">
import { Meditations } from '@/custom-types'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Library'
})
export default class Library extends Vue {
  private meditations: Meditations[] = []

  created (): void {
    console.log('created')
    this.$store.dispatch('getMeditations').then((meditations) => {
      this.meditations = meditations
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/contentTitle.scss';

</style>
