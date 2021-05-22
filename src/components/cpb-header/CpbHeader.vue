<template>
  <nav>
      <button class="header__menuButton" @click="toogleMenu">

      </button>
      <header-menu v-show="showMenu"/>
      Header
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderMenu from '../header-menu/HeaderMenu.vue'

@Component({
  components: { HeaderMenu },
  name: 'CpbHeader'

})
export default class CpbHeader extends Vue {
  private showMenu = false

  toogleMenu (): void {
    this.showMenu = !this.showMenu
  }
}
</script>

<style>

</style>
