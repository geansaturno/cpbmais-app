<template>
  <ul class="menu menu__wrapper ">
    <li
      v-for="item in menu"
      :key="item.label"
    >
      <a :href="item.link" :is="item.link ? 'a': 'span'" class="menu__item">
        {{item.label}}

        <ul v-if="item.internal" class="menu__wrapper menu__wrapper--internal">
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

@Component({
  name: 'HeaderMenu'
})
export default class HelloWorld extends Vue {
  @Prop({ required: true })
  menu!: Menu;
}
</script>

<style lang="scss">

.menu {
  background-color: black;
  color: white;

  &__wrapper {
    list-style: none;
    padding-left: 0;

    &--internal {
      padding-left: 30px;
    }
  }
}

</style>
