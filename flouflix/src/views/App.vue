<template>
  <div>
    <Header/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '../components/Header.vue'

const components = {
  Header
}

@Component({ components })
export default class App extends Vue {}
</script>
