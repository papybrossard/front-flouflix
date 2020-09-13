<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <header/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>
