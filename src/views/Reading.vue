<template>
  <div class="about">
    <h1>This is an about page {{id}}</h1>
    <p v-if="reading">
      {{reading.content}}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Reading'
})
export default class Reading extends Vue {
  @Prop({
    required: true
  })
  id!: string

  private reading?: Reading

  created (): void {
    this.$store.dispatch('getDayReading', this.id).then((reading: Reading) => { this.reading = reading })
  }
}
</script>
