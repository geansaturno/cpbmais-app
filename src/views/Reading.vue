<template>
  <div class="about">
    <h1>This is an about page {{id}}</h1>
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
}
</script>
