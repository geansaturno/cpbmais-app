<template>
  <div class="home">
    <CpbHeader/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import CpbHeader from '@/components/cpb-header/CpbHeader.vue'

@Component({
  components: {
    HelloWorld,
    CpbHeader
  }
})
export default class Home extends Vue {}
</script>
