<template>
  <div id="app">
    <CpbHeader/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CpbHeader from '@/components/cpb-header/CpbHeader.vue'

@Component({
  components: {
    CpbHeader
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
