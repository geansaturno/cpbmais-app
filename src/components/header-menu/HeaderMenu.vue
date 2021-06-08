<template>
  <ul class="menu menu__wrapper ">
    <li
      v-for="item in menu"
      :key="item.label"
      class="menu__item"
    >
      <router-link :to="item.link" :is="item.link ? 'router-link': 'span'" class="">
        {{item.label}}
        <ul v-if="item.internal">
          <li
            v-for="internal in item.internal"
            :key="internal.name"
          >
            <router-link :to="internal.link" :is="internal.link ? 'router-link': 'span'" class="menu__internal">
              {{internal.label}}
            </router-link>
          </li>
        </ul>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { MenuItem } from '@/custom-types'

@Component({
  name: 'HeaderMenu'
})
export default class HelloWorld extends Vue {
  @Prop({ required: true })
  menu!: MenuItem;
}
</script>

<style lang="scss">
@import 'src/assets/scss/variables.scss';

.menu {
  background-color: $g3;
  max-width: 350px;
  width: 100vw;

  &__item {
    color: $g1;
    font-size: 21px;
    padding: 19px 0;
    margin: 0 22px;

    &:not(:last-child) {
      border-bottom: 1px solid $g2;
    }
  }

  &__wrapper {
    list-style: none;
    padding-left: 0;

    &--internal {
      padding-left: 30px;
    }
  }
}

</style>
