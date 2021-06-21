<template>
  <div class="about">
    <h1>This is an about page {{id}}</h1>
    <div v-if="meditation">
      {{meditation}}
    </div>
    {{reading}}
    <p v-if="reading">
      {{reading.content}}
    </p>
  </div>
</template>

<script lang="ts">
import { Meditations } from '@/custom-types'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  name: 'Reading',
  computed: {
    ...mapState(['reading'])
  }
})
export default class Reading extends Vue {
  @Prop({
    required: true
  })
  id!: string

  private meditation?: Meditations

  created (): void {
    this.$store.dispatch('fetchMeditationById', this.id).then(() => {
      this.meditation = this.$store.getters.getMeditationById(this.id)
      console.log('meditation', this.meditation)
    })
    // this.$store.dispatch('fetchTodayReadingByMeditationId', this.id)
    // this.$store.dispatch('fetchTomorrowReadingByMeditationId', this.id)

    // console.log('meditations', this.meditations)
  }
}
</script>
