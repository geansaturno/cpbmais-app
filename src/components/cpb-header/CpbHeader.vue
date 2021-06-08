<template>
  <nav class="header">
      <button class="header__menuButton" @click="toogleMenu">
        <logo-svg class="header__menuIcon"/>
      </button>
      <header-menu v-show="showMenu" :menu="menu" class="header__menu"/>
      <img src="../../assets/logoCPBmais.png" alt="" class="header__logo">
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderMenu from '../header-menu/HeaderMenu.vue'
import LogoSvg from '../../assets/svg/menu.svg'
import { mapState } from 'vuex'

@Component({
  components: { HeaderMenu, LogoSvg },
  name: 'CpbHeader',
  computed: {
    ...mapState(['menu'])
  }
})
export default class CpbHeader extends Vue {
  private showMenu = false

  toogleMenu (): void {
    this.showMenu = !this.showMenu
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/variables.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-primary;
  position: relative;
  height: 72px;

  &__menu {
    position: absolute;
    top: 72px;
    left: 0;
    height: calc(100vh - 72px);
  }

  &__menuButton {
    background-color: initial;
    border: none;
    padding: 15px;
    position: absolute;
    left: 0;
  }

  &__menuIcon {
    width: 30px;
    color: $g1;
  }

  &__logo {
    margin-left: 35px;
  }
}
</style>
