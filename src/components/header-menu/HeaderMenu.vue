<template>
  <ul>
    <li
      v-for="item in menu"
      :key="item.label"
    >
      <a :href="item.link" :is="item.link ? 'a': 'span'" class="menu__item">
        {{item.label}}

        <ul v-if="item.internal">
          <li
            v-for="internal in item.internal"
            :key="internal.name"
          >
            <a :href="internal.link" :is="internal.link ? 'a': 'span'" class="menu__internal">
              {{internal.label}}
            </a>
          </li>
        </ul>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Menu } from '@/custom-types'

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true })
  menu!: Menu;
}
</script>

<style>

</style>
