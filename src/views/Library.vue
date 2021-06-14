<template>
  <div class="library">
    <h2 class="contentTitle">Meditações</h2>
    <ul>
      <li
        v-for="meditation in meditations"
        :key="meditation.id"
        class="library__readingAsset"
        >
        <reading-asset v-bind="meditation"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Meditations } from '@/custom-types'
import { Component, Vue } from 'vue-property-decorator'
import ReadingAsset from '@/components/reading-asset/ReadingAsset.vue'

@Component({
  name: 'Library',
  components: {
    ReadingAsset
  }
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

.library {
  padding: 25px;

  &__readingAsset {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}

</style>
